/** Faint SVG decorative elements for mathematical atmosphere */

export const NeuralNetworkWatermark = () => (
  <svg
    className="math-watermark"
    width="320"
    height="280"
    viewBox="0 0 320 280"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.8"
  >
    {/* Input layer */}
    {[60, 110, 160, 210].map((y) => (
      <circle key={`i${y}`} cx="40" cy={y} r="8" />
    ))}
    {/* Hidden layer 1 */}
    {[40, 90, 140, 190, 240].map((y) => (
      <circle key={`h1${y}`} cx="140" cy={y} r="8" />
    ))}
    {/* Hidden layer 2 */}
    {[70, 130, 190].map((y) => (
      <circle key={`h2${y}`} cx="230" cy={y} r="8" />
    ))}
    {/* Output */}
    <circle cx="300" cy="130" r="8" />
    {/* Edges input→h1 */}
    {[60, 110, 160, 210].map((iy) =>
      [40, 90, 140, 190, 240].map((hy) => (
        <line key={`e1-${iy}-${hy}`} x1="48" y1={iy} x2="132" y2={hy} />
      ))
    )}
    {/* Edges h1→h2 */}
    {[40, 90, 140, 190, 240].map((hy) =>
      [70, 130, 190].map((h2y) => (
        <line key={`e2-${hy}-${h2y}`} x1="148" y1={hy} x2="222" y2={h2y} />
      ))
    )}
    {/* Edges h2→output */}
    {[70, 130, 190].map((h2y) => (
      <line key={`e3-${h2y}`} x1="238" y1={h2y} x2="292" y2={130} />
    ))}
  </svg>
);

export const CoordinateGrid = () => (
  <svg
    className="math-watermark"
    width="240"
    height="240"
    viewBox="0 0 240 240"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
  >
    {/* Grid lines */}
    {Array.from({ length: 9 }, (_, i) => (
      <g key={i}>
        <line x1={i * 30} y1="0" x2={i * 30} y2="240" />
        <line x1="0" y1={i * 30} x2="240" y2={i * 30} />
      </g>
    ))}
    {/* Axes */}
    <line x1="120" y1="0" x2="120" y2="240" strokeWidth="1" />
    <line x1="0" y1="120" x2="240" y2="120" strokeWidth="1" />
    {/* Arrow tips */}
    <polygon points="120,4 116,14 124,14" fill="currentColor" />
    <polygon points="236,120 226,116 226,124" fill="currentColor" />
  </svg>
);

export const MathSymbols = () => (
  <div className="math-watermark font-mono text-foreground" style={{ fontSize: '18px', lineHeight: '2.4' }}>
    <div>∇ · F = ∂P/∂x + ∂Q/∂y</div>
    <div>∀ε {'>'} 0, ∃δ {'>'} 0</div>
    <div>f: ℝⁿ → ℝᵐ</div>
    <div>∑ᵢ₌₁ⁿ αᵢφᵢ(x)</div>
  </div>
);

export const SigmoidCurve = () => (
  <svg
    className="math-watermark"
    width="200"
    height="120"
    viewBox="0 0 200 120"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.8"
  >
    {/* Axes */}
    <line x1="20" y1="100" x2="180" y2="100" />
    <line x1="20" y1="10" x2="20" y2="100" />
    {/* Sigmoid */}
    <path
      d="M 20 95 C 50 95, 70 90, 85 75 C 100 55, 110 40, 120 30 C 135 18, 155 14, 180 12"
      strokeWidth="1.2"
    />
    {/* Labels */}
    <text x="90" y="115" fontSize="8" fill="currentColor" fontFamily="JetBrains Mono">σ(x)</text>
  </svg>
);
