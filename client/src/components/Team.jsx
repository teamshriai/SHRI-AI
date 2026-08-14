const TEAM_MEMBERS = [
  {
    initials: 'SP',
    name: 'Senapathi Palanisamy',
    role: 'CEO & Founder',
    bio: 'Founder of ViSolve, Senas.net Pvt. Ltd · Ex-Chairman of OpenEMR',
    accent: '#7B6FCD',
    accentSoft: 'rgba(123, 111, 205, 0.12)',
  },
  {
    initials: 'MM',
    name: 'Manoj Mittal',
    role: 'Group Vice President, FP&A — Gartner',
    bio: 'Finance leader specializing in FP&A, M&A, and corporate growth strategy.',
    accent: '#D4891E',
    accentSoft: 'rgba(212, 137, 30, 0.12)',
  },
  {
    initials: 'RR',
    name: 'Dr. Rajesh Rangaswamy',
    role: 'CEO & Founder, Indo States Health',
    bio: 'MD, DABR, CAQ(NR), CAST(EVN)',
    accent: '#3A82C4',
    accentSoft: 'rgba(58, 130, 196, 0.12)',
  },
];

const Team = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@300;400;500;600;700&family=Google+Sans+Display:wght@300;400;500;600;700&family=Google+Sans+Text:wght@300;400;500&display=swap');

        .team-section {
          background: #ffffff;
          padding: clamp(4rem, 9vw, 7rem) clamp(1.25rem, 4vw, 2rem);
          position: relative;
          overflow: hidden;
        }

        .team-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .team-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto clamp(2.5rem, 6vw, 4rem);
        }

        .team-label {
          font-family: 'Google Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          font-size: clamp(11px, 1vw, 12px);
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #9a9aab;
          margin: 0 0 clamp(0.75rem, 1.5vw, 1rem);
        }

        .team-heading {
          font-family: 'Google Sans Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          font-weight: 300;
          font-size: clamp(1.9rem, 4.2vw, 2.75rem);
          letter-spacing: -0.02em;
          color: #1a1a1a;
          margin: 0 0 clamp(0.75rem, 1.8vw, 1.1rem);
          line-height: 1.15;
        }

        .team-subtext {
          font-family: 'Google Sans Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          font-weight: 300;
          font-size: clamp(0.95rem, 1.3vw, 1.05rem);
          color: #6b6b7a;
          line-height: 1.6;
          margin: 0;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: clamp(1.5rem, 3vw, 2.25rem);
        }

        .team-card {
          background: #ffffff;
          border: 1px solid rgba(20, 20, 30, 0.08);
          border-radius: 20px;
          padding: clamp(1.75rem, 3.2vw, 2.5rem) clamp(1.5rem, 2.6vw, 2rem);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(20, 20, 30, 0.08);
          border-color: rgba(20, 20, 30, 0.03);
        }

        .team-avatar {
          width: clamp(72px, 8vw, 88px);
          height: clamp(72px, 8vw, 88px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Google Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          font-weight: 600;
          font-size: clamp(1.1rem, 2vw, 1.35rem);
          color: #ffffff;
          margin-bottom: clamp(1.1rem, 2vw, 1.4rem);
          flex-shrink: 0;
          letter-spacing: 0.02em;
        }

        .team-name {
          font-family: 'Google Sans Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          font-weight: 500;
          font-size: clamp(1.1rem, 1.7vw, 1.3rem);
          color: #1a1a1a;
          margin: 0 0 0.4rem;
          letter-spacing: -0.01em;
        }

        .team-role {
          font-family: 'Google Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          font-weight: 500;
          font-size: clamp(0.82rem, 1vw, 0.9rem);
          letter-spacing: 0.02em;
          margin: 0 0 clamp(0.85rem, 1.5vw, 1.1rem);
          padding: 0.3rem 0.85rem;
          border-radius: 999px;
          display: inline-block;
        }

        .team-bio {
          font-family: 'Google Sans Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          font-weight: 300;
          font-size: clamp(0.9rem, 1.1vw, 0.96rem);
          color: #6b6b7a;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 640px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="team-section" id="team">
        <div className="team-inner">
          <div className="team-header">
            <p className="team-label">Our Team</p>
            <h2 className="team-heading">Leadership</h2>
            <p className="team-subtext">
              Guided by experienced leaders in healthcare, technology, and finance, committed to advancing equitable precision oncology worldwide.
            </p>
          </div>

          <div className="team-grid">
            {TEAM_MEMBERS.map((member) => (
              <div className="team-card" key={member.name}>
                <div
                  className="team-avatar"
                  style={{ background: `linear-gradient(135deg, ${member.accent} 0%, ${member.accent}cc 100%)` }}
                >
                  {member.initials}
                </div>
                <h3 className="team-name">{member.name}</h3>
                <span
                  className="team-role"
                  style={{ color: member.accent, background: member.accentSoft }}
                >
                  {member.role}
                </span>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
