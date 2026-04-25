import { useState, useEffect } from 'react'

const TARGET = new Date('2026-05-02T00:00:00Z') // 1º maio 20h UTC-4
const WA_LINK = 'https://wa.me/5565996042431?text=Ol%C3%A1!%20Quero%20reservar%20a%20plataforma%20Exsinov%20para%20o%20meu%20consult%C3%B3rio.'

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number }

function useCountdown(target: Date): TimeLeft {
  const calc = (): TimeLeft => {
    const diff = target.getTime() - Date.now()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days:    Math.floor(diff / 86_400_000),
      hours:   Math.floor((diff / 3_600_000) % 24),
      minutes: Math.floor((diff / 60_000) % 60),
      seconds: Math.floor((diff / 1_000) % 60),
    }
  }
  const [time, setTime] = useState<TimeLeft>(calc)
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

const pad = (n: number) => String(n).padStart(2, '0')

export default function CTASection() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET)
  const units = [
    { val: pad(days),    label: 'dias'     },
    { val: pad(hours),   label: 'horas'    },
    { val: pad(minutes), label: 'minutos'  },
    { val: pad(seconds), label: 'segundos' },
  ]

  return (
    <section id="cta" style={{
      padding:    'clamp(80px, 10vw, 130px) 0',
      background: 'var(--navy)',
      position:   'relative',
      overflow:   'hidden',
    }}>
      {/* warm orange radial glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 70% 60% at 50% 110%, rgba(232,93,31,0.28), transparent 65%),
          radial-gradient(ellipse 60% 50% at 0% 0%, rgba(232,93,31,0.08), transparent 60%)
        `,
        pointerEvents: 'none',
      }} />

      {/* dotted overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{
        position: 'relative', zIndex: 1, textAlign: 'center',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26,
      }}>
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
          Vagas limitadas
        </div>

        <h2 style={{
          fontFamily:    'var(--font-display)',
          fontSize:      'clamp(44px, 7vw, 88px)',
          lineHeight:    0.95,
          letterSpacing: '0.005em',
          color:         'var(--cream)',
        }}>
          RESERVE O <span style={{ color: 'var(--orange)' }}>AIO</span><br />
          DO SEU CONSULTÓRIO
        </h2>
        <span style={{
          fontFamily:    'var(--font-heading)',
          fontWeight:    600,
          fontSize:      11,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color:         'rgba(255,255,255,0.45)',
          marginTop:     -16,
        }}>All In One · by Exsinov</span>

        <p style={{
          fontFamily: 'var(--font-body)', fontWeight: 400,
          fontSize: 'clamp(15px, 2vw, 18px)',
          color: 'rgba(255,255,255,0.78)',
          maxWidth: 580, lineHeight: 1.7,
        }}>
          Quem reservar o AIO até{' '}
          <strong style={{ color: 'var(--orange)', fontWeight: 600 }}>1º de maio</strong>{' '}
          paga apenas{' '}
          <strong style={{ color: 'var(--cream)', fontWeight: 600 }}>10% do faturamento</strong>{' '}
          gerado pela plataforma — para sempre. Após o prazo, o valor sobe para 15%.
          Sem mensalidade, sem cartão, sem boleto.
        </p>

        {/* COUNTDOWN */}
        <div style={{
          display: 'flex', gap: 0, marginTop: 8,
          border: '1px solid rgba(232,93,31,0.35)',
          borderRadius: 12, overflow: 'hidden',
          background: 'rgba(0,0,0,0.25)',
          backdropFilter: 'blur(8px)',
        }}>
          {units.map((item, i) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                padding: 'clamp(14px,2vw,20px) clamp(18px,3vw,32px)',
                textAlign: 'center',
                borderRight: i < units.length - 1 ? '1px solid rgba(232,93,31,0.2)' : 'none',
                minWidth: 'clamp(64px, 9vw, 96px)',
              }}>
                <div style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      'clamp(32px, 5vw, 60px)',
                  lineHeight:    1,
                  color:         'var(--orange)',
                  letterSpacing: '0.04em',
                  textShadow:    '0 0 30px rgba(232,93,31,0.55)',
                }}>{item.val}</div>
                <div style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 600,
                  fontSize: 10, letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)',
                  marginTop: 4,
                }}>{item.label}</div>
              </div>
            </div>
          ))}
        </div>

        <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
           className="btn-primary"
           style={{ fontSize: 16, padding: '20px 48px', marginTop: 8, gap: 12 }}>
          <WhatsAppIcon />
          Reservar meu Consultório
        </a>

        <div style={{
          display: 'flex', gap: 28, marginTop: 4, flexWrap: 'wrap', justifyContent: 'center',
        }}>
          {['Sem mensalidade fixa', '10% até 01/05 · 15% após', 'Sem cartão ou boleto'].map(t => (
            <span key={t} style={{
              fontFamily: 'var(--font-heading)', fontWeight: 600,
              fontSize: 12, letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.65)',
              display: 'flex', alignItems: 'center', gap: 7,
            }}>
              <span style={{ color: 'var(--orange)', fontSize: 15 }}>✓</span>
              {t}
            </span>
          ))}
        </div>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 13,
          color: 'rgba(255,255,255,0.45)', fontWeight: 400, marginTop: 4,
        }}>
          Reservas encerram em{' '}
          <strong style={{ color: 'var(--orange)', fontWeight: 500 }}>
            1º de maio às 20h
          </strong>
        </p>
      </div>
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
