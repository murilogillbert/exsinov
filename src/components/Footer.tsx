const NAV_LINKS = [
  { group: 'Plataforma', items: [
    { label: 'Vitrine Digital',   href: '#features' },
    { label: 'Agenda Online',     href: '#features' },
    { label: 'Omnichannel',       href: '#features' },
    { label: 'Análise Contábil',  href: '#features' },
  ]},
  { group: 'Empresa', items: [
    { label: 'Como Funciona',     href: '#how' },
    { label: 'Roadmap',           href: '#roadmap' },
    { label: 'Contato',           href: 'mailto:contato@exsinov.com.br' },
  ]},
  { group: 'Legal', items: [
    { label: 'Termos de Uso',     href: '#' },
    { label: 'Privacidade (LGPD)', href: '#' },
  ]},
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--beige-soft)',
      borderTop: '1px solid var(--beige-edge)',
      paddingTop: 64,
      paddingBottom: 36,
    }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 48, marginBottom: 48,
        }} className="footer-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <LogoIcon />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, gap: 3 }}>
                <span style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      26,
                  letterSpacing: '0.06em',
                  color:         'var(--navy)',
                }}>
                  AIO
                  <span style={{
                    marginLeft: 8,
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize:   10,
                    letterSpacing: '0.24em',
                    color:      'var(--orange)',
                    textTransform: 'uppercase',
                    verticalAlign: 'middle',
                  }}>All In One</span>
                </span>
                <span style={{
                  fontFamily:    'var(--font-heading)',
                  fontWeight:    600,
                  fontSize:      10,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color:         'var(--navy-mute)',
                }}>
                  by <span style={{ color: 'var(--navy)', fontWeight: 700 }}>Exsinov</span>
                </span>
              </div>
            </a>

            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 400,
              fontSize: 14, color: 'var(--navy-mid)',
              lineHeight: 1.7, maxWidth: 320,
            }}>
              <strong style={{ color: 'var(--navy)' }}>AIO</strong> é o software all-in-one
              da <strong style={{ color: 'var(--navy)' }}>Exsinov</strong> para
              consultórios e clínicas: vitrine digital, agenda online, omnichannel
              integrado e análise contábil — em uma única plataforma.
            </p>

            <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
              {[
                { label: 'Instagram', icon: <InstagramIcon />, href: '#' },
                { label: 'WhatsApp',  icon: <WhatsAppIcon />,  href: 'https://wa.me/5565996042431' },
                { label: 'LinkedIn',  icon: <LinkedInIcon />,  href: '#' },
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label} style={{
                  width: 38, height: 38,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background:   'var(--cream)',
                  border:       '1px solid var(--beige-edge)',
                  borderRadius: 8,
                  color:        'var(--navy-mid)',
                  transition:   'all 0.2s ease',
                  boxShadow:    'var(--shadow-sm)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.color = 'var(--orange)'
                  el.style.borderColor = 'var(--orange-line)'
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.color = 'var(--navy-mid)'
                  el.style.borderColor = 'var(--beige-edge)'
                  el.style.transform = 'translateY(0)'
                }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {NAV_LINKS.map(group => (
            <div key={group.group}>
              <span style={{
                fontFamily: 'var(--font-heading)', fontWeight: 700,
                fontSize: 12, letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'var(--orange)',
                display: 'block', marginBottom: 18,
              }}>{group.group}</span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
                {group.items.map(item => (
                  <li key={item.label}>
                    <a href={item.href} style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 400, fontSize: 14,
                      color: 'var(--navy-mid)',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--orange)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--navy-mid)')}
                    >{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: 'var(--beige-edge)', marginBottom: 28 }} />

        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 14,
        }}>
          <span style={{
            fontFamily: 'var(--font-body)', fontWeight: 400,
            fontSize: 13, color: 'var(--navy-mute)',
          }}>
            © {new Date().getFullYear()} Exsinov · AIO — All In One para consultórios.
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: 13,
              color: 'var(--navy-mute)',
            }}>Feito com</span>
            <span style={{ color: 'var(--orange)', fontSize: 14 }}>♥</span>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: 13,
              color: 'var(--navy-mute)',
            }}>para profissionais de saúde</span>
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
    <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
      <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z"
        stroke="var(--orange)" strokeWidth="2"
        fill="rgba(232,93,31,0.1)" />
      <path d="M13 20H27M20 13L27 20L20 27"
        stroke="var(--orange)" strokeWidth="2.2"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
