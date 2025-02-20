// ThemeToggle.js
"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

interface ThemeToggleProps {
  onThemeChange: (newTheme: "light" | "dark") => void;
}

export function ThemeToggle({ onThemeChange }: ThemeToggleProps) {
  // Recibimos la función
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    onThemeChange(newTheme); // Llamamos a la función con el nuevo tema
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full"
      onClick={toggleTheme} // Usamos la función toggleTheme
    >
      <FaSun className="absolute h-10 w-10 rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
      <FaMoon className="absolute h-10 w-10 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
