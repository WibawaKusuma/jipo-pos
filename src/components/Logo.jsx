export default function Logo({ 
  variant = "dark", // "dark" = dark text for light bg; "light" = light text for dark bg
  size = "md", // "sm", "md", "lg"
  showBadge = true,
  className = "" 
}) {
  const isLight = variant === "light";

  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const badgeSizes = {
    sm: "text-[9px] px-1 py-0.2",
    md: "text-[10px] px-1.5 py-0.5",
    lg: "text-xs px-2 py-0.5",
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Proper Custom Vector SVG Mark */}
      <div className={`relative ${iconSizes[size] || iconSizes.md} shrink-0 group-hover:scale-105 transition-transform duration-200`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            {/* Emerald to Teal Gradient */}
            <linearGradient id="jipoBgGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#059669" />
              <stop offset="1" stopColor="#0D9488" />
            </linearGradient>
            {/* Lime Mint Spark Accent */}
            <linearGradient id="jipoSparkGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6EE7B7" />
              <stop offset="1" stopColor="#34D399" />
            </linearGradient>
            {/* Subtle Inner Glow */}
            <linearGradient id="jipoGlowGrad" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.25" />
              <stop offset="1" stopColor="white" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Squircle Container */}
          <rect width="40" height="40" rx="12" fill="url(#jipoBgGrad)" />
          <rect x="0.5" y="0.5" width="39" height="39" rx="11.5" stroke="url(#jipoGlowGrad)" />

          {/* Geometric J & Flow Mark */}
          {/* Main 'J' Stem and Rounded Hook */}
          <path
            d="M21 11C21 10.4477 20.5523 10 20 10H15C14.4477 10 14 10.4477 14 11V12C14 12.5523 14.4477 13 15 13H17.5V23C17.5 24.933 15.933 26.5 14 26.5C12.8954 26.5 12 25.6046 12 24.5C12 23.9477 11.5523 23.5 11 23.5C10.4477 23.5 10 23.9477 10 24.5C10 26.7091 11.7909 28.5 14 28.5C17.0376 28.5 19.5 26.0376 19.5 23V13H20C20.5523 13 21 12.5523 21 12V11Z"
            fill="white"
          />

          {/* Fast Flow / Clean Sparkle Accent Dot (Top Right) */}
          <path
            d="M27.5 10C27.5 13 29.5 14.5 32 14.5C29.5 14.5 27.5 16 27.5 19C27.5 16 25.5 14.5 23 14.5C25.5 14.5 27.5 13 27.5 10Z"
            fill="url(#jipoSparkGrad)"
          />

          {/* Clean Washing Wave Arc (Bottom Right) */}
          <path
            d="M22 21.5C24.5 21.5 26.5 23.5 26.5 26C26.5 26.5523 26.9477 27 27.5 27C28.0523 27 28.5 26.5523 28.5 26C28.5 22.4101 25.5899 19.5 22 19.5C21.4477 19.5 21 19.9477 21 20.5C21 21.0523 21.4477 21.5 22 21.5Z"
            fill="white"
            fillOpacity="0.85"
          />
        </svg>
      </div>

      {/* Typography Brand Name */}
      <div className="flex items-center gap-1.5 tracking-tight">
        <span className={`${textSizes[size] || textSizes.md} font-bold ${isLight ? "text-white" : "text-slate-900"}`}>
          Jipo
        </span>
        
        {showBadge ? (
          <span
            className={`${badgeSizes[size] || badgeSizes.md} font-bold rounded-md uppercase tracking-wider transition-colors ${
              isLight
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
                : "bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs"
            }`}
          >
            POS
          </span>
        ) : (
          <span className={`${textSizes[size] || textSizes.md} font-bold text-emerald-600`}>
            POS
          </span>
        )}
      </div>
    </div>
  );
}
