"use client";

import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "nocko-cookie-consent";

function CookieIconSvg(props: { size?: number }) {
  const size = props.size ?? 22;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      style={{ overflow: "visible" }}
    >
      <path
        fill="currentColor"
        d="
  M 27.09 19.96
  Q 28.77 21.28 30.93 20.54
  A 0.58 0.58 0.0 0 1 31.67 20.90
  Q 32.36 22.93 34.81 23.02
  A 0.80 0.79 -86.6 0 1 35.58 23.89
  Q 34.77 33.24 26.18 35.16
  Q 21.10 36.29 16.88 32.98
  Q 12.66 29.67 12.55 24.47
  Q 12.36 15.67 21.25 12.65
  A 0.80 0.79 -17.2 0 1 22.27 13.19
  Q 22.95 15.55 25.08 15.74
  A 0.58 0.58 0.0 0 1 25.61 16.36
  Q 25.40 18.64 27.09 19.96
  Z
  M 19.61 20.20
  A 1.90 1.90 0.0 0 0 17.71 18.30
  A 1.90 1.90 0.0 0 0 15.81 20.20
  A 1.90 1.90 0.0 0 0 17.71 22.10
  A 1.90 1.90 0.0 0 0 19.61 20.20
  Z
  M 26.78 23.46
  A 2.78 2.78 0.0 0 0 24.00 20.68
  A 2.78 2.78 0.0 0 0 21.22 23.46
  A 2.78 2.78 0.0 0 0 24.00 26.24
  A 2.78 2.78 0.0 0 0 26.78 23.46
  Z
  M 20.31 27.95
  A 2.25 2.25 0.0 0 0 18.06 25.70
  A 2.25 2.25 0.0 0 0 15.81 27.95
  A 2.25 2.25 0.0 0 0 18.06 30.20
  A 2.25 2.25 0.0 0 0 20.31 27.95
  Z
  M 32.55 27.95
  A 1.89 1.89 0.0 0 0 30.66 26.06
  A 1.89 1.89 0.0 0 0 28.77 27.95
  A 1.89 1.89 0.0 0 0 30.66 29.84
  A 1.89 1.89 0.0 0 0 32.55 27.95
  Z
  M 26.22 30.74
  A 1.57 1.57 0.0 0 0 24.65 29.17
  A 1.57 1.57 0.0 0 0 23.08 30.74
  A 1.57 1.57 0.0 0 0 24.65 32.31
  A 1.57 1.57 0.0 0 0 26.22 30.74
  Z"
      />
    </svg>
  );
}

type ConsentStatus = "accepted" | "rejected";
type ConsentV1 =
  | ConsentStatus
  | {
      status: ConsentStatus;
      analytics: boolean;
      updatedAt: number;
      version: 1;
    };

type ParsedConsent = {
  status: ConsentStatus;
  analytics: boolean;
  updatedAt: number;
};

function parseConsent(raw: string | null): ParsedConsent | null {
  if (!raw) return null;
  if (raw === "accepted") {
    return { status: "accepted", analytics: true, updatedAt: Date.now() };
  }
  if (raw === "rejected") {
    return { status: "rejected", analytics: false, updatedAt: Date.now() };
  }

  try {
    const obj = JSON.parse(raw) as ConsentV1;
    if (
      typeof obj === "object" &&
      obj &&
      (obj as any).version === 1 &&
      ((obj as any).status === "accepted" || (obj as any).status === "rejected") &&
      typeof (obj as any).analytics === "boolean" &&
      typeof (obj as any).updatedAt === "number"
    ) {
      return {
        status: (obj as any).status,
        analytics: (obj as any).analytics,
        updatedAt: (obj as any).updatedAt,
      };
    }
  } catch {
    // ignore
  }
  return null;
}

