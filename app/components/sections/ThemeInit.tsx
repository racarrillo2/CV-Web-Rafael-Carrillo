"use client";

import { useEffect, useState } from "react";

export default function ThemeInit() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (theme === "dark" || (!theme && prefersDark)) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return null;
}