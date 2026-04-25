import { useState, useEffect } from 'react'

// 1 de maio de 2026 às 20h UTC-4 = 2 de maio 00:00 UTC
const TARGET = new Date('2026-05-02T00:00:00Z')

const WA_LINK =
  'https://wa.me/5565996042431?text=Ol%C3%A1!%20Quero%20fazer%20minha%20reserva%20na%20Exsinov.'

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

const CORNERS = [
  { top: 0,    left:  0, borderWidth: '2px 0 0 2px' },
  { top: 0,    right: 0, borderWidth: '2px 2px 0 0' },
  { bottom: 0, left:  0, borderWidth: '0 0 2px 2px' },
  { bottom: 0, right: 0, borderWidth: '0 2px 2px 0' },
] as const

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
      padding:    'clamp(80px, 10vw, 120px) 0',
      background: 'var(--navy-mid)',
      borderTop:  'var(--border-subtle)',
      position:   'relative',
      overflow:   'hidden',
    }}>
      {/* background grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,107,26,0.055) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,107,26,0.055) 1px, transparent 1px)
        `,
        backgroundSize: '54px 54px',
        animation: 'gridShift 22s linear infinite',
        pointerEvents: 'none',
      }} />

      {/* radial glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 60% at 50% 110%, rgba(255,107,26,0.22), transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* scanline */}
      <div style={{
        position: 'absolute', left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, transparent, var(--orange), transparent)',
        animation: 'scan 6s linear infinite',
        opacity: 0.35,
        pointerEvents: 'none',
      }} />

      {/* corner marks */}
      {CORNERS.map((c, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: 28, height: 28,
          borderColor: 'var(--orange)',
          borderStyle: 'solid',
          opacity: 0.4,
          margin: 32,
          ...c,
        }} />
      ))}

      <div className="container" style={{
        position:      'relative', zIndex: 1,
        textAlign:     'center',
        display:       'flex',
        flexDirection: 'column',
        alignItems:    'center',
        gap:           28,
      }}>
        {/* eyebrow */}
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
          Vagas Limitadas
        </div>

        {/* headline */}
        <h2 style={{
          fontFamily:    'var(--font-display)',
          fontSize:      'clamp(44px, 7vw, 88px)',
          lineHeight:    0.92,
          letterSpacing: '0.01em',
          color:         'var(--beige)',
          animation:     'glowPulse 4s ease-in-out infinite',
        }}>
          PREPARE-SE PARA<br />
          <span style={{ color: 'var(--orange)' }}>UMA NOVA ERA</span>
        </h2>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 300,
          fontSize:   'clamp(15px, 2vw, 19px)',
          color:      'var(--gray)',
          maxWidth:   540,
          lineHeight: 1.75,
        }}>
          Sem mensalidade fixa. Você paga{' '}
          <strong style={{ color: 'var(--beige)', fontWeight: 500 }}>
            apenas 10–15% do faturamento
          </strong>{' '}
          gerado pela plataforma, conforme o plano.
          Sem cartão de crédito, sem boleto, sem burocracia.
        </p>

        {/* ── REAL COUNTDOWN ── */}
        <div style={{
          display:      'flex',
          gap:          0,
          marginTop:    12,
          border:       'var(--border-subtle)',
          borderRadius: 10,
          overflow:     'hidden',
          background:   'rgba(255,107,26,0.05)',
          animation:    'countPulse 3s ease-in-out infinite',
        }}>
          {units.map((item, i) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                padding:     'clamp(14px,2vw,20px) clamp(18px,3vw,32px)',
                textAlign:   'center',
                borderRight: i < units.length - 1 ? '1px solid rgba(255,107,26,0.15)' : 'none',
                minWidth:    'clamp(64px, 9vw, 96px)',
              }}>
                <div style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      'clamp(32px, 5vw, 60px)',
                  lineHeight:    1,
                  color:         'var(--orange)',
                  letterSpacing: '0.04em',
                  textShadow:    '0 0 30px rgba(255,107,26,0.5)',
                  transition:    'all 0.3s ease',
                }}>{item.val}</div>
                <div style={{
                  fontFamily:    'var(--font-heading)',
                  fontWeight:    600,
                  fontSize:      10,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color:         'var(--gray)',
                  marginTop:     4,
                }}>{item.label}</div>
              </div>
              {i < units.length - 1 && (
                <div style={{
                  fontFamily:   'var(--font-display)',
                  fontSize:     36,
                  color:        'rgba(255,107,26,0.2)',
                  padding:      '0 2px',
                  marginBottom: 16,
                }}>:</div>
              )}
            </div>
          ))}
        </div>

        {/* ── WHATSAPP CTA ── */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ fontSize: 16, padding: '20px 48px', marginTop: 8, gap: 12 }}
        >
          <WhatsAppIcon />
          Faça sua reserva no WhatsApp
        </a>

        {/* trust badges */}
        <div style={{
          display:        'flex',
          gap:            28,
          marginTop:      4,
          flexWrap:       'wrap',
          justifyContent: 'center',
        }}>
          {[
            'Sem cartão de crédito',
            'Sem mensalidade fixa',
            '10–15% do faturamento',
          ].map(t => (
            <span key={t} style={{
              fontFamily:    'var(--font-heading)',
              fontWeight:    600,
              fontSize:      12,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color:         'var(--gray)',
              display:       'flex',
              alignItems:    'center',
              gap:           7,
            }}>
              <span style={{ color: 'var(--orange)', fontSize: 15 }}>✓</span>
              {t}
            </span>
          ))}
        </div>

        {/* deadline note */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize:   13,
          color:      'var(--gray)',
          opacity:    0.6,
          fontWeight: 300,
        }}>
          Reservas encerram em <strong style={{ color: 'var(--orange)', fontWeight: 500, opacity: 1 }}>
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
