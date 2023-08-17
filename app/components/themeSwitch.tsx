"use client";

import * as React from "react";

import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header>
      <button
        aria-label="Toggle dark mode"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="border rounded-md w-6 h-6 flex items-center justify-center"
      >
        {theme !== "dark" ? <HiMoon /> : <HiSun />}
      </button>
    </header>
  );
};
