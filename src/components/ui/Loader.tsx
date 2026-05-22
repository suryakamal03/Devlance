export default function Loader() {
  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white" data-devlance-loader>
      <p className="mb-6 text-sm font-medium uppercase tracking-widest text-gray-400">
        Devlance
      </p>

      <div className="loader-shell">
        <svg height="0" width="0" viewBox="0 0 64 64" className="loader-gradient-defs">
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="b">
              <stop stopColor="#973BED" />
              <stop stopColor="#007CFF" offset="1" />
            </linearGradient>

            <linearGradient gradientUnits="userSpaceOnUse" y2="0" x2="0" y1="64" x1="0" id="c">
              <stop stopColor="#FFC800" />
              <stop stopColor="#FF00FF" offset="1" />
              <animateTransform
                repeatCount="indefinite"
                keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1"
                keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1"
                dur="8s"
                values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32"
                type="rotate"
                attributeName="gradientTransform"
              />
            </linearGradient>

            <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="d">
              <stop stopColor="#00E0ED" />
              <stop stopColor="#00DA72" offset="1" />
            </linearGradient>
          </defs>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="48" width="48" className="loader-icon">
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="6" stroke="url(#b)" d="M 8,8 H 24 C 38,8 52,18 52,32 C 52,46 38,56 24,56 H 8 Z" pathLength="360" className="loader-path loader-path-one" />
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="6" stroke="url(#c)" d="M 8,8 H 24 C 38,8 52,18 52,32 C 52,46 38,56 24,56 H 8 Z" pathLength="360" className="loader-path loader-path-two" />
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="6" stroke="url(#d)" d="M 8,8 H 24 C 38,8 52,18 52,32 C 52,46 38,56 24,56 H 8 Z" pathLength="360" className="loader-path loader-path-three" />
        </svg>
      </div>
    </div>
  )
}
