import { useEffect, useRef } from 'react'

const CORNERS: { style: React.CSSProperties }[] = [
  { style: { top: 0,    left: 0,    borderWidth: '2px 0 0 2px' } },
  { style: { top: 0,    right: 0,   borderWidth: '2px 2px 0 0' } },
  { style: { bottom: 0, left: 0,    borderWidth: '0 0 2px 2px' } },
  { style: { bottom: 0, right: 0,   borderWidth: '0 2px 2px 0' } },
]

export default function Hero() {
  const scanRef = useRef<HTMLDivElement>(null)

  // re-trigger scanline animation on loop
  useEffect(() => {
    const el = scanRef.current
    if (!el) return
    const reset = () => {
      el.style.animation = 'none'
      void el.offsetHeight
      el.style.animation = 'scan 5s linear infinite'
    }
    el.addEventListener('animationiteration', reset)
    return () => el.removeEventListener('animationiteration', reset)
  }, [])

  return (
    <section id="hero" style={{
      position:   'relative',
      minHeight:  '100vh',
      display:    'flex',
      alignItems: 'center',
      overflow:   'hidden',
      background: 'var(--navy)',
    }}>
      {/* ── animated grid ── */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,107,26,0.055) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,107,26,0.055) 1px, transparent 1px)
        `,
        backgroundSize: '54px 54px',
        animation: 'gridShift 22s linear infinite',
      }} />

      {/* ── radial vignette ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 70% 60% at 50% 110%, rgba(255,107,26,0.18) 0%, transparent 65%),
          radial-gradient(ellipse 90% 70% at 50% -10%, rgba(11,25,41,0.95) 0%, transparent 60%)
        `,
        pointerEvents: 'none',
      }} />

      {/* ── glow orbs ── */}
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-80px',
        width: 420, height: 420, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,26,0.22) 0%, transparent 65%)',
        filter: 'blur(60px)',
        animation: 'orbFloat 9s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '10%', right: '-100px',
        width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(17,34,64,0.9) 0%, transparent 65%)',
        filter: 'blur(60px)',
        animation: 'orbFloat 12s 2s ease-in-out infinite',
        pointerEvents: 'none',
      }} />

      {/* ── diagonal slash ── */}
      {[{ right: '12%', opacity: 0.14, width: 3 }, { right: '13.6%', opacity: 0.06, width: 1.5 }].map((s, i) => (
        <div key={i} style={{
          position: 'absolute', top: -120, bottom: -120,
          right: s.right, width: s.width,
          background: 'linear-gradient(to bottom, transparent, var(--orange) 30%, var(--orange) 70%, transparent)',
          transform: 'rotate(12deg)',
          opacity: s.opacity,
          pointerEvents: 'none',
        }} />
      ))}

      {/* ── scanline ── */}
      <div ref={scanRef} style={{
        position: 'absolute', left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, transparent, var(--orange), transparent)',
        animation: 'scan 5s linear infinite',
        opacity: 0.45,
        pointerEvents: 'none',
      }} />

      {/* ── corner marks ── */}
      {CORNERS.map((c, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: 32, height: 32,
          borderColor: 'var(--orange)',
          borderStyle: 'solid',
          opacity: 0.4,
          margin: 32,
          ...c.style,
        }} />
      ))}

      {/* ── content ── */}
      <div className="container" style={{
        position: 'relative', zIndex: 2,
        paddingTop: 120, paddingBottom: 100,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        {/* eyebrow */}
        <div className="section-eyebrow" style={{ animation: 'fadeDown 0.9s ease both' }}>
          Software de Gestão
        </div>

        {/* headline */}
        <h1 style={{
          fontFamily:  'var(--font-display)',
          fontSize:    'clamp(52px, 9vw, 110px)',
          lineHeight:  0.92,
          letterSpacing: '0.01em',
          textAlign:   'center',
          color:       'var(--beige)',
          maxWidth:    900,
          animation:   'fadeUp 1s 0.15s ease both',
          animationFillMode: 'both',
        }}>
          GERENCIE SEU<br />
          NEGÓCIO SEM{' '}
          <span style={{
            color: 'var(--orange)',
            position: 'relative',
            animation: 'glowPulse 3s ease-in-out infinite',
          }}>
            BUROCRACIA
            <span style={{
              position: 'absolute',
              bottom: 6, left: 0, right: 0,
              height: 6,
              background: 'var(--orange)',
              opacity: 0.22,
              borderRadius: 2,
            }} />
          </span>
        </h1>

        {/* tagline */}
        <p style={{
          fontFamily:  'var(--font-body)',
          fontWeight:  300,
          fontSize:    'clamp(15px, 2vw, 19px)',
          color:       'var(--gray)',
          textAlign:   'center',
          maxWidth:    620,
          marginTop:   28,
          lineHeight:  1.75,
          animation:   'fadeUp 1s 0.3s ease both',
          animationFillMode: 'both',
        }}>
          Vitrine digital, agenda online,{' '}
          <strong style={{ color: 'var(--beige)', fontWeight: 500 }}>omnichannel integrado</strong>{' '}
          (WhatsApp, Instagram, e-mail) e análise contábil e de desempenho.{' '}
          <strong style={{ color: 'var(--beige)', fontWeight: 500 }}>
            Tudo em uma única plataforma.
          </strong>
        </p>

        {/* CTA buttons */}
        <div style={{
          display:   'flex',
          gap:       16,
          marginTop: 44,
          flexWrap:  'wrap',
          justifyContent: 'center',
          animation: 'fadeUp 1s 0.45s ease both',
          animationFillMode: 'both',
        }}>
          <a href="#cta" className="btn-primary" style={{ fontSize: 15 }}>
            Começar Grátis — 7 Dias
            <ArrowIcon />
          </a>
          <a href="#features" className="btn-ghost" style={{ fontSize: 15 }}>
            Ver Recursos
          </a>
        </div>

        {/* trust badges */}
        <div style={{
          display:   'flex',
          gap:       8,
          marginTop: 32,
          flexWrap:  'wrap',
          justifyContent: 'center',
          animation: 'fadeUp 1s 0.6s ease both',
          animationFillMode: 'both',
        }}>
          {['Sem cartão de crédito', 'Setup em 5 minutos', '99% uptime'].map(badge => (
            <span key={badge} style={{
              display:    'inline-flex',
              alignItems: 'center',
              gap:        6,
              padding:    '6px 14px',
              border:     'var(--border-card)',
              borderRadius: 100,
              fontFamily:   'var(--font-heading)',
              fontWeight:   600,
              fontSize:     12,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color:    'var(--gray)',
              background: 'rgba(255,107,26,0.06)',
            }}>
              <span style={{ color: 'var(--orange)', fontSize: 14 }}>✓</span>
              {badge}
            </span>
          ))}
        </div>

        {/* scroll hint */}
        <div style={{
          marginTop:  64,
          display:    'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap:        8,
          animation:  'fadeUp 1s 0.8s ease both',
          animationFillMode: 'both',
        }}>
          <span style={{
            fontFamily:    'var(--font-heading)',
            fontSize:      11,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color:         'var(--gray)',
            opacity:       0.6,
          }}>Scroll</span>
          <div style={{
            width: 1, height: 48,
            background: 'linear-gradient(to bottom, var(--orange), transparent)',
            opacity: 0.5,
          }} />
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
