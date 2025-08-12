"use client";
import { useEffect, useRef, useState } from "react";

export default function HighlightCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const activate = () => setActive(true);
    const deactivate = () => setActive(false);

    const targets = document.querySelectorAll(".highlight-target");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", activate);
      el.addEventListener("mouseleave", deactivate);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", activate);
        el.removeEventListener("mouseleave", deactivate);
      });
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed z-[9999] pointer-events-none rounded-full mix-blend-difference bg-white transition-all duration-300 ease-out
        ${active ? "w-20 h-20 opacity-100" : "w-6 h-6 opacity-0"}
      `}
      style={{
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
