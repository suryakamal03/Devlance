"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const shown = sessionStorage.getItem("devlance_loader_shown");
      if (shown) {
        setLoading(false);
        return;
      }
    } catch {
      // ignore session storage failures
    }

    const timer = setTimeout(() => {
      try {
        sessionStorage.setItem("devlance_loader_shown", "1");
      } catch {
        // ignore session storage failures
      }
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 text-sm font-medium uppercase tracking-widest text-gray-400"
          >
            Devlance
          </motion.p>

          <div className="loader flex items-center gap-0.5" style={{ margin: "0.25em 0" }}>
            <svg height="0" width="0" viewBox="0 0 64 64" style={{ position: "absolute" }}>
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

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="48" width="48" style={{ display: "inline-block" }}>
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="6" stroke="url(#b)" d="M 8,8 H 24 C 38,8 52,18 52,32 C 52,46 38,56 24,56 H 8 Z" style={{ animation: `dashArray 2s ease-in-out infinite, dashOffset 2s linear infinite` }} pathLength="360" className="dash" />
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="6" stroke="url(#c)" d="M 8,8 H 24 C 38,8 52,18 52,32 C 52,46 38,56 24,56 H 8 Z" pathLength="360" style={{ animation: `dashArray 2s ease-in-out infinite 0.66s, dashOffset 2s linear infinite 0.66s` }} className="dash" />
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="6" stroke="url(#d)" d="M 8,8 H 24 C 38,8 52,18 52,32 C 52,46 38,56 24,56 H 8 Z" pathLength="360" style={{ animation: `dashArray 2s ease-in-out infinite 1.32s, dashOffset 2s linear infinite 1.32s` }} className="dash" />
            </svg>
          </div>

          <style>{`
            @keyframes dashArray {
              0% {
                stroke-dasharray: 0, 338;
              }
              66% {
                stroke-dasharray: 169, 169;
              }
              100% {
                stroke-dasharray: 338, 0;
              }
            }
            @keyframes dashOffset {
              0% {
                stroke-dashoffset: 0;
              }
              100% {
                stroke-dashoffset: -338;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