function serializeConsent(status: ConsentStatus, analytics: boolean) {
  const payload: ConsentV1 = {
    status,
    analytics,
    updatedAt: Date.now(),
    version: 1,
  };
  return JSON.stringify(payload);
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<ParsedConsent | null>(null);
  const [mounted, setMounted] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    try {
      const parsed = parseConsent(localStorage.getItem(STORAGE_KEY));
      if (parsed) {
        setConsent(parsed);
        setAnalyticsEnabled(parsed.analytics);
      }
    } catch {
      // localStorage not available (SSR or private mode)
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!settingsOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mounted, settingsOpen]);

  const save = (status: ConsentStatus, analytics: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, serializeConsent(status, analytics));
    } catch {
      // ignore
    }
    setConsent({ status, analytics, updatedAt: Date.now() });
    setAnalyticsEnabled(analytics);
  };

  const showBanner = mounted && consent === null && !settingsOpen;
  const showFab = mounted;

  const cookieIcon = useMemo(() => {
    return <CookieIconSvg size={22} />;
  }, []);

  return (
    <>
      {showFab && (
        <button
          type="button"
          className="cookie-consent-fab"
          aria-label="Cookie preferences"
          onClick={() => setSettingsOpen(true)}
        >
          <span className="cookie-consent-fab__icon" aria-hidden="true">
            {cookieIcon}
          </span>
        </button>
      )}

      {showBanner && (
        <div
          className="cookie-consent"
          role="dialog"
          aria-labelledby="cookie-consent-heading"
          aria-describedby="cookie-consent-desc"
        >
          <div className="cookie-consent__inner">
            <span className="cookie-consent__icon" aria-hidden="true">
              {cookieIcon}
            </span>
            <div className="cookie-consent__text">
              <h2 id="cookie-consent-heading" className="cookie-consent__title">
                We use cookies
              </h2>
              <p id="cookie-consent-desc" className="cookie-consent__desc">
                We use cookies to improve your experience, analyze traffic and
                personalize content. You can accept all, or manage preferences.{" "}
                <a href="/privacy-policy" className="cookie-consent__link">
                  Privacy policy
                </a>
              </p>
            </div>
            <div className="cookie-consent__actions">
              <button
                type="button"
                className="cookie-consent__btn cookie-consent__btn--secondary"
                onClick={() => save("rejected", false)}
              >
                Necessary only
              </button>
              <button
                type="button"
                className="cookie-consent__btn cookie-consent__btn--secondary"
                onClick={() => setSettingsOpen(true)}
              >
                Customize
              </button>
              <button
                type="button"
                className="cookie-consent__btn cookie-consent__btn--primary"
                onClick={() => save("accepted", true)}
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}

      {mounted && settingsOpen && (
        <div className="cookie-consent-modal" role="dialog" aria-modal="true">
          <button
            type="button"
            className="cookie-consent-modal__backdrop"
            aria-label="Close cookie preferences"
            onClick={() => {
              if (consent === null) save("rejected", false);
              setSettingsOpen(false);
            }}
          />
          <div className="cookie-consent-modal__panel" role="document">
            <div className="cookie-consent-modal__header">
              <div className="cookie-consent-modal__titlewrap">
                <span className="cookie-consent-modal__titleicon" aria-hidden="true">
                  {cookieIcon}
                </span>
                <h2 className="cookie-consent-modal__title">Cookie preferences</h2>
              </div>
              <button
                type="button"
                className="cookie-consent-modal__close"
                aria-label="Close"
                onClick={() => {
                  if (consent === null) save("rejected", false);
                  setSettingsOpen(false);
                }}
              >
                ×
              </button>
            </div>

            <p className="cookie-consent-modal__desc">
              Choose which cookies you allow. Necessary cookies are always enabled.
            </p>

            <div className="cookie-consent-modal__prefs">
              <div className="cookie-consent-modal__pref">
                <div className="cookie-consent-modal__preftext">
                  <div className="cookie-consent-modal__preftitle">Necessary</div>
                  <div className="cookie-consent-modal__prefhint">
                    Required for the website to function.
                  </div>
                </div>
                <div className="cookie-consent-modal__switch cookie-consent-modal__switch--locked">
                  On
                </div>
              </div>

              <div className="cookie-consent-modal__pref">
                <div className="cookie-consent-modal__preftext">
                  <div className="cookie-consent-modal__preftitle">Analytics</div>
                  <div className="cookie-consent-modal__prefhint">
                    Helps us understand traffic and improve the website.
                  </div>
                </div>
                <button
                  type="button"
                  className={`cookie-consent-modal__toggle ${
                    analyticsEnabled ? "is-on" : ""
                  }`}
                  aria-pressed={analyticsEnabled}
                  onClick={() => setAnalyticsEnabled((v) => !v)}
                >
                  <span className="cookie-consent-modal__toggleknob" aria-hidden="true" />
                  <span className="cookie-consent-modal__togglestate">
                    {analyticsEnabled ? "On" : "Off"}
                  </span>
                </button>
              </div>
            </div>

            <div className="cookie-consent-modal__actions">
              <button
                type="button"
                className="cookie-consent__btn cookie-consent__btn--secondary"
                onClick={() => {
                  save("rejected", false);
                  setSettingsOpen(false);
                }}
              >
                Reject all
              </button>
              <button
                type="button"
                className="cookie-consent__btn cookie-consent__btn--secondary"
                onClick={() => {
                  save(analyticsEnabled ? "accepted" : "rejected", analyticsEnabled);
                  setSettingsOpen(false);
                }}
              >
                Save preferences
              </button>
              <button
                type="button"
                className="cookie-consent__btn cookie-consent__btn--primary"
                onClick={() => {
                  save("accepted", true);
                  setSettingsOpen(false);
                }}
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
