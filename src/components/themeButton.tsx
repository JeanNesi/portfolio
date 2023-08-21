"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function ThemeToggleButton() {
  const [darkMode, setDarkMode] = useState(Cookies.get("theme") === "dark");

  const setTheme = (theme: "light" | "dark") => {
    Cookies.set("theme", theme, { expires: 365 });
    document.documentElement.setAttribute("prefers-color-scheme", theme);
  };

  useEffect(() => {
    if (darkMode) setTheme("dark");
    else setTheme("light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <button
      className="hover:scale-110 transition-all"
      onClick={() => {
        toggleTheme();
      }}
    >
      {darkMode ? <Sun /> : <Moon />}
    </button>
  );
}
