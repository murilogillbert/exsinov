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
          <a
            href="https://wa.me/5565996042431?text=Ol%C3%A1!%20Quero%20fazer%20minha%20reserva%20na%20Exsinov."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: 16, padding: '18px 48px', gap: 12 }}
          >
            <WhatsAppIcon />
            Faça sua reserva no WhatsApp
          </a>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            color: 'var(--gray)',
            marginTop: 14,
            fontWeight: 300,
          }}>
            Sem mensalidade fixa · 10–15% do faturamento · Suporte humano das 8h às 20h
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

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
