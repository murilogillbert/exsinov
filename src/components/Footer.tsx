const NAV_LINKS = [
  { group: 'Plataforma', items: [
    { label: 'Vitrine Digital',    href: '#features' },
    { label: 'Agenda Online',      href: '#features' },
    { label: 'Omnichannel',        href: '#features' },
    { label: 'Análise Contábil',   href: '#features' },
  ]},
  { group: 'Empresa', items: [
    { label: 'Sobre nós',          href: '#' },
    { label: 'Como Funciona',      href: '#how' },
    { label: 'Contato',            href: 'mailto:contato@exsinov.com.br' },
  ]},
  { group: 'Legal', items: [
    { label: 'Termos de Uso',      href: '#' },
    { label: 'Privacidade',        href: '#' },
  ]},
]

export default function Footer() {
  return (
    <footer style={{
      background:   'var(--navy)',
      borderTop:    '1px solid rgba(255,107,26,0.12)',
      paddingTop:   72,
      paddingBottom: 40,
    }}>
      <div className="container">
        {/* top row */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap:                 48,
          marginBottom:        60,
        }} className="footer-grid">
          {/* brand column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* logo */}
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <LogoIcon />
              <span style={{
                fontFamily:  'var(--font-heading)',
                fontWeight:  700,
                fontSize:    22,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--beige)',
              }}>
                Ex<span style={{ color: 'var(--orange)' }}>sinov</span>
              </span>
            </a>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize:   14,
              color:      'var(--gray)',
              lineHeight: 1.75,
              maxWidth:   280,
            }}>
              Software de gestão personalizado com vitrine digital, agenda online, omnichannel integrado e análise contábil. Tudo em uma única plataforma.
            </p>

            {/* social icons */}
            <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
              {[
                { label: 'Instagram', icon: <InstagramIcon />, href: '#' },
                { label: 'WhatsApp',  icon: <WhatsAppIcon />,  href: '#' },
                { label: 'LinkedIn',  icon: <LinkedInIcon />,  href: '#' },
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label} style={{
                  width: 40, height: 40,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background:   'rgba(255,107,26,0.08)',
                  border:       '1px solid rgba(255,107,26,0.18)',
                  borderRadius: 8,
                  color:        'var(--gray)',
                  transition:   'color 0.2s ease, border-color 0.2s ease, background 0.2s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.color = 'var(--orange)'
                  el.style.borderColor = 'rgba(255,107,26,0.5)'
                  el.style.background = 'rgba(255,107,26,0.15)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.color = 'var(--gray)'
                  el.style.borderColor = 'rgba(255,107,26,0.18)'
                  el.style.background = 'rgba(255,107,26,0.08)'
                }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* nav columns */}
          {NAV_LINKS.map(group => (
            <div key={group.group}>
              <span style={{
                fontFamily:    'var(--font-heading)',
                fontWeight:    700,
                fontSize:      12,
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color:         'var(--orange)',
                display:       'block',
                marginBottom:  20,
              }}>{group.group}</span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {group.items.map(item => (
                  <li key={item.label}>
                    <a href={item.href} style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 300,
                      fontSize:   14,
                      color:      'var(--gray)',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--beige)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--gray)')}
                    >{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* divider */}
        <div style={{
          height:     1,
          background: 'rgba(255,107,26,0.12)',
          marginBottom: 32,
        }} />

        {/* bottom row */}
        <div style={{
          display:        'flex',
          justifyContent: 'space-between',
          alignItems:     'center',
          flexWrap:       'wrap',
          gap:            16,
        }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize:   13,
            color:      'var(--gray)',
            opacity:    0.7,
          }}>
            © {new Date().getFullYear()} Exsinov. Todos os direitos reservados.
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize:   13,
              color:      'var(--gray)',
              opacity:    0.7,
            }}>Feito com</span>
            <span style={{ color: 'var(--orange)', fontSize: 14 }}>♥</span>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize:   13,
              color:      'var(--gray)',
              opacity:    0.7,
            }}>para pequenos negócios</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}

function LogoIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
      <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z"
        stroke="var(--orange)" strokeWidth="2"
        fill="rgba(255,107,26,0.12)" />
      <path d="M13 20H27M20 13L27 20L20 27"
        stroke="var(--orange)" strokeWidth="2.2"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
