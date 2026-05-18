const FEATURES = [
  {
    icon:  <VitrinaIcon />,
    tag:   'Vitrine Digital',
    title: 'Vitrine pronta para atrair pacientes',
    desc:  'Página pública com serviços, profissionais, identidade visual, banners, contatos, privacidade e termos para transformar o consultório em uma presença digital organizada.',
  },
  {
    icon:  <AgendaIcon />,
    tag:   'Agenda e Recepção',
    title: 'Agendamento e rotina da recepção no mesmo lugar',
    desc:  'Paciente escolhe serviço, profissional, data e horário. A recepção acompanha status, avisos, check-in, histórico e fechamento do fluxo.',
  },
  {
    icon:  <OmniIcon />,
    tag:   'Comunicação Omnichannel',
    title: 'WhatsApp, Gmail, Instagram e portal em contexto',
    desc:  'A equipe não precisa alternar entre canais. Conversas, templates, mensagens internas e histórico por paciente ficam centralizados no AIO.',
  },
  {
    icon:  <PatientIcon />,
    tag:   'Portal do Paciente',
    title: 'O paciente acompanha tudo sem ligar',
    desc:  'Área própria para cadastro, consultas, histórico, chat, cancelamento e avaliação, reduzindo ligações repetitivas para a recepção.',
  },
  {
    icon:  <AnalyticsIcon />,
    tag:   'Prontuário e Profissional',
    title: 'Agenda, evolução e prontuário em nuvem',
    desc:  'Profissionais acessam histórico clínico, evolução, sessões, anexos, auditoria, avisos da recepção e visão financeira com segurança operacional.',
  },
  {
    icon:  <PayIcon />,
    tag:   'Financeiro e Resultado',
    title: 'Agenda, pagamentos e custos mostram o lucro real',
    desc:  'Serviços, preços, Mercado Pago, custos, faturamento, métricas e exportações conectados para apoiar decisões com dados reais.',
    wide:  true,
  },
]

export default function Features() {
  return (
    <section id="features" style={{
      padding: 'clamp(80px, 10vw, 120px) 0',
      background: 'var(--beige)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* warm decorative blob */}
      <div style={{
        position: 'absolute', top: -180, right: -120,
        width: 460, height: 460, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,93,31,0.08), transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Recursos · AIO</div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            TUDO QUE SEU CONSULTÓRIO PRECISA,<br />
            <span className="accent">EM AIO</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            <strong style={{ color: 'var(--navy)' }}>AIO</strong> é a plataforma all-in-one
            pensada para <strong style={{ color: 'var(--navy)' }}>
            consultórios médicos, odontológicos, clínicas e profissionais de saúde
            </strong> que querem crescer sem complicação.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 24,
        }} className="features-grid">
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} {...f} delay={i * 0.08} wide={f.wide} />
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
  icon:  React.ReactNode
  tag:   string
  title: string
  desc:  string
  delay: number
  wide?: boolean
}

function FeatureCard({ icon, tag, title, desc, delay, wide }: CardProps) {
  return (
    <div style={{
      padding:      36,
      background:   'var(--cream)',
      border:       '1px solid var(--beige-edge)',
      borderRadius: 'var(--radius)',
      display:      'flex',
      gap:          22,
      transition:   'all 0.3s ease',
      animation:    `fadeUp 0.7s ${delay}s ease both`,
      animationFillMode: 'both',
      position:     'relative',
      overflow:     'hidden',
      boxShadow:    'var(--shadow-sm)',
      gridColumn:   wide ? '1 / -1' : undefined,
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLDivElement
      el.style.borderColor = 'var(--orange-line)'
      el.style.transform   = 'translateY(-4px)'
      el.style.boxShadow   = 'var(--shadow-lg)'
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLDivElement
      el.style.borderColor = 'var(--beige-edge)'
      el.style.transform   = 'translateY(0)'
      el.style.boxShadow   = 'var(--shadow-sm)'
    }}
    >
      <div style={{
        flexShrink: 0,
        width: 56, height: 56,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--orange-soft)',
        border:     '1px solid var(--orange-line)',
        borderRadius: 12,
        color: 'var(--orange)',
      }}>{icon}</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{
          fontFamily:    'var(--font-heading)',
          fontWeight:    700,
          fontSize:      11,
          letterSpacing: '0.26em',
          textTransform: 'uppercase',
          color:         'var(--orange)',
        }}>{tag}</span>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize:   'clamp(18px, 2.2vw, 22px)',
          lineHeight: 1.25,
          color:      'var(--navy)',
        }}>{title}</h3>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 400,
          fontSize:   14.5,
          color:      'var(--navy-mid)',
          lineHeight: 1.65,
        }}>{desc}</p>
      </div>
    </div>
  )
}

const ico = { width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

function VitrinaIcon()   { return <svg {...ico}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg> }
function AgendaIcon()    { return <svg {...ico}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/></svg> }
function OmniIcon()      { return <svg {...ico}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h8M8 14h5"/></svg> }
function PatientIcon()   { return <svg {...ico}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M17 11l2 2 4-4"/></svg> }
function AnalyticsIcon() { return <svg {...ico}><path d="M18 20V10M12 20V4M6 20v-6"/></svg> }
function PayIcon()       { return <svg {...ico}><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg> }
