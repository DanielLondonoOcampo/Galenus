"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";
import { Cinzel } from "next/font/google";
import { PT_Serif } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: "400" });
const pt = PT_Serif({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [_, setTheme] = useState("light");
  const [text, setText] = useState("Texto para tema claro");

  const handleThemeChange = (newTheme: "light" | "dark") => {
    // Tipo literal
    setTheme(newTheme);
    if (newTheme === "dark") {
      setText("Si llegase el fin de el mundo como lo conocemos...");
    } else {
      setText("Realmente serviría de algo lo que sabes empezando de cero?");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-healer bg-repeat w-full bg-cover dark:bg-disease text-black/70 dark:text-white transition-all duration-300 ease-in-out">
      <div className="max-w-3xl text-center space-y-10">
        <h1
          className={`text-6xl ${cinzel.className} font-semibold bg-gray-100/30 rounded-lg p-2 dark:bg-gray-500/50`}
        >
          Galenus
        </h1>
        <p
          className={`text-lg bg-gray-100/30 rounded-lg p-2 dark:bg-gray-500/50 ${pt.className}`}
        >
          {text}
        </p>
        <div className="space-x-2">
          <Button> </Button>
          <Button variant="secondary"> </Button>
        </div>
        <ThemeToggle onThemeChange={handleThemeChange} />{" "}
        {/* Pasamos la función */}
      </div>
    </div>
  );
}
