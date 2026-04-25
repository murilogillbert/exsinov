const WA_LINK =
  'https://wa.me/5565996042431?text=Ol%C3%A1!%20Quero%20reservar%20a%20plataforma%20Exsinov%20para%20o%20meu%20consult%C3%B3rio.'

export default function Hero() {
  return (
    <section id="hero" style={{
      position:   'relative',
      minHeight:  '100vh',
      display:    'flex',
      alignItems: 'center',
      overflow:   'hidden',
      background: 'var(--beige)',
      paddingTop: 100,
    }}>
      {/* ── soft warm background pattern ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 60% 50% at 80% 0%, rgba(232,93,31,0.08), transparent 60%),
          radial-gradient(ellipse 70% 60% at 0% 100%, rgba(20,39,63,0.06), transparent 65%)
        `,
        pointerEvents: 'none',
      }} />

      {/* ── dotted grid (warm, subtle) ── */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(20,39,63,0.08) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        opacity: 0.5,
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, #000, transparent 75%)',
        pointerEvents: 'none',
      }} />

      {/* ── content ── */}
      <div className="container" style={{
        position: 'relative', zIndex: 2,
        display: 'grid',
        gridTemplateColumns: '1.15fr 0.85fr',
        gap: 64,
        alignItems: 'center',
        paddingTop: 32, paddingBottom: 80,
      }} className-data="hero-grid">
        <div className="hero-grid-left">
          {/* product badge — AIO */}
          <div style={{
            display:       'inline-flex',
            alignItems:    'center',
            gap:           12,
            padding:       '8px 14px',
            background:    'var(--cream)',
            border:        '1px solid var(--orange-line)',
            borderRadius:  100,
            boxShadow:     'var(--shadow-sm)',
            marginBottom:  20,
            animation:     'fadeDown 0.7s ease both',
          }}>
            <span style={{
              fontFamily:    'var(--font-display)',
              fontSize:      18,
              letterSpacing: '0.06em',
              color:         'var(--orange)',
              lineHeight:    1,
            }}>AIO</span>
            <span style={{
              width: 1, height: 14, background: 'var(--beige-edge)',
            }} />
            <span style={{
              fontFamily:    'var(--font-heading)',
              fontWeight:    600,
              fontSize:      11.5,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color:         'var(--navy-mid)',
            }}>All In One</span>
            <span style={{
              fontFamily:    'var(--font-heading)',
              fontWeight:    700,
              fontSize:      10,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color:         'var(--navy-mute)',
            }}>by Exsinov</span>
          </div>

          {/* eyebrow */}
          <div className="section-eyebrow" style={{ animation: 'fadeDown 0.9s ease both' }}>
            Software para Consultórios
          </div>

          {/* headline */}
          <h1 style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(46px, 7.5vw, 92px)',
            lineHeight:    0.95,
            letterSpacing: '0.005em',
            color:         'var(--navy)',
            animation:     'fadeUp 1s 0.1s ease both',
            animationFillMode: 'both',
          }}>
            GERENCIE SEU<br />
            <span style={{ position: 'relative', display: 'inline-block' }}>
              <span style={{ color: 'var(--orange)' }}>CONSULTÓRIO</span>
              <span style={{
                position: 'absolute',
                bottom: 4, left: 0, right: 0,
                height: 6,
                background: 'var(--orange)',
                opacity: 0.18,
                borderRadius: 3,
              }} />
            </span><br />
            SEM BUROCRACIA
          </h1>

          {/* tagline */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            fontSize:   'clamp(15px, 1.6vw, 18px)',
            color:      'var(--navy-mid)',
            maxWidth:   540,
            marginTop:  28,
            lineHeight: 1.7,
            animation:  'fadeUp 1s 0.25s ease both',
            animationFillMode: 'both',
          }}>
            <strong style={{ color: 'var(--navy)' }}>AIO</strong> é o software{' '}
            <strong style={{ color: 'var(--navy)' }}>all-in-one</strong> da Exsinov para
            consultórios e clínicas: vitrine digital, agenda online, omnichannel integrado
            e análise contábil — em uma única plataforma, simples e profissional.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap',
            animation: 'fadeUp 1s 0.4s ease both',
            animationFillMode: 'both',
          }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WhatsAppIcon />
              Reservar meu Consultório
            </a>
            <a href="#features" className="btn-ghost">
              Ver Recursos
            </a>
          </div>

          {/* badges */}
          <div style={{
            display: 'flex', gap: 8, marginTop: 32, flexWrap: 'wrap',
            animation: 'fadeUp 1s 0.55s ease both',
            animationFillMode: 'both',
          }}>
            {[
              '10% até 01/05 · 15% após',
              'Sem mensalidade fixa',
              'Setup em 240 min',
            ].map(b => (
              <span key={b} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '7px 14px',
                background: 'var(--cream)',
                border: '1px solid var(--beige-edge)',
                borderRadius: 100,
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--navy-mid)',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <span style={{ color: 'var(--orange)', fontSize: 14, fontWeight: 700 }}>✓</span>
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT: visual card */}
        <div style={{
          animation: 'fadeUp 1s 0.3s ease both',
          animationFillMode: 'both',
        }} className="hero-grid-right">
          <HeroCard />
        </div>
      </div>

      <style>{`
        .hero-grid-left, .hero-grid-right {}
        @media (max-width: 900px) {
          section#hero > .container { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-grid-right { display: none; }
        }
      `}</style>
    </section>
  )
}

