import Image from "next/image";

const ROADS = [
  { id: "r1", d: "M260,205 C400,260 500,340 560,460 C610,560 620,620 620,650", duration: "6s", delay: "0s" },
  { id: "r2", d: "M560,460 C610,400 650,340 700,260 C740,200 760,150 730,90", duration: "6s", delay: "2s" },
  { id: "r3", d: "M620,650 C650,750 690,850 730,940", duration: "6s", delay: "4s" },
];

const PINS = [
  { cx: 260, cy: 205 },
  { cx: 560, cy: 460 },
  { cx: 730, cy: 90 },
  { cx: 620, cy: 650 },
  { cx: 730, cy: 940 },
];

const WAVES = [
  { y: 40, dur: "9s", opacity: 0.18 },
  { y: 90, dur: "11s", opacity: 0.14 },
  { y: 1000, dur: "10s", opacity: 0.18 },
  { y: 1050, dur: "13s", opacity: 0.12 },
];

function PinMarker({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx}, ${cy}) scale(1.1)`}>
      <path
        d="M0,-16 C-7,-16 -13,-10.5 -13,-3.5 C-13,7 0,20 0,20 C0,20 13,7 13,-3.5 C13,-10.5 7,-16 0,-16 Z"
        fill="var(--primary)"
      />
      <circle cx="0" cy="-3.5" r="4.2" fill="var(--background)" />
    </g>
  );
}

export default function HeroMapAnimation({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/images/soole-logo-dark.png"
        alt=""
        fill
        className="object-contain opacity-25 logo-dark-variant"
        sizes="100vw"
      />
      <Image
        src="/images/soole-logo.png"
        alt=""
        fill
        className="object-contain opacity-15 logo-light-variant"
        sizes="100vw"
      />
      <svg
        viewBox="0 0 1006 1085"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {WAVES.map((wave, i) => (
          <path
            key={i}
            d={`M-40,${wave.y} q20,-14 40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0`}
            stroke="#4FA6C4"
            strokeWidth="2.5"
            strokeDasharray="12 10"
            opacity={wave.opacity}
          >
            <animate attributeName="stroke-dashoffset" from="0" to="-44" dur={wave.dur} repeatCount="indefinite" />
          </path>
        ))}

        {ROADS.map((road) => (
          <g key={road.id}>
            <path d={road.d} stroke="var(--primary)" strokeWidth="9" strokeLinecap="round" fill="none" opacity="0.9" />
            <path d={road.d} stroke="var(--background)" strokeWidth="2.6" strokeDasharray="13 12" strokeLinecap="round" fill="none" opacity="0.9" />
          </g>
        ))}

        {PINS.map((pin, i) => (
          <PinMarker key={i} cx={pin.cx} cy={pin.cy} />
        ))}

        {ROADS.map((road) => (
          <circle key={`${road.id}-dot`} r="6" fill="var(--foreground)">
            <animateMotion dur={road.duration} begin={road.delay} repeatCount="indefinite" path={road.d} />
          </circle>
        ))}
      </svg>
    </div>
  );
}
