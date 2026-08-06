import React from "react";

/** Compact menu-bar AI mark — spark / neural node, 16px-friendly */
export function AiMenuIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="aiMenuGrad" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="0.55" stopColor="#818CF8" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="url(#aiMenuGrad)" />
      <path
        d="M12 6.2v11.6M8.2 9.5l7.6 5M15.8 9.5l-7.6 5"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2.15" fill="white" />
    </svg>
  );
}

type WeatherKind = "clear" | "cloudy" | "rain" | "snow" | "storm" | "fog";

export function weatherKindFromCode(code: number): WeatherKind {
  if (code === 0 || code === 1) return "clear";
  if (code === 2 || code === 3) return "cloudy";
  if (code === 45 || code === 48) return "fog";
  if (code === 71 || code === 73 || code === 75 || code === 77) return "snow";
  if (code === 95 || code === 96 || code === 99) return "storm";
  if (code >= 51 && code <= 82) return "rain";
  return "cloudy";
}

/** Compact menu-bar weather mark — condition-aware */
export function WeatherMenuIcon({
  code = 2,
  size = 15,
  className = "",
}: {
  code?: number;
  size?: number;
  className?: string;
}) {
  const kind = weatherKindFromCode(code);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {kind === "clear" && (
        <>
          <circle cx="12" cy="12" r="4.2" fill="#FBBF24" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = 12 + Math.cos(rad) * 6.2;
            const y1 = 12 + Math.sin(rad) * 6.2;
            const x2 = 12 + Math.cos(rad) * 8.4;
            const y2 = 12 + Math.sin(rad) * 8.4;
            return (
              <line
                key={deg}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#F59E0B"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            );
          })}
        </>
      )}

      {(kind === "cloudy" || kind === "fog") && (
        <>
          <circle cx="9" cy="10" r="3.2" fill="#93C5FD" opacity="0.9" />
          <path
            d="M7.2 16.5h9.8a3.2 3.2 0 0 0 .2-6.4 4.4 4.4 0 0 0-8.5-1.2A3.6 3.6 0 0 0 7.2 16.5Z"
            fill="#E2E8F0"
            stroke="#CBD5E1"
            strokeWidth="0.6"
          />
          {kind === "fog" &&
            [17.5, 19.5].map((y) => (
              <line
                key={y}
                x1="7"
                y1={y}
                x2="17"
                y2={y}
                stroke="#94A3B8"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.8"
              />
            ))}
        </>
      )}

      {(kind === "rain" || kind === "storm") && (
        <>
          <path
            d="M7.2 13.2h9.8a3.2 3.2 0 0 0 .2-6.4 4.4 4.4 0 0 0-8.5-1.2A3.6 3.6 0 0 0 7.2 13.2Z"
            fill="#E2E8F0"
            stroke="#CBD5E1"
            strokeWidth="0.6"
          />
          {[8.5, 12, 15.5].map((x, i) => (
            <line
              key={x}
              x1={x}
              y1="14.5"
              x2={x - 1.2}
              y2="18.8"
              stroke={kind === "storm" ? "#FBBF24" : "#38BDF8"}
              strokeWidth="1.4"
              strokeLinecap="round"
              opacity={0.95 - i * 0.1}
            />
          ))}
        </>
      )}

      {kind === "snow" && (
        <>
          <path
            d="M7.2 13h9.8a3.2 3.2 0 0 0 .2-6.4 4.4 4.4 0 0 0-8.5-1.2A3.6 3.6 0 0 0 7.2 13Z"
            fill="#F1F5F9"
            stroke="#CBD5E1"
            strokeWidth="0.6"
          />
          {[9, 12, 15].map((x) => (
            <circle key={x} cx={x} cy="16.8" r="1.1" fill="#94A3B8" />
          ))}
        </>
      )}
    </svg>
  );
}
