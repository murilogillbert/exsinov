import { useState, useEffect } from 'react'

const links = [
  { label: 'Recursos',      href: '#features' },
  { label: 'Plataforma',    href: '#product'  },
  { label: 'Como Funciona', href: '#how'      },
  { label: 'Roadmap',       href: '#roadmap'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav style={{
        position:   'fixed',
        top:        0, left: 0, right: 0,
        zIndex:     100,
        transition: 'background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        background:    scrolled ? 'rgba(245,236,220,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom:   scrolled ? '1px solid var(--beige-edge)' : '1px solid transparent',
        boxShadow:      scrolled ? 'var(--shadow-sm)' : 'none',
      }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 76,
        }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <LogoIcon />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, gap: 3 }}>
              <span style={{
                fontFamily:    'var(--font-display)',
                fontWeight:    400,
                fontSize:      24,
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
                fontSize:      9.5,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color:         'var(--navy-mute)',
              }}>
                by <span style={{ color: 'var(--navy)', fontWeight: 700 }}>Exsinov</span>
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul style={{
            display: 'flex', alignItems: 'center', gap: 36, listStyle: 'none',
          }} className="desktop-nav">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} style={{
                  fontFamily:    'var(--font-heading)',
                  fontWeight:    600,
                  fontSize:      14,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color:         'var(--navy-mid)',
                  transition:    'color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--orange)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--navy-mid)')}
                >{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#cta" className="btn-primary" style={{ padding: '11px 24px', fontSize: 13 }}>
                Reservar
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Abrir menu"
            style={{
              display: 'none', flexDirection: 'column', gap: 5,
              padding: 8, background: 'transparent', cursor: 'pointer',
            }}
            className="hamburger"
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block', width: 24, height: 2,
                background: 'var(--navy)', borderRadius: 2,
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: menuOpen
                  ? i === 0 ? 'translateY(7px) rotate(45deg)'
                  : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                  : 'scaleX(0)' : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* Mobile drawer */}
        <div style={{
          position: 'fixed', inset: 0, top: 76,
          background: 'rgba(245,236,220,0.98)',
          backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 28,
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0)' : 'translateY(-12px)',
          pointerEvents: menuOpen ? 'all' : 'none',
          zIndex: 99,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={close} style={{
              fontFamily:    'var(--font-display)',
              fontSize:      36,
              letterSpacing: '0.05em',
              color:         'var(--navy)',
            }}>{l.label}</a>
          ))}
          <a href="#cta" onClick={close} className="btn-primary" style={{ marginTop: 12 }}>
            Reservar Agora
          </a>
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: flex !important; }
        }
      `}</style>
    </>
  )
}

function LogoIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
      <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z"
        stroke="var(--orange)" strokeWidth="2"
        fill="rgba(232,93,31,0.1)" />
      <path d="M13 20H27M20 13L27 20L20 27"
        stroke="var(--orange)" strokeWidth="2.2"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
