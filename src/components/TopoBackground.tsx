export function TopoBackground() {
  // Procedurally generate ~36 wavy contour lines so each has its own shape.
  // Sine/cosine phase offsets give the organic, non-tiling topo-map feel.
  const lines = Array.from({ length: 38 }, (_, i) => {
    const y = -60 + i * 34
    const a = Math.sin(i * 0.92) * 30
    const b = Math.cos(i * 0.7 + 1.1) * 26
    const c = Math.sin(i * 0.45 + 2.3) * 34
    const d = Math.cos(i * 1.13 + 0.6) * 22
    return `M -120 ${y + a} C 320 ${y - b} 620 ${y + c} 980 ${y - a * 0.8} S 1480 ${y + d} 1860 ${y - c * 0.7} S 2200 ${y + b * 0.5} 2400 ${y + a * 0.4}`
  })

  // A few closed contour "rings" — elevation peaks.
  const peaks = [
    'M 340 360 q 70 -90 180 -50 t 120 130 q -50 110 -170 70 t -130 -150 z',
    'M 380 395 q 55 -60 145 -25 t 80 100 q -35 80 -135 50 t -90 -125 z',
    'M 420 430 q 40 -35 110 -10 t 55 75 q -25 55 -100 30 t -65 -95 z',
    'M 1480 740 q 90 -70 200 -25 t 95 150 q -55 115 -200 60 t -95 -185 z',
    'M 1525 775 q 65 -45 160 -15 t 65 115 q -40 80 -160 35 t -65 -135 z',
    'M 1570 810 q 45 -25 115 -5 t 40 80 q -30 55 -115 20 t -40 -95 z',
  ]

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* base radial wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(90% 70% at 55% 25%, #1A1F26 0%, #11151B 55%, #0B0D11 100%)',
        }}
      />

      {/* topo SVG */}
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 2000 1200"
      >
        <defs>
          <linearGradient id="topoStroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#DE9B35" stopOpacity="0.10" />
            <stop offset="45%"  stopColor="#DE9B35" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#8A6224" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        <g
          fill="none"
          stroke="url(#topoStroke)"
          strokeWidth="1"
          strokeLinecap="round"
        >
          {lines.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>

        <g
          fill="none"
          stroke="#DE9B35"
          strokeOpacity="0.16"
          strokeWidth="1"
        >
          {peaks.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
      </svg>

      {/* warm spotlight + bottom shadow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(40% 30% at 78% 18%, rgba(222,155,53,0.10), transparent 70%), linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      {/* grain */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            'radial-gradient(rgba(232,224,206,0.65) 1px, transparent 1px)',
          backgroundSize: '3px 3px',
        }}
      />
    </div>
  )
}
