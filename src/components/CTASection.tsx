const CORNERS = [
  { top: 0,    left:  0,    borderWidth: '2px 0 0 2px' },
  { top: 0,    right: 0,    borderWidth: '2px 2px 0 0' },
  { bottom: 0, left:  0,    borderWidth: '0 0 2px 2px' },
  { bottom: 0, right: 0,    borderWidth: '0 2px 2px 0'  },
] as const

export default function CTASection() {
  return (
    <section id="cta" style={{
      padding:    'clamp(80px, 10vw, 120px) 0',
      background: 'var(--navy-mid)',
      borderTop:  'var(--border-subtle)',
      position:   'relative',
      overflow:   'hidden',
    }}>
      {/* background grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,107,26,0.055) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,107,26,0.055) 1px, transparent 1px)
        `,
        backgroundSize: '54px 54px',
        animation: 'gridShift 22s linear infinite',
        pointerEvents: 'none',
      }} />

      {/* radial glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 60% at 50% 110%, rgba(255,107,26,0.22), transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* scanline */}
      <div style={{
        position: 'absolute', left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, transparent, var(--orange), transparent)',
        animation: 'scan 6s linear infinite',
        opacity: 0.35,
        pointerEvents: 'none',
      }} />

      {/* corner marks */}
      {CORNERS.map((c, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: 28, height: 28,
          borderColor: 'var(--orange)',
          borderStyle: 'solid',
          opacity: 0.4,
          margin: 32,
          ...c,
        }} />
      ))}

      <div className="container" style={{
        position:   'relative', zIndex: 1,
        textAlign:  'center',
        display:    'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap:        28,
      }}>
        {/* eyebrow */}
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
          Começar Agora
        </div>

        {/* headline */}
        <h2 style={{
          fontFamily:  'var(--font-display)',
          fontSize:    'clamp(44px, 7vw, 88px)',
          lineHeight:  0.92,
          letterSpacing: '0.01em',
          color:       'var(--beige)',
          animation:   'glowPulse 4s ease-in-out infinite',
        }}>
          PREPARE-SE PARA<br />
          <span style={{ color: 'var(--orange)' }}>UMA NOVA ERA</span>
        </h2>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 300,
          fontSize:   'clamp(15px, 2vw, 19px)',
          color:      'var(--gray)',
          maxWidth:   520,
          lineHeight: 1.75,
        }}>
          Experimente gratuitamente por <strong style={{ color: 'var(--beige)', fontWeight: 500 }}>7 dias</strong>.
          Sem cartão de crédito, sem burocracia.
          Suporte humano das 8h às 20h com{' '}
          <strong style={{ color: 'var(--beige)', fontWeight: 500 }}>99% de estabilidade</strong>.
        </p>

        {/* countdown display (decorative) */}
        <div style={{
          display:    'flex',
          gap:        0,
          marginTop:  12,
          border:     'var(--border-subtle)',
          borderRadius: 10,
          overflow:   'hidden',
          background: 'rgba(255,107,26,0.05)',
          animation:  'countPulse 3s ease-in-out infinite',
        }}>
          {[
            { val: '07', label: 'dias'    },
            { val: '00', label: 'horas'   },
            { val: '00', label: 'minutos' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                padding:      '20px 32px',
                textAlign:    'center',
                borderRight:  i < 2 ? '1px solid rgba(255,107,26,0.15)' : 'none',
              }}>
                <div style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      'clamp(40px, 6vw, 64px)',
                  lineHeight:    1,
                  color:         'var(--orange)',
                  letterSpacing: '0.04em',
                  textShadow:    '0 0 30px rgba(255,107,26,0.5)',
                }}>{item.val}</div>
                <div style={{
                  fontFamily:    'var(--font-heading)',
                  fontWeight:    600,
                  fontSize:      11,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color:         'var(--gray)',
                  marginTop:     4,
                }}>{item.label}</div>
              </div>
              {i < 2 && (
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize:   40,
                  color:      'rgba(255,107,26,0.2)',
                  padding:    '0 4px',
                  marginBottom: 16,
                }}>:</div>
              )}
            </div>
          ))}
        </div>

        {/* CTA button */}
        <a href="mailto:contato@exsinov.com.br" className="btn-primary" style={{
          fontSize:  16,
          padding:   '20px 56px',
          marginTop: 8,
        }}>
          Comece Hoje Grátis — 7 Dias
          <ArrowIcon />
        </a>

        {/* bottom strips */}
        <div style={{
          display:    'flex',
          gap:        32,
          marginTop:  8,
          flexWrap:   'wrap',
          justifyContent: 'center',
        }}>
          {['Sem cartão de crédito', 'Setup em 5 minutos', 'Cancelamento a qualquer hora'].map(t => (
            <span key={t} style={{
              fontFamily:    'var(--font-heading)',
              fontWeight:    600,
              fontSize:      13,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color:         'var(--gray)',
              display:       'flex',
              alignItems:    'center',
              gap:           8,
            }}>
              <span style={{ color: 'var(--orange)', fontSize: 16 }}>✓</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  )
}
