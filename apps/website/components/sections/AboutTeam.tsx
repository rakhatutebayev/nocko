import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  certifications: string[];
  bio: string;
  photo: string;
  borderColor: string;
}

// Фото получены через randomuser.me API с параметрами nat + gender:
// Alex, Maria, Denis → nat=rs (Serbian/Slavic appearance)
// Aisha → nat=ir (Iranian/Middle Eastern appearance)
const teamMembers: TeamMember[] = [
  {
    name: 'Alex Petrov',
    role: 'Head of Infrastructure',
    certifications: ['CCNP Enterprise', 'Microsoft MCSE', 'CompTIA Network+'],
    bio: '12 years engineering enterprise networks across DIFC, DMCC, and Abu Dhabi. Led 30+ structured cabling projects and data center migrations in the UAE.',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    borderColor: '#3474ff',
  },
  {
    name: 'Maria Smirnova',
    role: 'Cybersecurity Lead',
    certifications: ['CISSP', 'CEH', 'Fortinet NSE 7'],
    bio: 'Specialist in Zero Trust architecture and SOC operations. Designed security frameworks for DFSA-regulated firms and UAE DHA compliance requirements.',
    photo: 'https://randomuser.me/api/portraits/women/84.jpg',
    borderColor: '#583bec',
  },
  {
    name: 'Denis Kovalev',
    role: 'Cloud & M365 Architect',
    certifications: ['Azure Solutions Architect', 'MS-700', 'AZ-104'],
    bio: '8 years designing hybrid cloud infrastructure for UAE enterprises. Delivered 15+ Microsoft 365 tenant migrations with Entra ID, Intune, and Azure Virtual Desktop.',
    photo: 'https://randomuser.me/api/portraits/men/52.jpg',
    borderColor: '#3474ff',
  },
  {
    name: 'Aisha Al Mansoori',
    role: 'Client Success Manager',
    certifications: ['ITIL v4 Foundation', 'PMP', 'ServiceNow CSA'],
    bio: 'Manages enterprise AMC and managed IT accounts across Dubai and Abu Dhabi. Oversees SLA compliance and quarterly business reviews for 20+ active contracts.',
    photo: 'https://images.unsplash.com/photo-1622925492533-67508d80cc66?w=400&h=400&fit=crop&crop=face',
    borderColor: '#583bec',
  },
];

export default function AboutTeam() {
  return (
    <section className="about-team section">
      <div className="container">

        <div className="about-team__header">
          <h2 className="about-team__title">Our Team</h2>
          <p className="about-team__subtitle">
            Certified specialists with deep UAE market expertise — not generalists reading from scripts.
          </p>
        </div>

        <div className="about-team__grid">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="about-team__card"
              style={{ borderTop: `3px solid ${member.borderColor}` }}
            >
              <div className="about-team__photo-wrap">
                <Image
                  src={member.photo}
                  alt={`${member.name} — ${member.role}`}
                  width={120}
                  height={120}
                  className="about-team__photo"
                  unoptimized
                />
              </div>

              <div className="about-team__body">
                <h3 className="about-team__name">{member.name}</h3>
                <p className="about-team__role" style={{ color: member.borderColor }}>
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
