import { useState, useEffect } from 'react'

const links = [
  { label: 'Recursos',       href: '#features'  },
  { label: 'Plataforma',     href: '#product'   },
  { label: 'Como Funciona',  href: '#how'       },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav style={{
        position:   'fixed',
        top:        0,
        left:       0,
        right:      0,
        zIndex:     100,
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
        background:  scrolled ? 'rgba(11,25,41,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom:   scrolled ? '1px solid rgba(255,107,26,0.15)' : '1px solid transparent',
      }}>
        <div className="container" style={{
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          height:         72,
        }}>
          {/* Logo */}
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

          {/* Desktop nav */}
          <ul style={{
            display:    'flex',
            alignItems: 'center',
            gap:        36,
            listStyle:  'none',
          }} className="desktop-nav">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} style={{
                  fontFamily:    'var(--font-heading)',
                  fontWeight:    600,
                  fontSize:      15,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color:         'var(--gray-light)',
                  transition:    'color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--orange)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--gray-light)')}
                >{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#cta" className="btn-primary" style={{ padding: '11px 26px', fontSize: 14 }}>
                Começar Grátis
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Abrir menu"
            style={{
              display:        'none',
              flexDirection:  'column',
              gap:            5,
              padding:        8,
              background:     'transparent',
              border:         'none',
              cursor:         'pointer',
            }}
            className="hamburger"
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display:    'block',
                width:      24,
                height:     2,
                background: 'var(--beige)',
                borderRadius: 2,
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform:  menuOpen
                  ? i === 0 ? 'translateY(7px) rotate(45deg)'
                  : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                  : 'scaleX(0)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* Mobile nav drawer */}
        <div style={{
          position:   'fixed',
          inset:      0,
          top:        72,
          background: 'rgba(11,25,41,0.98)',
          backdropFilter: 'blur(20px)',
          display:    'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 32,
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          opacity:    menuOpen ? 1 : 0,
          transform:  menuOpen ? 'translateY(0)' : 'translateY(-16px)',
          pointerEvents: menuOpen ? 'all' : 'none',
          zIndex: 99,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={close} style={{
              fontFamily:    'var(--font-display)',
              fontSize:      36,
              letterSpacing: '0.08em',
              color:         'var(--beige)',
              transition:    'color 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--orange)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--beige)')}
            >{l.label}</a>
          ))}
          <a href="#cta" onClick={close} className="btn-primary" style={{ marginTop: 12, padding: '16px 48px', fontSize: 16 }}>
            Começar Grátis — 7 Dias
          </a>
        </div>
      </nav>

      {/* responsive CSS injection */}
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
    <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
      <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z"
        stroke="var(--orange)" strokeWidth="2"
        fill="rgba(255,107,26,0.12)" />
      <path d="M13 20H27M20 13L27 20L20 27"
        stroke="var(--orange)" strokeWidth="2.2"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
