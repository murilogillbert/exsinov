const STATS = [
  { value: '60%',    label: 'menos faltas com lembretes automáticos via WhatsApp' },
  { value: '99%',    label: 'de uptime garantido na plataforma'                   },
  { value: '240min', label: 'de implantação do AIO no consultório'                },
  { value: '60min',  label: 'de configuração das suas informações no AIO'         },
]

export default function Stats() {
  return (
    <section style={{
      padding:    '64px 0',
      background: 'var(--cream)',
      borderTop:    '1px solid var(--beige-edge)',
      borderBottom: '1px solid var(--beige-edge)',
    }}>
      <div className="container">
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap:                 0,
        }} className="stats-grid">
          {STATS.map((s, i) => (
            <div key={i} style={{
              padding:     '14px 28px',
              borderRight: i < STATS.length - 1 ? '1px solid var(--beige-edge)' : 'none',
              display:     'flex',
              flexDirection: 'column',
              gap:         8,
            }}>
              <span style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(36px, 4vw, 54px)',
                lineHeight:    1,
                color:         'var(--orange)',
                letterSpacing: '0.02em',
              }}>{s.value}</span>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize:   13,
                color:      'var(--navy-mid)',
                lineHeight: 1.5,
              }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; gap: 24px !important; }
          .stats-grid > div { border-right: none !important; border-bottom: 1px solid var(--beige-edge); }
        }
        @media (max-width: 520px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
