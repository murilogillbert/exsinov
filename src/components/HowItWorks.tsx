const STEPS = [
  {
    num:   '01',
    title: 'Cadastre-se em 5 minutos',
    desc:  'Crie sua conta gratuitamente, sem cartão de crédito. Configure sua vitrine digital e personalize a identidade do seu negócio.',
    icon:  <StepIcon1 />,
  },
  {
    num:   '02',
    title: 'Centralize sua gestão',
    desc:  'Conecte sua agenda, comunicação e financeiro em uma única plataforma. Importe seus contatos e comece a atender de forma profissional.',
    icon:  <StepIcon2 />,
  },
  {
    num:   '03',
    title: 'Cresça com dados reais',
    desc:  'Acompanhe relatórios precisos de desempenho e contabilidade. Tome decisões estratégicas e escale seu negócio com confiança.',
    icon:  <StepIcon3 />,
  },
]

export default function HowItWorks() {
  return (
    <section id="how" style={{
      padding:    'clamp(80px, 10vw, 130px) 0',
      background: 'var(--navy)',
      position:   'relative',
      overflow:   'hidden',
    }}>
      {/* grid bg */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,107,26,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,107,26,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '54px 54px',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            Como Funciona
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            SIMPLES DE COMEÇAR,<br />
            <span className="accent">PODEROSO PARA CRESCER</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Em três passos você já tem sua gestão completa funcionando.
          </p>
        </div>

        {/* steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          position: 'relative',
        }} className="steps-grid">
          {/* connector line */}
          <div style={{
            position: 'absolute',
            top: 44,
            left: '16.6%',
            right: '16.6%',
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(255,107,26,0.3), rgba(255,107,26,0.3), transparent)',
            zIndex: 0,
          }} className="connector-line" />

          {STEPS.map((s, i) => (
            <StepCard key={i} {...s} delay={i * 0.15} />
          ))}
        </div>

        {/* bottom CTA nudge */}
        <div style={{ textAlign: 'center', marginTop: 72 }}>
          <a href="#cta" className="btn-primary" style={{ fontSize: 16, padding: '18px 48px' }}>
            Comece Grátis Agora
            <ArrowIcon />
          </a>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            color: 'var(--gray)',
            marginTop: 14,
            fontWeight: 300,
          }}>
            7 dias gratuitos · Sem cartão de crédito · Suporte humano das 8h às 20h
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .connector-line { display: none !important; }
        }
      `}</style>
    </section>
  )
}

interface StepProps {
  num:   string
  title: string
  desc:  string
  icon:  React.ReactNode
  delay: number
}

function StepCard({ num, title, desc, icon, delay }: StepProps) {
  return (
    <div style={{
      position:     'relative',
      zIndex:       1,
      padding:      '36px 28px',
      background:   'var(--navy-mid)',
      border:       'var(--border-card)',
      borderRadius: 'var(--radius)',
      display:      'flex',
      flexDirection:'column',
      gap:          20,
      textAlign:    'center',
      alignItems:   'center',
      animation:    `fadeUp 0.8s ${delay}s ease both`,
      animationFillMode: 'both',
      transition:   'border-color 0.3s ease, box-shadow 0.3s ease',
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLDivElement
      el.style.borderColor = 'rgba(255,107,26,0.4)'
      el.style.boxShadow   = '0 8px 40px rgba(0,0,0,0.3)'
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLDivElement
      el.style.borderColor = 'rgba(255,107,26,0.15)'
      el.style.boxShadow   = 'none'
    }}
    >
      {/* step number */}
      <div style={{
        position:   'absolute',
        top:        -18,
        left:       '50%',
        transform:  'translateX(-50%)',
        background: 'var(--orange)',
        color:      'var(--navy)',
        fontFamily: 'var(--font-display)',
        fontSize:   14,
        letterSpacing: '0.08em',
        padding:    '4px 14px',
        borderRadius: 100,
        lineHeight: 1.4,
      }}>{num}</div>

      {/* icon */}
      <div style={{
        width:   64, height: 64,
        borderRadius: '50%',
        background:   'rgba(255,107,26,0.1)',
        border:       '1px solid rgba(255,107,26,0.22)',
        display:      'flex', alignItems: 'center', justifyContent: 'center',
        color:        'var(--orange)',
        marginTop:    8,
      }}>{icon}</div>

      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize:   'clamp(18px, 2vw, 22px)',
        color:      'var(--beige)',
        lineHeight: 1.2,
      }}>{title}</h3>

      <p style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize:   14,
        color:      'var(--gray)',
        lineHeight: 1.7,
      }}>{desc}</p>
    </div>
  )
}

/* ── Step icons ── */
function StepIcon1() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
      <path d="M16 11l2 2 4-4" strokeWidth="2"/>
    </svg>
  )
}

function StepIcon2() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  )
}

function StepIcon3() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
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
