"use client";

import { useEffect, useState } from "react";

const lines = [
  "Initializing FACT System...",
  "Loading Cyber Modules...",
  "Accessing Secure Network...",
  "Welcome to FACT 🚀"
];

export default function TerminalIntro() {
  const [displayed, setDisplayed] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < lines.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => [...prev, lines[index]]);
        setIndex(index + 1);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center text-green-400 font-mono">
      <div>
        {displayed.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}