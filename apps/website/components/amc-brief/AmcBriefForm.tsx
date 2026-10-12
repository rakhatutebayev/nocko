'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import s from './AmcBrief.module.css';
import { STEPS, UI, visibleFields, isEmpty, formatValue, type Answers, type Field, type Lang } from './schema';

const STORAGE_KEY = 'nocko-amc-brief-v1';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REVIEW = STEPS.length;

type Saved = { answers: Answers; step: number; lang: Lang };

function load(): Saved | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Saved) : null;
  } catch {
    return null;
  }
}

function save(v: Saved) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(v));
  } catch {
    /* private mode / storage blocked — form still works, just without a draft */
  }
}

function clearDraft() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

export default function AmcBriefForm() {
  const [lang, setLang] = useState<Lang>('en');
  const [answers, setAnswers] = useState<Answers>({});
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openHelp, setOpenHelp] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [hydrated, setHydrated] = useState(false);
  const startedAt = useRef(Date.now());
  const honeypot = useRef<HTMLInputElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    const draft = load();
    if (draft) {
      setAnswers(draft.answers || {});
      setStep(Math.min(Math.max(draft.step || 0, 0), REVIEW));
    }
    if (urlLang === 'ru' || urlLang === 'en') setLang(urlLang);
    else if (draft?.lang) setLang(draft.lang);
    else if (navigator.language?.toLowerCase().startsWith('ru')) setLang('ru');
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated && status !== 'done') save({ answers, step, lang });
  }, [answers, step, lang, hydrated, status]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const set = (id: string, v: Answers[string]) => {
    setAnswers((a) => ({ ...a, [id]: v }));
    if (errors[id]) setErrors((e) => ({ ...e, [id]: '' }));
  };

  const toggle = (id: string, v: string) => {
    const cur = Array.isArray(answers[id]) ? (answers[id] as string[]) : [];
    // "Don't know" / "None" are exclusive with the concrete options.
    const exclusive = ['unknown', 'none'];
    let next: string[];
    if (cur.includes(v)) next = cur.filter((x) => x !== v);
    else if (exclusive.includes(v)) next = [v];
    else next = [...cur.filter((x) => !exclusive.includes(x)), v];
    set(id, next);
  };

  const validate = (stepIdx: number): Record<string, string> => {
    const errs: Record<string, string> = {};
    for (const f of visibleFields(STEPS[stepIdx], answers)) {
      const v = answers[f.id];
      if (f.required && isEmpty(v)) errs[f.id] = UI.required[lang];
      else if (f.type === 'email' && !isEmpty(v) && !EMAIL_RE.test(String(v).trim())) errs[f.id] = UI.invalidEmail[lang];
    }
    return errs;
  };

  const scrollTop = () => topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const goTo = (n: number) => {
    setErrors({});
    setOpenHelp(null);
    setStep(n);
    scrollTop();
  };

  const next = () => {
    const errs = validate(step);
    if (Object.keys(errs).length) {
      setErrors(errs);
      const first = Object.keys(errs)[0];
      document.getElementById(`f-${first}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    goTo(step + 1);
  };

  const submit = async () => {
    for (let i = 0; i < STEPS.length; i++) {
      const errs = validate(i);
      if (Object.keys(errs).length) {
        setStep(i);
        setErrors(errs);
        scrollTop();
        return;
      }
    }
    setStatus('sending');
    // The team reads English; client-facing language is sent alongside.
    const sections = STEPS.map((st) => ({
      title: st.title.en,
      items: visibleFields(st, answers)
        .filter((f) => !isEmpty(answers[f.id]))
        .map((f) => ({ label: f.label.en, value: formatValue(f, answers[f.id], 'en') })),
    })).filter((sec) => sec.items.length);

    try {
      const res = await fetch('/api/amc-brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lang,
          sections,
          contact: {
            company: answers.company,
            name: answers.contactName,
            email: answers.email,
            phone: answers.phone,
          },
          website: honeypot.current?.value || '',
          formStartedAt: startedAt.current,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      clearDraft();
      setStatus('done');
      scrollTop();
    } catch {
      setStatus('error');
    }
  };

  const reset = () => {
    clearDraft();
    setAnswers({});
    setStatus('idle');
    goTo(0);
  };

  const progress = Math.round((Math.min(step, REVIEW) / REVIEW) * 100);
  const stepLabel = (i: number) => (i < REVIEW ? STEPS[i].title[lang] : UI.reviewStep[lang]);
  const iconId = step < REVIEW ? STEPS[step].id : 'review';

  return (
    <div className={s.page}>
      <div ref={topRef} />
      <div className={s.hero}>
        <div className={s.heroGlow} aria-hidden />
        <header className={s.header}>
          <a href="https://nocko.com" className={s.logo} aria-label="NOCKO">
            <Image src="/images/logo-white.svg" alt="NOCKO" width={120} height={40} priority unoptimized />
          </a>
          <div className={s.lang} role="group" aria-label="Language">
            {(['en', 'ru'] as Lang[]).map((l) => (
              <button key={l} type="button" className={l === lang ? s.langActive : ''} onClick={() => setLang(l)} aria-pressed={l === lang}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </header>
        <div className={s.heroBody}>
          <p className={s.eyebrow}>{UI.eyebrow[lang]}</p>
          <h1 className={s.title}>{UI.title[lang]}</h1>
          <p className={s.lead}>{UI.lead[lang]}</p>
          <ul className={s.chips}>
            <li><Icon id="clock" />{UI.chipTime[lang]}</li>
            <li><Icon id="save" />{UI.chipSave[lang]}</li>
            <li><Icon id="pin" />{UI.chipSurvey[lang]}</li>
          </ul>
        </div>
      </div>

      <div className={s.layout}>
        {status !== 'done' && (
          <aside className={s.side} aria-label={UI.sections[lang]}>
            <div className={s.sideHead}>
              <span>{UI.sections[lang]}</span>
              <span className={s.sidePct}>{progress}% {UI.complete[lang]}</span>
            </div>
            <div className={s.bar}><div className={s.barFill} style={{ width: `${progress}%` }} /></div>
            <ol className={s.nav}>
              {[...STEPS.map((st) => st.id), 'review'].map((id, i) => (
                <li key={id}>
                  <button
                    type="button"
                    className={`${s.navItem} ${i === step ? s.navCurrent : ''} ${i < step ? s.navDone : ''}`}
                    onClick={() => i < step && goTo(i)}
                    disabled={i >= step}
                    aria-current={i === step ? 'step' : undefined}
                  >
                    <span className={s.navIcon}>{i < step ? <Icon id="check" /> : <Icon id={id} />}</span>
                    <span className={s.navText}>{stepLabel(i)}</span>
                  </button>
                </li>
              ))}
            </ol>
            {hydrated && <div className={s.saved}><span className={s.pulse} />{UI.saved[lang]}</div>}
          </aside>
        )}

        <main className={`${s.card} ${status === 'done' ? s.cardDone : ''}`}>
          {status === 'done' ? (
            <div className={s.done}>
              <div className={s.doneIcon} aria-hidden><Icon id="check" /></div>
              <h2>{UI.doneTitle[lang]}</h2>
              <p>{UI.doneText[lang]}</p>
              <p className={s.muted}>{UI.contacts[lang]}</p>
            </div>
          ) : (
            <>
              <div className={s.mobileProgress}>
                <span>{step < REVIEW ? `${UI.step[lang]} ${step + 1} ${UI.of[lang]} ${STEPS.length}` : UI.reviewTitle[lang]}</span>
                <span>{progress}%</span>
                <div className={s.bar}><div className={s.barFill} style={{ width: `${progress}%` }} /></div>
              </div>

              <div className={s.stepHead}>
                <span className={s.stepIcon}><Icon id={iconId} /></span>
                <div>
                  <span className={s.stepNum}>
                    {step < REVIEW ? `${String(step + 1).padStart(2, '0')} / ${String(STEPS.length).padStart(2, '0')}` : '✓'}
                  </span>
                  <h2 className={s.stepTitle}>{step < REVIEW ? STEPS[step].title[lang] : UI.reviewTitle[lang]}</h2>
                </div>
              </div>

              {step < REVIEW ? (
                <section>
                  <p className={s.intro}>{STEPS[step].intro[lang]}</p>
                  {Object.values(errors).some(Boolean) && <p className={s.errorBanner} role="alert">{UI.fixErrors[lang]}</p>}
                  <div className={s.grid}>
                    {visibleFields(STEPS[step], answers).map((f) => (
                      <FieldView
                        key={f.id}
                        f={f}
                        lang={lang}
                        value={answers[f.id]}
                        error={errors[f.id]}
                        helpOpen={openHelp === f.id}
                        onHelp={() => setOpenHelp(openHelp === f.id ? null : f.id)}
                        onSet={(v) => set(f.id, v)}
                        onToggle={(v) => toggle(f.id, v)}
                      />
                    ))}
                  </div>
                </section>
              ) : (
                <section>
                  <p className={s.intro}>{UI.reviewLead[lang]}</p>
                  {STEPS.map((st, i) => (
                    <div key={st.id} className={s.reviewBlock}>
                      <div className={s.reviewHead}>
                        <h3><span className={s.reviewIcon}><Icon id={st.id} /></span>{st.title[lang]}</h3>
                        <button type="button" className={s.linkBtn} onClick={() => goTo(i)}>{UI.edit[lang]}</button>
                      </div>
                      <dl>
                        {visibleFields(st, answers).filter((f) => f.type !== 'consent').map((f) => (
                          <div key={f.id} className={s.reviewRow}>
                            <dt>{f.label[lang]}</dt>
                            <dd>{formatValue(f, answers[f.id], lang) || <span className={s.muted}>{UI.empty[lang]}</span>}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  ))}
                  {status === 'error' && <p className={s.errorBanner} role="alert">{UI.error[lang]}</p>}
                </section>
              )}

              {/* Honeypot: hidden from people, bots fill it in. */}
              <input ref={honeypot} type="text" name="website" tabIndex={-1} autoComplete="off" className={s.hp} aria-hidden />

              <div className={s.actions}>
                {step > 0 ? (
                  <button type="button" className={s.btnGhost} onClick={() => goTo(step - 1)}>← {UI.back[lang]}</button>
                ) : (
                  <span />
                )}
                {step < REVIEW - 1 && <button type="button" className={s.btn} onClick={next}>{UI.next[lang]} →</button>}
                {step === REVIEW - 1 && <button type="button" className={s.btn} onClick={next}>{UI.review[lang]} →</button>}
                {step === REVIEW && (
                  <button type="button" className={`${s.btn} ${s.btnSend}`} onClick={submit} disabled={status === 'sending'}>
                    {status === 'sending' ? UI.sending[lang] : UI.submit[lang]}
                  </button>
                )}
              </div>
              <div className={s.footer}>
                <span>{UI.contacts[lang]}</span>
                {Object.keys(answers).length > 0 && (
                  <button type="button" className={s.linkBtn} onClick={reset}>{UI.reset[lang]}</button>
                )}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

const ICONS: Record<string, string> = {
  company: 'M3 21h18M5 21V7l7-4 7 4v14M9 9h1M14 9h1M9 13h1M14 13h1M10 21v-4h4v4',
  users: 'M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6M22 19v-1a4 4 0 0 0-3-3.9M16 4.1a3 3 0 0 1 0 5.8',
  servers: 'M4 3h16v6H4zM4 15h16v6H4zM8 6h.01M8 18h.01M12 9v6',
  network: 'M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01',
  apps: 'M7 18a5 5 0 0 1-.6-10A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z',
  security: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10M9 12l2 2 4-4',
  current: 'M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v5H5a1 1 0 0 1-1-1zM20 14h-3v5h2a1 1 0 0 0 1-1zM17 19a4 4 0 0 1-4 3h-1',
  amc: 'M9 3h6v3H9zM6 5H5v16h14V5h-1M9 13l2 2 4-4',
  final: 'M5 21V4M5 4h11l-2 4 2 4H5',
  review: 'M4 4h16v16H4zM8 12l3 3 5-6',
  check: 'M5 12l5 5 9-10',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20M12 6v6l4 2',
  save: 'M5 3h11l3 3v15H5zM8 3v5h7V3M8 21v-7h8v7',
  pin: 'M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5',
  bulb: 'M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2',
};

function Icon({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={ICONS[id] ?? ICONS.review} />
    </svg>
  );
}

function FieldView({
  f, lang, value, error, helpOpen, onHelp, onSet, onToggle,
}: {
  f: Field;
  lang: Lang;
  value: Answers[string] | undefined;
  error?: string;
  helpOpen: boolean;
  onHelp: () => void;
  onSet: (v: Answers[string]) => void;
  onToggle: (v: string) => void;
}) {
  const id = `f-${f.id}`;
  const full = !f.half || f.type === 'choice' || f.type === 'multi' || f.type === 'textarea';
  const describedBy = [f.hint && `${id}-hint`, error && `${id}-err`].filter(Boolean).join(' ') || undefined;

  const labelRow = (
    <div className={s.labelRow}>
      <span className={s.label}>
        {f.label[lang]}
        {f.required ? <span className={s.req} aria-hidden> *</span> : null}
      </span>
      {f.help && (
        <button type="button" className={`${s.helpBtn} ${helpOpen ? s.helpBtnOn : ''}`} onClick={onHelp} aria-expanded={helpOpen} aria-label={UI.help[lang]}>
          ?
        </button>
      )}
    </div>
  );

  const extras = (
    <>
      {f.help && helpOpen && <div className={s.help}><Icon id="bulb" /><span>{f.help[lang]}</span></div>}
      {f.hint && <div id={`${id}-hint`} className={s.hint}>{f.hint[lang]}</div>}
      {error && <div id={`${id}-err`} className={s.err}>{error}</div>}
    </>
  );

  if (f.type === 'consent') {
    return (
      <div id={id} className={`${s.field} ${s.full} ${error ? s.hasErr : ''}`}>
        <label className={s.consent}>
          <input type="checkbox" checked={value === true} onChange={(e) => onSet(e.target.checked)} aria-describedby={describedBy} />
          <span>{f.label[lang]}{f.required ? <span className={s.req}> *</span> : null}</span>
        </label>
        {extras}
      </div>
    );
  }

  if (f.type === 'choice' || f.type === 'multi') {
    const multi = f.type === 'multi';
    const selected = multi ? (Array.isArray(value) ? value : []) : [String(value ?? '')];
    return (
      <fieldset id={id} className={`${s.field} ${s.full} ${error ? s.hasErr : ''}`} aria-describedby={describedBy}>
        <legend className={s.legend}>{labelRow}</legend>
        {extras}
        <div className={s.options} role={multi ? 'group' : 'radiogroup'}>
          {f.options!.map((op) => {
            const on = selected.includes(op.v);
            return (
              <label key={op.v} className={`${s.option} ${on ? s.optionOn : ''} ${op.v === 'unknown' ? s.optionUnknown : ''}`}>
                <input
                  type={multi ? 'checkbox' : 'radio'}
                  name={f.id}
                  checked={on}
                  onChange={() => (multi ? onToggle(op.v) : onSet(op.v))}
                />
                <span className={multi ? s.box : s.radio} aria-hidden />
                <span>{op[lang]}</span>
              </label>
            );
          })}
        </div>
      </fieldset>
    );
  }

  const common = {
    id: `${id}-input`,
    value: typeof value === 'string' ? value : '',
    placeholder: f.placeholder?.[lang],
    'aria-describedby': describedBy,
    'aria-invalid': !!error,
    className: s.input,
  };

  return (
    <div id={id} className={`${s.field} ${full ? s.full : ''} ${error ? s.hasErr : ''}`}>
      <label htmlFor={`${id}-input`}>{labelRow}</label>
      {f.help && helpOpen && <div className={s.help}><Icon id="bulb" /><span>{f.help[lang]}</span></div>}
      {f.type === 'textarea' ? (
        <textarea {...common} rows={3} onChange={(e) => onSet(e.target.value)} />
      ) : (
        <input
          {...common}
          type={f.type}
          inputMode={f.type === 'number' ? 'numeric' : undefined}
          min={f.type === 'number' ? 0 : undefined}
          autoComplete={f.id === 'email' ? 'email' : f.id === 'phone' ? 'tel' : f.id === 'contactName' ? 'name' : f.id === 'company' ? 'organization' : undefined}
          onChange={(e) => onSet(e.target.value)}
        />
      )}
      {f.hint && <div id={`${id}-hint`} className={s.hint}>{f.hint[lang]}</div>}
      {error && <div id={`${id}-err`} className={s.err}>{error}</div>}
    </div>
  );
}
