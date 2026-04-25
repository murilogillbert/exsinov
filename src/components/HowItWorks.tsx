const WA_LINK = 'https://wa.me/5565996042431?text=Ol%C3%A1!%20Quero%20reservar%20a%20plataforma%20Exsinov%20para%20o%20meu%20consult%C3%B3rio.'

const STEPS = [
  {
    num:   '01',
    badge: '240 min',
    title: 'Implantação do AIO',
    desc:  'Nossa equipe configura toda a sua plataforma AIO — vitrine, integrações e infraestrutura. Você não precisa fazer nada técnico, entregamos tudo pronto em 4 horas.',
    icon:  <StepIcon1 />,
  },
  {
    num:   '02',
    badge: '60 min',
    title: 'Configuração do consultório',
    desc:  'Em uma sessão guiada de 1 hora, inserimos seus serviços, especialidades, equipe e preços no AIO. Pronto para receber pacientes no mesmo dia.',
    icon:  <StepIcon2 />,
  },
  {
    num:   '03',
    badge: 'Contínuo',
    title: 'Cresça com dados reais',
    desc:  'Acompanhe os relatórios do AIO sobre o desempenho e contabilidade do consultório. Tome decisões estratégicas e escale com confiança.',
    icon:  <StepIcon3 />,
  },
]

export default function HowItWorks() {
  return (
    <section id="how" style={{
      padding:    'clamp(80px, 10vw, 130px) 0',
      background: 'var(--beige)',
      position:   'relative',
      overflow:   'hidden',
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Como Funciona</div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            AIO PRONTO<br />
            <span className="accent">NO MESMO DIA</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Implantação do AIO em <strong style={{ color: 'var(--navy)' }}>240 minutos</strong>.
            Configuração das informações do consultório em mais{' '}
            <strong style={{ color: 'var(--navy)' }}>60 minutos</strong>.
            No mesmo dia o consultório está operando.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28,
          position: 'relative',
        }} className="steps-grid">
          {/* connector */}
          <div style={{
            position: 'absolute',
            top: 44, left: '16.6%', right: '16.6%',
            height: 2,
            background: 'linear-gradient(90deg, var(--orange), rgba(232,93,31,0.15) 50%, rgba(232,93,31,0.08))',
            zIndex: 0,
          }} className="connector-line" />

          {STEPS.map((s, i) => <StepCard key={i} {...s} delay={i * 0.12} />)}
        </div>

        <div style={{ textAlign: 'center', marginTop: 64 }}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary"
             style={{ fontSize: 16, padding: '18px 44px', gap: 12 }}>
            <WhatsAppIcon />
            Reservar meu Consultório
          </a>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 13,
            color: 'var(--navy-mute)', marginTop: 14, fontWeight: 400,
          }}>
            10% do faturamento até 01/05 · 15% após o prazo · Suporte humano das 8h às 20h
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid     { grid-template-columns: 1fr !important; }
          .connector-line { display: none !important; }
        }
      `}</style>
    </section>
  )
}

interface StepProps {
  num: string; badge: string; title: string; desc: string;
  icon: React.ReactNode; delay: number
}

function StepCard({ num, badge, title, desc, icon, delay }: StepProps) {
  return (
    <div style={{
      position:     'relative',
      zIndex:       1,
      padding:      '40px 28px 32px',
      background:   'var(--cream)',
      border:       '1px solid var(--beige-edge)',
      borderRadius: 'var(--radius)',
      display:      'flex',
      flexDirection: 'column',
      gap:          16,
      textAlign:    'center',
      alignItems:   'center',
      animation:    `fadeUp 0.7s ${delay}s ease both`,
      animationFillMode: 'both',
      transition:   'all 0.3s ease',
      boxShadow:    'var(--shadow-sm)',
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLDivElement
      el.style.borderColor = 'var(--orange-line)'
      el.style.boxShadow   = 'var(--shadow-md)'
      el.style.transform   = 'translateY(-3px)'
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLDivElement
      el.style.borderColor = 'var(--beige-edge)'
      el.style.boxShadow   = 'var(--shadow-sm)'
      el.style.transform   = 'translateY(0)'
    }}
    >
      {/* step number badge */}
      <div style={{
        position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)',
        background: 'var(--orange)', color: 'var(--cream)',
        fontFamily: 'var(--font-display)',
        fontSize: 14, letterSpacing: '0.08em',
        padding: '5px 16px', borderRadius: 100,
        boxShadow: '0 6px 14px rgba(232,93,31,0.3)',
      }}>{num}</div>

      <div style={{
        width: 64, height: 64, borderRadius: '50%',
        background: 'var(--orange-soft)',
        border: '1px solid var(--orange-line)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--orange)', marginTop: 4,
      }}>{icon}</div>

      {/* time badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '5px 14px',
        background: 'var(--navy)',
        borderRadius: 100,
        fontFamily: 'var(--font-heading)', fontWeight: 700,
        fontSize: 12, letterSpacing: '0.1em',
        color: 'var(--cream)',
      }}>
        <ClockIcon /> {badge}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-heading)', fontWeight: 700,
        fontSize:   'clamp(18px, 2vw, 22px)',
        color:      'var(--navy)', lineHeight: 1.25,
      }}>{title}</h3>

      <p style={{
        fontFamily: 'var(--font-body)', fontWeight: 400,
        fontSize:   14, color: 'var(--navy-mid)', lineHeight: 1.65,
      }}>{desc}</p>
    </div>
  )
}

function StepIcon1() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
}
function StepIcon2() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/>
    </svg>
  )
}
function StepIcon3() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  )
}
function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
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
