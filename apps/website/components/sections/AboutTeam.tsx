
interface TeamMember {
  accent: 'blue' | 'yellow' | 'green' | 'cyan';
  name: string;
  role: string;
  certifications: string[];
  bio: string;
  photo: string;
}

// photo: путь к реальной фотографии в public/images/team/ (пусто = аватар с инициалами).
// Стоковые лица с randomuser.me убраны: на странице «О нас» это подрывает доверие.
const teamMembers: TeamMember[] = [
  {
    accent: 'blue',
    name: 'Alex Petrov',
    role: 'Head of Infrastructure',
    certifications: ['CCNP Enterprise', 'Microsoft MCSE', 'CompTIA Network+'],
    bio: '12 years engineering enterprise networks across DIFC, DMCC, and Abu Dhabi. Led 30+ structured cabling projects and data center migrations in the UAE.',
    photo: '',
  },
  {
    accent: 'green',
    name: 'Maria Smirnova',
    role: 'Cybersecurity Lead',
    certifications: ['CISSP', 'CEH', 'Fortinet NSE 7'],
    bio: 'Specialist in Zero Trust architecture and SOC operations. Designed security frameworks for DFSA-regulated firms and UAE DHA compliance requirements.',
    photo: '',
  },
  {
    accent: 'cyan',
    name: 'Denis Kovalev',
    role: 'Cloud & M365 Architect',
    certifications: ['Azure Solutions Architect', 'MS-700', 'AZ-104'],
    bio: '8 years designing hybrid cloud infrastructure for UAE enterprises. Delivered 15+ Microsoft 365 tenant migrations with Entra ID, Intune, and Azure Virtual Desktop.',
    photo: '',
  },
  {
    accent: 'yellow',
    name: 'Aisha Al Mansoori',
    role: 'Client Success Manager',
    certifications: ['ITIL v4 Foundation', 'PMP', 'ServiceNow CSA'],
    bio: 'Manages enterprise AMC and managed IT accounts across Dubai and Abu Dhabi. Oversees SLA compliance and quarterly business reviews for 20+ active contracts.',
    photo: '',
  },
];

export default function AboutTeam() {
  return (
    <section className="about-team section">
      <div className="container">

        <div className="about-team__header">
          <h2 className="about-team__title">Our Team</h2>
          <p className="about-team__subtitle">
            Certified engineers who know the UAE market, not generalists reading from scripts.
          </p>
        </div>

        <div className="about-team__grid">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className={`about-team__card about-team__card--${member.accent}`}
            >
              <div className="about-team__photo-wrap">
                {member.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={member.photo} alt={`${member.name}, ${member.role}`} className="about-team__photo" loading="lazy" />
                ) : (
                  <span className="about-team__avatar" aria-hidden="true">
                    {member.name.split(' ').slice(0, 2).map((w) => w[0]).join('')}
                  </span>
                )}
              </div>

              <div className="about-team__body">
                <h3 className="about-team__name">{member.name}</h3>
                <p className="about-team__role">
                  {member.role}
                </p>
                <p className="about-team__bio">{member.bio}</p>
                <ul className="about-team__certs">
                  {member.certifications.map((cert) => (
                    <li key={cert} className="about-team__cert">{cert}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
