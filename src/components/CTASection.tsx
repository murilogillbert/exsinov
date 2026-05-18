const WA_LINK = 'https://wa.me/5565993504640?text=Ol%C3%A1!%20Quero%20conhecer%20o%20AIO%20All%20In%20One%20by%20Exsinov%20para%20o%20meu%20consult%C3%B3rio.'

const PLANS = [
  {
    title: 'Performance',
    price: '10%',
    suffix: 'do lucro líquido',
    desc: 'A cobrança acompanha o resultado real da clínica. Ideal para consultórios que querem crescer com tecnologia e manter o custo alinhado ao lucro.',
    items: ['Software completo', 'Implantação', 'Suporte', 'Acompanhamento financeiro'],
  },
  {
    title: 'Mensalidade fixa',
    price: 'R$ 1000',
    suffix: 'por mês',
    desc: 'Valor fixo mensal para usar o AIO completo com suporte incluso. Ideal para quem prefere previsibilidade de custo.',
    items: ['Todos os módulos', 'Suporte da equipe', 'Custo previsível', 'Sem variação por resultado'],
  },
]

export default function CTASection() {
  return (
    <section id="cta" style={{
      padding:    'clamp(80px, 10vw, 130px) 0',
      background: 'var(--navy)',
      position:   'relative',
      overflow:   'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 70% 60% at 50% 110%, rgba(232,93,31,0.28), transparent 65%),
          radial-gradient(ellipse 60% 50% at 0% 0%, rgba(232,93,31,0.08), transparent 60%)
        `,
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{
        position: 'relative', zIndex: 1,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28,
      }}>
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
          Modalidades comerciais
        </div>

        <h2 style={{
          fontFamily:    'var(--font-display)',
          fontSize:      'clamp(44px, 7vw, 88px)',
          lineHeight:    0.95,
          letterSpacing: '0.005em',
          color:         'var(--cream)',
          textAlign:     'center',
        }}>
          LEVE O <span style={{ color: 'var(--orange)' }}>AIO</span><br />
          PARA O SEU CONSULTÓRIO
        </h2>

        <p style={{
          fontFamily: 'var(--font-body)', fontWeight: 400,
          fontSize: 'clamp(15px, 2vw, 18px)',
          color: 'rgba(255,255,255,0.78)',
          maxWidth: 680, lineHeight: 1.7,
          textAlign: 'center',
        }}>
          Escolha entre performance sobre lucro líquido ou mensalidade fixa.
          Nas duas modalidades, a Exsinov implanta a plataforma, acompanha sua equipe
          e entrega o software completo com suporte incluso.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: 22,
          width: '100%',
          marginTop: 10,
        }} className="plans-grid">
          {PLANS.map(plan => (
            <div key={plan.title} style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(232,93,31,0.30)',
              borderRadius: 'var(--radius)',
              padding: '30px 28px',
              color: 'var(--cream)',
              boxShadow: '0 24px 70px rgba(0,0,0,0.18)',
            }}>
              <span style={{
                display: 'inline-flex',
                padding: '5px 12px',
                borderRadius: 100,
                background: 'rgba(232,93,31,0.18)',
                color: 'var(--orange)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}>{plan.title}</span>

              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 10,
                marginTop: 18,
                marginBottom: 12,
              }}>
                <strong style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(48px, 6vw, 76px)',
                  lineHeight: 1,
                  fontWeight: 400,
                  color: 'var(--cream)',
                }}>{plan.price}</strong>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 18,
                  color: 'rgba(255,255,255,0.62)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}>{plan.suffix}</span>
              </div>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14.5,
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.72)',
                minHeight: 92,
              }}>{plan.desc}</p>

              <ul style={{
                listStyle: 'none',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: 10,
                marginTop: 20,
              }}>
                {plan.items.map(item => (
                  <li key={item} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.72)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}>
                    <span style={{ color: 'var(--orange)' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
           className="btn-primary"
           style={{ fontSize: 16, padding: '20px 48px', marginTop: 10, gap: 12 }}>
          <WhatsAppIcon />
          Reservar apresentação do AIO
        </a>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 13,
          color: 'rgba(255,255,255,0.45)',
          fontWeight: 400,
          textAlign: 'center',
        }}>
          Contatos comerciais: WhatsApp (65) 99350-4640 · murilotaquesgillbert@exsinov.com.br
        </p>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .plans-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
