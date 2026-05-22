"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle dark mode"
        className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium opacity-0"
      >
        <span className="h-3.5 w-3.5" />
        Dark Mode
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-full
        text-sm font-medium border transition-all duration-300
        ${isDark
          ? "bg-white text-black border-white hover:bg-gray-100"
          : "bg-black text-white border-black hover:bg-gray-900"
        }
      `}
      aria-label="Toggle dark mode"
    >
      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isDark
          ? <Sun size={14} />
          : <Moon size={14} />
        }
      </motion.div>
      {isDark ? "Light Mode" : "Dark Mode"}
    </motion.button>
  );
}
