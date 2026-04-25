const BULLETS = [
  { icon: '✦', text: 'Agenda Online Inteligente com lembretes automáticos via WhatsApp' },
  { icon: '✦', text: 'Prontuário na nuvem — histórico completo, seguro e acessível de qualquer lugar' },
  { icon: '✦', text: 'Financeiro simples: saiba seu lucro real sem planilhas complexas' },
  { icon: '✦', text: 'Comunicação centralizada: WhatsApp, Instagram e E-mail em um único painel' },
  { icon: '✦', text: 'Vitrine digital personalizável para atrair e converter novos clientes' },
]

export default function Product() {
  return (
    <section id="product" style={{
      padding:    'clamp(80px, 10vw, 130px) 0',
      background: 'var(--navy-mid)',
      borderTop:  'var(--border-subtle)',
      borderBottom: 'var(--border-subtle)',
      position:   'relative',
      overflow:   'hidden',
    }}>
      {/* bg accent */}
      <div style={{
        position: 'absolute', bottom: -200, left: -150,
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,26,0.07), transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{
          display:             'grid',
          gridTemplateColumns: '1fr 1fr',
          gap:                 80,
          alignItems:          'center',
        }} className="product-grid">

          {/* ── LEFT: text ── */}
          <div>
            <div className="section-eyebrow">Plataforma</div>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              UMA PLATAFORMA,<br />
              <span className="accent">RESULTADO COMPLETO</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 36 }}>
              Software de gestão personalizado que reúne vitrine digital, agenda, omnichannel e análise contábil — tudo em um único lugar, simples e sem burocracia.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {BULLETS.map((b, i) => (
                <li key={i} style={{
                  display:    'flex',
                  alignItems: 'flex-start',
                  gap:        12,
                  animation:  `fadeUp 0.7s ${i * 0.08}s ease both`,
                  animationFillMode: 'both',
                }}>
                  <span style={{
                    color:      'var(--orange)',
                    fontSize:   14,
                    marginTop:  3,
                    flexShrink: 0,
                  }}>{b.icon}</span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 400,
                    fontSize:   15,
                    color:      'var(--gray-light)',
                    lineHeight: 1.6,
                  }}>{b.text}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 44, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/5565996042431?text=Ol%C3%A1!%20Quero%20fazer%20minha%20reserva%20na%20Exsinov."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ gap: 10 }}
              >
                <WaIcon />
                Reservar no WhatsApp
              </a>
              <a href="#how" className="btn-ghost">Como Funciona</a>
            </div>
          </div>

          {/* ── RIGHT: dashboard mockup ── */}
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
      position:    'relative',
      background:  'var(--navy)',
      border:      '1px solid rgba(255,107,26,0.25)',
      borderRadius: 16,
      overflow:    'hidden',
      boxShadow:   '0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,107,26,0.1)',
    }}>
      {/* browser chrome */}
      <div style={{
        background:   '#0d1f33',
        padding:      '12px 16px',
        display:      'flex',
        alignItems:   'center',
        gap:          8,
        borderBottom: '1px solid rgba(255,107,26,0.12)',
      }}>
        {['#ff5f57','#febc2e','#28c840'].map(c => (
          <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
        ))}
        <div style={{
          flex: 1,
          marginLeft: 8,
          background: 'rgba(255,255,255,0.05)',
          borderRadius: 6,
          padding:    '4px 12px',
          fontFamily: 'var(--font-body)',
          fontSize:   11,
          color:      'var(--gray)',
        }}>app.exsinov.com.br</div>
      </div>

      {/* sidebar + content */}
      <div style={{ display: 'flex', height: 340 }}>
        {/* sidebar */}
        <div style={{
          width:       64,
          background:  '#0a1828',
          borderRight: '1px solid rgba(255,107,26,0.08)',
          display:     'flex',
          flexDirection: 'column',
          alignItems:  'center',
          paddingTop:  20,
          gap:         20,
        }}>
          {[VitrinaM, AgendaM, OmniM, AnalyticsM].map((Icon, i) => (
            <div key={i} style={{
              width: 36, height: 36,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: 8,
              background: i === 0 ? 'rgba(255,107,26,0.18)' : 'transparent',
              color:      i === 0 ? 'var(--orange)' : 'var(--gray)',
              cursor: 'default',
            }}>
              <Icon />
            </div>
          ))}
        </div>

        {/* main content */}
        <div style={{ flex: 1, padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* top row: stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
            {[
              { label: 'Receita', value: 'R$ 18.4k', up: true },
              { label: 'Consultas', value: '142',    up: true },
              { label: 'Faltas',   value: '3%',      up: false },
            ].map((s, i) => (
              <div key={i} style={{
                background:   'rgba(255,255,255,0.04)',
                border:       '1px solid rgba(255,107,26,0.1)',
                borderRadius: 8,
                padding:      '12px 14px',
              }}>
                <div style={{ fontSize: 10, color: 'var(--gray)', fontFamily: 'var(--font-body)', marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 18, fontFamily: 'var(--font-display)', color: 'var(--beige)', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 10, color: s.up ? '#4ade80' : '#f87171', marginTop: 3, fontFamily: 'var(--font-body)' }}>
                  {s.up ? '↑' : '↓'} este mês
                </div>
              </div>
            ))}
          </div>

          {/* chart placeholder */}
          <div style={{
            flex: 1,
            background:   'rgba(255,255,255,0.03)',
            border:       '1px solid rgba(255,107,26,0.08)',
            borderRadius: 8,
            padding:      '12px 14px',
            position:     'relative',
            overflow:     'hidden',
          }}>
            <div style={{ fontSize: 10, color: 'var(--gray)', fontFamily: 'var(--font-body)', marginBottom: 10 }}>
              Receita mensal
            </div>
            {/* simple bar chart */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 80 }}>
              {[45, 60, 50, 75, 65, 88, 72, 95, 80, 100, 88, 92].map((h, i) => (
                <div key={i} style={{
                  flex: 1,
                  height:       `${h}%`,
                  background:   i === 11
                    ? 'var(--orange)'
                    : `rgba(255,107,26,${0.2 + (h/100)*0.25})`,
                  borderRadius: '3px 3px 0 0',
                  minWidth:     0,
                  transition:   'height 0.8s ease',
                }} />
              ))}
            </div>
            {/* glow under the chart */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: 24,
              background: 'linear-gradient(to top, rgba(255,107,26,0.07), transparent)',
              pointerEvents: 'none',
            }} />
          </div>

          {/* message row */}
          <div style={{
            background:   'rgba(255,255,255,0.03)',
            border:       '1px solid rgba(255,107,26,0.08)',
            borderRadius: 8,
            padding:      '10px 14px',
            display:      'flex',
            alignItems:   'center',
            gap:          10,
          }}>
            <div style={{
              width: 8, height: 8, borderRadius: '50%',
              background: 'var(--orange)',
              flexShrink: 0,
              boxShadow: '0 0 6px var(--orange)',
            }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--gray)' }}>
              3 novas mensagens — WhatsApp, Instagram
            </span>
          </div>
        </div>
      </div>

      {/* orange glow overlay */}
      <div style={{
        position: 'absolute', bottom: -60, right: -60,
        width: 180, height: 180, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,26,0.12), transparent 65%)',
        pointerEvents: 'none',
      }} />
    </div>
  )
}

/* mini sidebar icons */
const micro = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

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
