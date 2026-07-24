/**
 * AuroraBackground — full-viewport animated aurora shader using CSS.
 * Performant: pure CSS animations, no WebGL, no canvas.
 */
export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="aurora-bg fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Base dark background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      {/* Aurora orbs */}
      <div className="aurora-orb aurora-orb-1" />
      <div className="aurora-orb aurora-orb-2" />
      <div className="aurora-orb aurora-orb-3" />
      <div className="aurora-orb aurora-orb-4" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")` }} />

      {/* Vignette */}
      <div
        className="absolute inset-0 opacity-70"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, #0a0a0f 100%)' }}
      />
    </div>
  );
}
