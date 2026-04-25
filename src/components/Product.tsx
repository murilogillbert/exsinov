const WA_LINK = 'https://wa.me/5565996042431?text=Ol%C3%A1!%20Quero%20reservar%20a%20plataforma%20Exsinov%20para%20o%20meu%20consult%C3%B3rio.'

const BULLETS = [
  'Agenda online com lembretes automáticos via WhatsApp',
  'Prontuário eletrônico na nuvem — seguro e acessível',
  'Financeiro simplificado: lucro real do consultório em segundos',
  'Comunicação centralizada com pacientes em todos os canais',
  'Vitrine digital profissional para atrair novos pacientes',
  'Pagamentos online via Mercado Pago já integrados',
]

export default function Product() {
  return (
    <section id="product" style={{
      padding:    'clamp(80px, 10vw, 130px) 0',
      background: 'var(--beige-soft)',
      borderTop:  '1px solid var(--beige-edge)',
      borderBottom:'1px solid var(--beige-edge)',
      position:   'relative',
      overflow:   'hidden',
    }}>
      <div style={{
        position: 'absolute', bottom: -200, left: -150,
        width: 480, height: 480, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(20,39,63,0.05), transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{
          display:             'grid',
          gridTemplateColumns: '1fr 1fr',
          gap:                 80,
          alignItems:          'center',
        }} className="product-grid">
          <div>
            <div className="section-eyebrow">A Plataforma · AIO</div>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              CONHEÇA <span className="accent">AIO</span><br />
              ALL IN ONE
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>
              <strong style={{ color: 'var(--navy)' }}>AIO</strong> é o software all-in-one
              da <strong style={{ color: 'var(--navy)' }}>Exsinov</strong> para consultórios
              e clínicas. Vitrine digital, agenda, omnichannel, financeiro e análise
              contábil — em um único lugar, simples e profissional.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {BULLETS.map((b, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  animation: `fadeUp 0.65s ${i * 0.06}s ease both`,
                  animationFillMode: 'both',
                }}>
                  <span style={{
                    flexShrink: 0,
                    width: 22, height: 22, borderRadius: '50%',
                    background: 'var(--orange)',
                    color: 'var(--cream)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, fontWeight: 700,
                    marginTop: 1,
                  }}>✓</span>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontWeight: 400,
                    fontSize: 15, color: 'var(--navy-soft)', lineHeight: 1.6,
                  }}>{b}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 40, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <WaIcon />
                Reservar no WhatsApp
              </a>
              <a href="#how" className="btn-ghost">Como Funciona</a>
            </div>
          </div>

          <div style={{ animation: 'fadeUp 0.9s 0.2s ease both', animationFillMode: 'both' }}>
            <DashboardMockup />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .product-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}

function DashboardMockup() {
  return (
    <div style={{
      position: 'relative',
      background: 'var(--navy)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--beige-edge)',
    }}>
      {/* browser chrome */}
      <div style={{
        background: 'var(--navy-deep)',
        padding: '12px 16px',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        {['#FF6B6B','#FFD93D','#6BCF7F'].map(c => (
          <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c, opacity: 0.85 }} />
        ))}
        <div style={{
          flex: 1, marginLeft: 8,
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 6, padding: '4px 12px',
          fontFamily: 'var(--font-body)', fontSize: 11,
          color: 'rgba(255,255,255,0.55)',
        }}>aio.exsinov.com.br/consultorio</div>
      </div>

      <div style={{ display: 'flex', minHeight: 360 }}>
        {/* sidebar */}
        <div style={{
          width: 60, background: 'rgba(0,0,0,0.2)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', paddingTop: 18, gap: 18,
        }}>
          {[VitrinaM, AgendaM, OmniM, AnalyticsM].map((Icon, i) => (
            <div key={i} style={{
              width: 34, height: 34,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: 8,
              background: i === 1 ? 'var(--orange)' : 'transparent',
              color:      i === 1 ? 'var(--cream)' : 'rgba(255,255,255,0.4)',
            }}><Icon /></div>
          ))}
        </div>

        {/* main */}
        <div style={{ flex: 1, padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
            {[
              { label: 'Receita',   value: 'R$ 18.4k', up: true,  pct: '+12%' },
              { label: 'Consultas', value: '142',      up: true,  pct: '+8%'  },
              { label: 'Faltas',    value: '3%',      up: false, pct: '-60%' },
            ].map((s, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8,
                padding: '11px 13px',
              }}>
                <div style={{
                  fontFamily: 'var(--font-body)', fontSize: 10,
                  color: 'rgba(255,255,255,0.5)', marginBottom: 4,
                  letterSpacing: '0.05em',
                }}>{s.label}</div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 19,
                  color: '#fff', lineHeight: 1,
                }}>{s.value}</div>
                <div style={{
                  fontSize: 10,
                  color: s.up ? '#4ade80' : '#f87171',
                  fontFamily: 'var(--font-body)', marginTop: 4,
                }}>{s.up ? '↑' : '↓'} {s.pct} este mês</div>
              </div>
            ))}
          </div>

          {/* chart */}
          <div style={{
            flex: 1,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 8, padding: '12px 14px',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: 10, color: 'rgba(255,255,255,0.5)',
              marginBottom: 10,
            }}>Receita mensal — últimos 12 meses</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 80 }}>
              {[45, 60, 50, 75, 65, 88, 72, 95, 80, 100, 88, 92].map((h, i) => (
                <div key={i} style={{
                  flex: 1,
                  height: `${h}%`,
                  background: i === 11
                    ? 'var(--orange)'
                    : `rgba(232,93,31,${0.18 + (h/100) * 0.32})`,
                  borderRadius: '3px 3px 0 0',
                }} />
              ))}
            </div>
          </div>

          {/* message */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 8, padding: '10px 14px',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{
              width: 8, height: 8, borderRadius: '50%',
              background: 'var(--orange)',
              boxShadow: '0 0 8px var(--orange)',
            }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              color: 'rgba(255,255,255,0.7)',
            }}>3 novas mensagens — WhatsApp, Instagram</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const micro = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

function VitrinaM()   { return <svg {...micro}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg> }
function AgendaM()    { return <svg {...micro}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> }
function OmniM()      { return <svg {...micro}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> }
function AnalyticsM() { return <svg {...micro}><path d="M18 20V10M12 20V4M6 20v-6"/></svg> }

function WaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
