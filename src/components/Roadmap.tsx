const PHASES = [
  {
    num:    '01',
    period: 'Mai 2026 — Lançamento',
    title:  'Plataforma Completa',
    tag:    'Disponível no lançamento',
    active: true,
    items: [
      'Agenda online inteligente',
      'Prontuário na nuvem',
      'Mensagens unificadas (WhatsApp, Instagram, E-mail)',
      'Financeiro simplificado',
      'Site profissional personalizável',
      'Pagamentos via Mercado Pago',
    ],
  },
  {
    num:    '02',
    period: 'Ago 2026 — Fase 2',
    title:  'Inteligência Contábil',
    tag:    'Em 3 meses',
    active: false,
    items: [
      'DRE contábil automático',
      'Relatórios financeiros mensais',
      'Chatbot de atendimento de pacientes',
      'Automações de confirmação e lembrete',
    ],
  },
  {
    num:    '03',
    period: 'Nov 2026 — Fase 3',
    title:  'Mobile & Fiscal',
    tag:    'Em 6 meses',
    active: false,
    items: [
      'App mobile iOS e Android',
      'Planejamento fiscal com IA',
      'Gestão offline com sincronização',
      'Notificações push para pacientes',
    ],
  },
  {
    num:    '04',
    period: 'Fev 2027 — Fase 4',
    title:  'IA de Crescimento',
    tag:    'Em 9 meses',
    active: false,
    items: [
      'Análise do consultório com IA',
      'Sugestões de ação personalizadas',
      'Previsão de receita e sazonalidade',
      'Benchmarking com outros consultórios',
    ],
  },
]

export default function Roadmap() {
  return (
    <section id="roadmap" style={{
      padding:    'clamp(80px, 10vw, 130px) 0',
      background: 'var(--navy-mid)',
      borderTop:  'var(--border-subtle)',
      position:   'relative',
      overflow:   'hidden',
    }}>
      {/* subtle grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,107,26,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,107,26,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '54px 54px',
        pointerEvents: 'none',
      }} />

      {/* glow */}
      <div style={{
        position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 400, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(255,107,26,0.07), transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            Roadmap
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            O FUTURO JÁ ESTÁ<br />
            <span className="accent">SENDO CONSTRUÍDO</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Cada trimestre traz uma nova camada de inteligência para o seu negócio.
          </p>
        </div>

        {/* timeline connector (desktop) */}
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: 28,
            left: '12.5%',
            right: '12.5%',
            height: 2,
            background: 'linear-gradient(90deg, var(--orange), rgba(255,107,26,0.15) 40%, rgba(255,107,26,0.08))',
            zIndex: 0,
          }} className="roadmap-line" />

          {/* phases grid */}
          <div style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap:                 20,
            position:            'relative',
            zIndex:              1,
          }} className="roadmap-grid">
            {PHASES.map((p, i) => (
              <PhaseCard key={i} {...p} delay={i * 0.12} />
            ))}
          </div>
        </div>

        {/* bottom note */}
        <p style={{
          textAlign:  'center',
          marginTop:  56,
          fontFamily: 'var(--font-body)',
          fontWeight: 300,
          fontSize:   14,
          color:      'var(--gray)',
          opacity:    0.7,
        }}>
          Roadmap sujeito a ajustes conforme feedback dos primeiros clientes.
          Quem reservar agora <strong style={{ color: 'var(--orange)', fontWeight: 500, opacity: 1 }}>
            participa ativamente da evolução do produto.
          </strong>
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .roadmap-grid { grid-template-columns: repeat(2,1fr) !important; }
          .roadmap-line { display: none !important; }
        }
        @media (max-width: 520px) {
          .roadmap-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

interface PhaseProps {
  num:    string
  period: string
  title:  string
  tag:    string
  active: boolean
  items:  string[]
  delay:  number
}

function PhaseCard({ num, period, title, tag, active, items, delay }: PhaseProps) {
  return (
    <div style={{
      display:       'flex',
      flexDirection: 'column',
      gap:           16,
      animation:     `fadeUp 0.8s ${delay}s ease both`,
      animationFillMode: 'both',
    }}>
      {/* dot on timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <div style={{
          width:        56, height: 56,
          borderRadius: '50%',
          background:   active ? 'var(--orange)' : 'rgba(255,107,26,0.08)',
          border:       active ? 'none' : '2px solid rgba(255,107,26,0.2)',
          display:      'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily:   'var(--font-display)',
          fontSize:     22,
          color:        active ? 'var(--navy)' : 'rgba(255,107,26,0.35)',
          letterSpacing: '0.04em',
          boxShadow:    active ? '0 0 24px rgba(255,107,26,0.5)' : 'none',
          flexShrink:   0,
          animation:    active ? 'glowPulse 3s ease-in-out infinite' : 'none',
        }}>{num}</div>
      </div>

      {/* card */}
      <div style={{
        flex:         1,
        padding:      '24px 20px',
        background:   active ? 'rgba(255,107,26,0.08)' : 'rgba(255,255,255,0.02)',
        border:       active ? '1px solid rgba(255,107,26,0.35)' : '1px solid rgba(255,107,26,0.1)',
        borderRadius: 'var(--radius)',
        display:      'flex',
        flexDirection:'column',
        gap:          12,
        transition:   'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'rgba(255,107,26,0.4)'
        el.style.boxShadow   = '0 8px 32px rgba(0,0,0,0.25)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = active ? 'rgba(255,107,26,0.35)' : 'rgba(255,107,26,0.1)'
        el.style.boxShadow   = 'none'
      }}
      >
        {/* tag */}
        <span style={{
          display:       'inline-flex',
          alignSelf:     'flex-start',
          padding:       '3px 10px',
          borderRadius:  100,
          background:    active ? 'var(--orange)' : 'rgba(255,107,26,0.1)',
          color:         active ? 'var(--navy)' : 'rgba(255,107,26,0.5)',
          fontFamily:    'var(--font-heading)',
          fontWeight:    700,
          fontSize:      10,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}>{tag}</span>

        {/* period */}
        <span style={{
          fontFamily:    'var(--font-heading)',
          fontWeight:    600,
          fontSize:      12,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color:         active ? 'var(--orange)' : 'var(--gray)',
        }}>{period}</span>

        {/* title */}
        <h3 style={{
          fontFamily:  'var(--font-heading)',
          fontWeight:  700,
          fontSize:    'clamp(17px, 2vw, 21px)',
          color:       active ? 'var(--beige)' : 'rgba(245,240,232,0.5)',
          lineHeight:  1.2,
        }}>{title}</h3>

        {/* items */}
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
          {items.map(item => (
            <li key={item} style={{
              display:    'flex',
              alignItems: 'flex-start',
              gap:        8,
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize:   13,
              color:      active ? 'var(--gray-light)' : 'rgba(138,155,176,0.45)',
              lineHeight: 1.5,
            }}>
              <span style={{
                color:     active ? 'var(--orange)' : 'rgba(255,107,26,0.25)',
                fontSize:  12,
                marginTop: 2,
                flexShrink:0,
              }}>▸</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
