import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

interface QuantumMediaLogoProps {
  className?: string;
  showTagline?: boolean;
}

export const QuantumMediaLogo: React.FC<QuantumMediaLogoProps> = ({
  className,
  showTagline = false,
}) => {
  return (
    <div className={cn("inline-flex items-center gap-2 select-none", className)}>
      <svg
        viewBox={showTagline ? "0 0 240 48" : "0 0 240 36"}
        className="h-8 w-auto fill-current text-foreground"
        aria-label="Quantum Media Logo"
        role="img"
      >
        <defs>
          <linearGradient id="qm-vector-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>

        {/* Vector Symbol: Stylized Q / Prism Layers */}
        <g transform="translate(2, 2)">
          {/* Outer Layer Hex / Quadrant */}
          <rect
            x="3"
            y="3"
            width="26"
            height="26"
            rx="7"
            fill="none"
            stroke="url(#qm-vector-grad)"
            strokeWidth="3.2"
          />
          {/* Dynamic inner shape representing printing & media precision */}
          <rect
            x="11.5"
            y="11.5"
            width="9"
            height="9"
            rx="2"
            fill="url(#qm-vector-grad)"
            transform="rotate(45 16 16)"
          />
          {/* Tail element completing the 'Q' */}
          <path
            d="M20 20 L28 28"
            stroke="url(#qm-vector-grad)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </g>

        {/* Vector Text: QUANTUM MEDIA */}
        <g transform="translate(42, 24)">
          {/* "QUANTUM" in bold uppercase sans vector text */}
          <text
            x="0"
            y="0"
            fill="currentColor"
            fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
            fontWeight="900"
            fontSize="19"
            letterSpacing="0.05em"
          >
            QUANTUM
          </text>
          {/* "MEDIA" in accent color vector text */}
          <text
            x="104"
            y="0"
            fill="#10b981"
            fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
            fontWeight="500"
            fontSize="19"
            letterSpacing="0.08em"
          >
            MEDIA
          </text>

          {showTagline && (
            <text
              x="1"
              y="12"
              fill="currentColor"
              opacity="0.65"
              fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
              fontWeight="600"
              fontSize="5.5"
              letterSpacing="0.2em"
            >
              CREATIVE • IMMERSIVE • UNFORGETTABLE
            </text>
          )}
        </g>
      </svg>
    </div>
  );
};

export default QuantumMediaLogo;
