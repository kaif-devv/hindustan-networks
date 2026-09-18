import { useMotionPreferences } from "@/lib/MotionPreferences";

const heroNodes = [[620, 95], [800, 70], [1010, 110], [1200, 45], [720, 230], [925, 250], [1140, 250], [1320, 180], [615, 425], [850, 410], [1090, 450], [1280, 430], [710, 590], [970, 610], [1200, 610]];
const heroPaths = [
  "M620 95H800L925 250H1140L1200 45", "M1010 110L1140 250L1320 180",
  "M620 95L720 230L615 425L710 590H970L1090 450H1280",
  "M720 230L925 250L850 410L970 610H1200L1280 430L1140 250",
  "M615 425L850 410L1090 450L1140 250", "M800 70L1010 110L925 250",
];

// SVG signals are shared by page headers and the existing About/Clients diagrams.
export function SignalPath({ path, delay = 0, duration = 3, cycle = 12, className = "" }: {
  path: string; delay?: number; duration?: number; cycle?: number; className?: string;
}) {
  const { reduced, compact } = useMotionPreferences();
  if (reduced || (compact && delay > 0)) return null;
  return (
    <g className={`network-signal ${className}`} aria-hidden="true">
      <path d={path} className="network-signal-line" style={{ animationDelay: `${delay}s`, animationDuration: `${cycle}s` }} />
      <circle r="2.5" fill="#ed932f" opacity="0">
        <animateMotion path={path} dur={`${cycle}s`} begin={`${delay}s`} repeatCount="indefinite" keyPoints="0;1;1" keyTimes={`0;${duration / cycle};1`} calcMode="linear" />
        <animate attributeName="opacity" values="0;1;1;0;0" keyTimes={`0;.015;${(duration - 0.15) / cycle};${duration / cycle};1`} dur={`${cycle}s`} begin={`${delay}s`} repeatCount="indefinite" />
      </circle>
    </g>
  );
}

export function NetworkAmbientBackground({ variant = "header" }: { variant?: "hero" | "header" | "calm" }) {
  const { reduced: reduceMotion, compact } = useMotionPreferences();
  if (variant === "hero") {
    // Desktop geometry, classes and timing are identical to approved Concept A.
    return (
      <svg className="vl-topology" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {heroPaths.map((path, index) => compact && index > 2 ? null : <g key={path}>
          <path d={path} className="vl-network-line" />
          {!reduceMotion && (!compact || index === 0) && <circle r="3.5" className="vl-packet"><animateMotion path={path} dur={`${7 + index * 0.7}s`} begin={`${-index * 1.8}s`} repeatCount="indefinite" /></circle>}
        </g>)}
        {heroNodes.map(([cx, cy], index) => compact && index % 2 ? null : <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="11" className="vl-node-halo" style={{ animationDelay: `${-index * 0.43}s`, transformOrigin: `${cx}px ${cy}px` }} />
          <circle cx={cx} cy={cy} r="3.5" className="vl-node" />
        </g>)}
      </svg>
    );
  }
  const path = "M10 160H145L225 70H365L430 125H565L650 45H850";
  return (
    <div className={`network-ambient network-ambient-${variant}`} aria-hidden="true">
      <div className="network-grid" />
      <svg viewBox="0 0 900 220" preserveAspectRatio="xMidYMid slice">
        <path d={path} className="network-header-path" />
        {!compact && <path d="M120 30L225 70L330 180H565L650 45" className="network-header-path" />}
        {[[145,160],[225,70],[365,70],[430,125],[565,125],[650,45],[850,45]].filter((_, i) => !compact || i % 2 === 0).map(([cx,cy]) => <circle key={cx} cx={cx} cy={cy} r="3" className="network-header-node" />)}
        {variant !== "calm" && <SignalPath path={path} cycle={16} duration={3.5} />}
      </svg>
    </div>
  );
}
