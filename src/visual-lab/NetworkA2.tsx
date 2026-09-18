import { useId } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";

const nodes = [
  { x: 562, y: 88, r: 2.5 }, { x: 731, y: 44, r: 4 },
  { x: 943, y: 70, r: 3 }, { x: 1140, y: 45, r: 2.5 },
  { x: 1310, y: 145, r: 6 }, { x: 1390, y: 359, r: 3 },
  { x: 1250, y: 587, r: 5 }, { x: 1010, y: 638, r: 2.5 },
  { x: 740, y: 591, r: 4 }, { x: 610, y: 438, r: 3 },
  { x: 674, y: 256, r: 6 }, { x: 886, y: 200, r: 2.5 },
  { x: 1160, y: 294, r: 3 }, { x: 1290, y: 398, r: 2.5 },
];

const routes = [
  "M562 88 C630 90 657 44 731 44 S870 51 943 70",
  "M731 44 C674 86 624 178 674 256",
  "M943 70 C1078 114 1214 33 1310 145",
  "M1140 45 C1206 44 1280 60 1310 145",
  "M1310 145 C1400 188 1424 280 1390 359",
  "M1390 359 C1377 441 1302 466 1250 587",
  "M1250 587 C1175 655 1100 621 1010 638 S848 671 740 591",
  "M740 591 C660 564 600 517 610 438 S694 334 674 256",
  "M674 256 C728 242 811 172 886 200 S1079 236 1160 294",
  "M1160 294 C1228 316 1256 358 1290 398 S1288 515 1250 587",
  "M886 200 C938 161 936 124 943 70",
  "M1160 294 C1180 207 1230 179 1310 145",
  "M1310 145 C1280 60 1206 44 1140 45",
];

// A sparse 24-second schedule: only the split has two simultaneous packets.
// Durations include idle time so every effect shares the same cycle without JS timers.
export const a2PacketSchedule = [
  { route: 0, start: 1.1, travel: 3.1 },
  { route: 4, start: 5.2, travel: 3.4 },
  { route: 7, start: 9.4, travel: 2.8 },
  { route: 2, start: 13, travel: 2.8 },
  { route: 12, start: 15.8, travel: 2.6 },
  { route: 4, start: 15.8, travel: 3.2 },
];

function Packet({ route, start, travel, gradientId }: (typeof a2PacketSchedule)[number] & { gradientId: string }) {
  const cycle = 24;
  return (
    <g opacity="0" className="a2-packet">
      <animateMotion path={routes[route]} rotate="auto" dur={`${cycle}s`} begin={`${start}s`} repeatCount="indefinite"
        calcMode="spline" keyPoints="0;1;1" keyTimes={`0;${travel / cycle};1`} keySplines=".35 0 .25 1;0 0 1 1" />
      <animate attributeName="opacity" values="0;1;1;0;0" keyTimes={`0;${0.15 / cycle};${(travel - 0.2) / cycle};${travel / cycle};1`} dur={`${cycle}s`} begin={`${start}s`} repeatCount="indefinite" />
      <g>
        <path d="M-12 0H0" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
        <circle r="7" fill="#f6a042" opacity=".12" />
        <circle r="4" fill="#f6a042" opacity=".28" />
        <circle r="2.1" fill="#fff4d5" stroke="#e99337" strokeWidth=".8" />
      </g>
    </g>
  );
}

