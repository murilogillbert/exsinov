const STATS = [
  { value: '60%',   label: 'Redução de faltas com lembretes automáticos' },
  { value: '99%',   label: 'de uptime garantido na plataforma'           },
  { value: '5 min', label: 'Para configurar e começar a usar'            },
  { value: '1',     label: 'Plataforma para tudo que seu negócio precisa' },
]

export default function Stats() {
  return (
    <section style={{
      background:  'var(--navy-mid)',
      borderTop:   'var(--border-subtle)',
      borderBottom:'var(--border-subtle)',
      padding:     '48px 0',
    }}>
      <div className="container">
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap:                 '1px',
        }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              padding:    '28px 32px',
              borderRight: i < STATS.length - 1 ? 'var(--border-subtle)' : 'none',
              display:    'flex',
              flexDirection: 'column',
              gap:         8,
            }}>
              <span style={{
                fontFamily:  'var(--font-display)',
                fontSize:    'clamp(36px, 4vw, 54px)',
                lineHeight:  1,
                color:       'var(--orange)',
                letterSpacing: '0.02em',
                animation:   'glowPulse 4s ease-in-out infinite',
                animationDelay: `${i * 0.5}s`,
              }}>{s.value}</span>
              <span style={{
                fontFamily:  'var(--font-body)',
                fontWeight:  300,
                fontSize:    13,
                color:       'var(--gray)',
                lineHeight:  1.5,
              }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 520px) {
          #stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
