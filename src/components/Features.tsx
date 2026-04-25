const FEATURES = [
  {
    icon:  <VitrinaIcon />,
    tag:   'Vitrine Digital',
    title: 'Mostre seu negócio com elegância',
    desc:  'Página profissional e personalizável para apresentar seus produtos e serviços. Rápida, responsiva e otimizada para conversão.',
    accent: '#FF6B1A',
  },
  {
    icon:  <AgendaIcon />,
    tag:   'Agenda Inteligente',
    title: 'Zero faltas, agenda organizada',
    desc:  'Lembretes automáticos via WhatsApp que reduzem faltas em até 60%. Gerencie horários, bloqueios e filas de espera em segundos.',
    accent: '#FF8C42',
  },
  {
    icon:  <OmniIcon />,
    tag:   'Omnichannel',
    title: 'WhatsApp, Instagram e E-mail em um só lugar',
    desc:  'Centralize todas as conversas dos seus canais em um único painel. Nunca perca uma mensagem, automatize respostas e atenda mais rápido.',
    accent: '#FF6B1A',
  },
  {
    icon:  <AnalyticsIcon />,
    tag:   'Análise Contábil',
    title: 'Saiba seu lucro real em segundos',
    desc:  'Dashboards claros de receita, despesas e desempenho. Tome decisões baseadas em dados reais — sem planilhas complexas.',
    accent: '#FF8C42',
  },
]

export default function Features() {
  return (
    <section id="features" style={{
      padding: 'clamp(80px, 10vw, 120px) 0',
      background: 'var(--navy)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* subtle background accent */}
      <div style={{
        position: 'absolute', top: -200, right: -200,
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,26,0.06), transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            Recursos
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            TUDO QUE SEU NEGÓCIO{' '}
            <span className="accent">PRECISA</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Uma plataforma completa pensada para consultórios, clínicas e prestadores de serviço que querem crescer sem complicação.
          </p>
        </div>

        {/* grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
        }} className="features-grid">
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} {...f} delay={i * 0.1} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

interface CardProps {
  icon:    React.ReactNode
  tag:     string
  title:   string
  desc:    string
  accent:  string
  delay:   number
}

function FeatureCard({ icon, tag, title, desc, delay }: CardProps) {
  return (
    <div style={{
      padding:      36,
      background:   'var(--navy-mid)',
      border:       'var(--border-card)',
      borderRadius: 'var(--radius)',
      display:      'flex',
      gap:          24,
      transition:   'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
      animation:    `fadeUp 0.8s ${delay}s ease both`,
      animationFillMode: 'both',
      cursor:       'default',
      position:     'relative',
      overflow:     'hidden',
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLDivElement
      el.style.borderColor   = 'rgba(255,107,26,0.45)'
      el.style.transform     = 'translateY(-4px)'
      el.style.boxShadow     = '0 16px 48px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,107,26,0.15)'
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLDivElement
      el.style.borderColor   = 'rgba(255,107,26,0.15)'
      el.style.transform     = 'translateY(0)'
      el.style.boxShadow     = 'none'
    }}
    >
      {/* top-right glow dot */}
      <div style={{
        position: 'absolute', top: -40, right: -40,
        width: 120, height: 120, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,26,0.1), transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* icon */}
      <div style={{
        flexShrink: 0,
        width:  56, height: 56,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(255,107,26,0.1)',
        border:     '1px solid rgba(255,107,26,0.25)',
        borderRadius: 12,
        color: 'var(--orange)',
      }}>{icon}</div>

      {/* text */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{
          fontFamily:    'var(--font-heading)',
          fontWeight:    600,
          fontSize:      11,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color:         'var(--orange)',
        }}>{tag}</span>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize:   'clamp(18px, 2.2vw, 22px)',
          lineHeight: 1.2,
          color:      'var(--beige)',
        }}>{title}</h3>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 300,
          fontSize:   14,
          color:      'var(--gray)',
          lineHeight: 1.7,
        }}>{desc}</p>
      </div>
    </div>
  )
}

/* ── Icons ── */
function VitrinaIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M3 9h18M9 21V9"/>
    </svg>
  )
}

function AgendaIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/>
    </svg>
  )
}

function OmniIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      <path d="M8 10h8M8 14h5"/>
    </svg>
  )
}

function AnalyticsIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 20V10M12 20V4M6 20v-6"/>
    </svg>
  )
}