export function NetworkA2({ x, y, reduced }: { x: MotionValue<number>; y: MotionValue<number>; reduced: boolean }) {
  const id = useId().replace(/:/g, "");
  const backX = useTransform(x, (value) => value * 0.3);
  const backY = useTransform(y, (value) => value * 0.3);
  const middleX = useTransform(x, (value) => value * 0.65);
  const middleY = useTransform(y, (value) => value * 0.65);
  const fadeIn = { initial: reduced ? false as const : { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: reduced ? 0 : 1.1 } };

  return (
    <motion.div className="a2-network" aria-hidden="true" {...fadeIn}>
      <motion.div className="a2-network-layer a2-layer-back" style={{ x: backX, y: backY }}>
        <div className="a2-grid" />
        <svg viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" className="a2-far-drift">
          <g className="a2-far-topology" transform="translate(90 -45) scale(.91)">
            {routes.slice(0, -1).map((path) => <path key={path} d={path} />)}
            {nodes.map(({ x: cx, y: cy }, index) => <rect key={index} x={cx - 2} y={cy - 2} width="4" height="4" />)}
          </g>
          <path className="a2-survey-line" d="M520 655H1380 M1380 40V655 M520 649V661 M735 652V658 M950 652V658 M1165 652V658" />
        </svg>
      </motion.div>
      <motion.div className="a2-network-layer a2-layer-middle" style={{ x: middleX, y: middleY }}>
        <svg viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" className="a2-middle-drift">
          <defs><linearGradient id={`${id}-tail`}><stop stopColor="#ed8a2a" stopOpacity="0" /><stop offset="1" stopColor="#f7ac5a" stopOpacity=".9" /></linearGradient></defs>
          {routes.slice(0, -1).map((path, index) => <path key={path} d={path} className={`a2-connection${index === 8 || index === 11 ? " a2-connection-secondary" : ""}`} />)}
          {!reduced && a2PacketSchedule.map(({ route, start, travel }, index) => <g key={index}>
            <path d={routes[route]} className="a2-route-activation" style={{ animationDelay: `${start}s` }} />
            <Packet route={route} start={start} travel={travel} gradientId={`${id}-tail`} />
          </g>)}
          <g className="a2-node-entrance">
            {nodes.map(({ x: cx, y: cy, r }, index) => <g key={index}>
              {r >= 4 && <circle cx={cx} cy={cy} r={r + 6} className="a2-node-ring" />}
              {r === 6 && <circle cx={cx} cy={cy} r={r + 12} className="a2-node-ring a2-node-ring-outer" />}
              <circle cx={cx} cy={cy} r={r} className={r >= 5 ? "a2-node a2-node-hub" : "a2-node"} />
              {r >= 5 && <circle cx={cx} cy={cy} r="1.8" fill="#fff7e3" />}
            </g>)}
          </g>
          {[{ index: 10, delay: 1.3, duration: 8.6 }, { index: 6, delay: 4.8, duration: 7.8 }, { index: 8, delay: 7.1, duration: 6.9 }].map(({ index, delay, duration }) => (
            <circle key={index} cx={nodes[index].x} cy={nodes[index].y} r="10" className="a2-node-pulse"
              style={{ transformOrigin: `${nodes[index].x}px ${nodes[index].y}px`, animationDelay: `${delay}s`, animationDuration: `${duration}s` }} />
          ))}
          <circle cx="1310" cy="145" r="11" className="a2-node-pulse a2-split-pulse" style={{ transformOrigin: "1310px 145px" }} />
          <g className="a2-network-labels"><text x="700" y="31">UPLINK</text><text x="1330" y="135">NODE 04</text><text x="1269" y="593">SECURE</text></g>
        </svg>
      </motion.div>
      <motion.div className="a2-network-layer a2-layer-front" style={{ x, y }}>
        <svg viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice">
          <path className="a2-foreground-route" d="M520 547 C580 574 583 626 637 628 H837" />
          <path className="a2-foreground-establish" d="M520 547 C580 574 583 626 637 628 H837" pathLength="100" />
          <circle cx="520" cy="547" r="3" className="a2-node" /><circle cx="837" cy="628" r="4" className="a2-node" />
          <g className="a2-network-labels"><text x="850" y="632">SYNC</text></g>
          <circle cx="837" cy="628" r="8" className="a2-node-pulse a2-sync-pulse" style={{ transformOrigin: "837px 628px" }} />
        </svg>
      </motion.div>
    </motion.div>
  );
}