/* ── Visual card on the right (consultório-themed mockup) ── */
function HeroCard() {
  return (
    <div style={{
      position: 'relative',
      background: 'var(--cream)',
      borderRadius: 'var(--radius-lg)',
      padding: 28,
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--beige-edge)',
    }}>
      {/* AIO product chip in corner */}
      <div style={{
        position: 'absolute', top: -14, right: 28,
        background: 'var(--orange)',
        color: 'var(--cream)',
        fontFamily: 'var(--font-display)',
        fontSize: 14, letterSpacing: '0.08em',
        padding: '7px 16px',
        borderRadius: 100,
        boxShadow: '0 6px 16px rgba(232,93,31,0.35)',
        display: 'inline-flex', alignItems: 'center', gap: 8,
      }}>
        AIO
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 9.5, fontWeight: 700,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          opacity: 0.85,
        }}>Live</span>
      </div>

      {/* day header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        paddingBottom: 18, borderBottom: '1px solid var(--beige-edge)',
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 32,
            color: 'var(--navy)',
            lineHeight: 1,
          }}>SEX, 01 MAI</div>
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 600, fontSize: 11,
            letterSpacing: '0.2em',
            color: 'var(--navy-mute)',
            textTransform: 'uppercase', marginTop: 6,
          }}>Agenda do consultório</div>
        </div>
        <div style={{
          background: 'var(--orange-soft)',
          color: 'var(--orange)',
          fontFamily: 'var(--font-heading)', fontWeight: 700,
          fontSize: 12, letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '5px 11px', borderRadius: 6,
        }}>8 consultas</div>
      </div>

      {/* appointments list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 18 }}>
        {[
          { time: '09:00', name: 'Maria Silva',     type: 'Consulta',  active: true  },
          { time: '10:30', name: 'João Pereira',    type: 'Retorno',   active: false },
          { time: '13:00', name: 'Ana Costa',       type: 'Avaliação', active: false },
          { time: '15:30', name: 'Carlos Lima',     type: 'Consulta',  active: false },
        ].map((a, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '12px 14px',
            background: a.active ? 'var(--orange-soft)' : 'var(--beige-soft)',
            border: a.active ? '1px solid var(--orange-line)' : '1px solid transparent',
            borderRadius: 'var(--radius-sm)',
            transition: 'all 0.2s ease',
          }}>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700, fontSize: 14,
              letterSpacing: '0.05em',
              color: a.active ? 'var(--orange)' : 'var(--navy-soft)',
              minWidth: 50,
            }}>{a.time}</div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: 'var(--font-body)', fontWeight: 600,
                fontSize: 13.5, color: 'var(--navy)',
              }}>{a.name}</div>
              <div style={{
                fontFamily: 'var(--font-body)', fontWeight: 400,
                fontSize: 11.5, color: 'var(--navy-mute)',
              }}>{a.type}</div>
            </div>
            {a.active && (
              <span style={{
                background: 'var(--orange)', color: 'var(--cream)',
                fontFamily: 'var(--font-heading)', fontWeight: 700,
                fontSize: 9, letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '3px 8px', borderRadius: 4,
              }}>Em curso</span>
            )}
          </div>
        ))}
      </div>

      {/* footer stat */}
      <div style={{
        marginTop: 18,
        padding: '14px 16px',
        background: 'var(--navy)', borderRadius: 'var(--radius-sm)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-heading)', fontWeight: 600,
            fontSize: 10.5, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)',
          }}>Faturamento de hoje</div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 26, color: 'var(--cream)', lineHeight: 1, marginTop: 4,
          }}>R$ 2.840,00</div>
        </div>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'var(--orange)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--cream)', fontWeight: 700, fontSize: 18,
        }}>↑</div>
      </div>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
