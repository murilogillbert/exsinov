const PHASES = [
  {
    num:    '01',
    period: 'Mai 2026 — Lançamento',
    title:  'Plataforma Completa',
    tag:    'Disponível no lançamento',
    active: true,
    items: [
      'Agenda online inteligente',
      'Prontuário eletrônico na nuvem',
      'Mensagens unificadas (WhatsApp, Instagram, E-mail)',
      'Financeiro simplificado',
      'Site profissional do consultório',
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
      'DRE contábil automático do consultório',
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
      'Benchmarking entre consultórios',
    ],
  },
]

export default function Roadmap() {
  return (
    <section id="roadmap" style={{
      padding:    'clamp(80px, 10vw, 130px) 0',
      background: 'var(--beige-soft)',
      borderTop:  '1px solid var(--beige-edge)',
      position:   'relative',
      overflow:   'hidden',
    }}>
      <div style={{
        position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 400, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(232,93,31,0.08), transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Roadmap</div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            O FUTURO DO SEU<br />
            <span className="accent">CONSULTÓRIO</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            A cada trimestre, novas camadas de inteligência são liberadas para os consultórios que estão na plataforma.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: 28,
            left: '12.5%', right: '12.5%',
            height: 2,
            background: 'linear-gradient(90deg, var(--orange), rgba(232,93,31,0.2) 40%, rgba(20,39,63,0.1))',
            zIndex: 0,
          }} className="roadmap-line" />

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20, position: 'relative', zIndex: 1,
          }} className="roadmap-grid">
            {PHASES.map((p, i) => <PhaseCard key={i} {...p} delay={i * 0.1} />)}
          </div>
        </div>

        <p style={{
          textAlign: 'center', marginTop: 48,
          fontFamily: 'var(--font-body)', fontWeight: 400,
          fontSize: 14, color: 'var(--navy-mute)',
        }}>
          Quem reservar agora{' '}
          <strong style={{ color: 'var(--orange)', fontWeight: 600 }}>
            participa ativamente da evolução do produto
          </strong>{' '}
          e mantém o preço de 10% para sempre.
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
  num: string; period: string; title: string; tag: string;
  active: boolean; items: string[]; delay: number
}

function PhaseCard({ num, period, title, tag, active, items, delay }: PhaseProps) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 14,
      animation: `fadeUp 0.7s ${delay}s ease both`,
      animationFillMode: 'both',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 56, height: 56, borderRadius: '50%',
          background: active ? 'var(--orange)' : 'var(--cream)',
          border: active ? 'none' : '2px solid var(--beige-edge)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontSize: 22,
          color: active ? 'var(--cream)' : 'var(--navy-mute)',
          letterSpacing: '0.04em',
          boxShadow: active ? 'var(--shadow-orange)' : 'var(--shadow-sm)',
          flexShrink: 0,
          animation: active ? 'glowPulse 3s ease-in-out infinite' : 'none',
        }}>{num}</div>
      </div>

      <div style={{
        flex: 1,
        padding: '22px 20px',
        background: active ? 'var(--cream)' : 'rgba(255,255,255,0.6)',
        border: active ? '1.5px solid var(--orange-line)' : '1px solid var(--beige-edge)',
        borderRadius: 'var(--radius)',
        display: 'flex', flexDirection: 'column', gap: 12,
        boxShadow: active ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        opacity: active ? 1 : 0.8,
        transition: 'all 0.3s ease',
      }}>
        <span style={{
          alignSelf: 'flex-start',
          padding: '3px 10px', borderRadius: 100,
          background: active ? 'var(--orange)' : 'var(--beige-edge)',
          color: active ? 'var(--cream)' : 'var(--navy-mute)',
          fontFamily: 'var(--font-heading)', fontWeight: 700,
          fontSize: 10, letterSpacing: '0.18em',
          textTransform: 'uppercase',
        }}>{tag}</span>

        <span style={{
          fontFamily: 'var(--font-heading)', fontWeight: 700,
          fontSize: 11.5, letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: active ? 'var(--orange)' : 'var(--navy-mute)',
        }}>{period}</span>

        <h3 style={{
          fontFamily: 'var(--font-heading)', fontWeight: 700,
          fontSize: 'clamp(17px, 2vw, 21px)',
          color: active ? 'var(--navy)' : 'var(--navy-soft)',
          lineHeight: 1.2,
        }}>{title}</h3>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7, marginTop: 4 }}>
          {items.map(item => (
            <li key={item} style={{
              display: 'flex', alignItems: 'flex-start', gap: 8,
              fontFamily: 'var(--font-body)', fontWeight: 400,
              fontSize: 13, color: 'var(--navy-mid)', lineHeight: 1.5,
            }}>
              <span style={{
                color: active ? 'var(--orange)' : 'var(--navy-mute)',
                fontSize: 11, marginTop: 4, flexShrink: 0,
              }}>▸</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
