"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cv = canvasRef.current;
    if (!cv) return;
    const particles: HTMLDivElement[] = [];
    for (let i = 0; i < 18; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      const s = 2 + Math.random() * 4;
      p.style.cssText = `left:${Math.random() * 100}%;width:${s}px;height:${s}px;animation-duration:${9 + Math.random() * 10}s;animation-delay:${Math.random() * 12}s`;
      cv.appendChild(p);
      particles.push(p);
    }
    return () => particles.forEach((p) => p.remove());
  }, []);

  return (
    <div className="hero">
      <div className="hero-canvas" ref={canvasRef}>
        <div className="cloud c1" />
        <div className="cloud c2" />
        <div className="cloud c3" />
        <div className="komorebi" />
        <div className="ray" />
        <div className="ray r2" />
        <div className="ray r3" />
      </div>
      <div className="hero-inner">
        <div className="hero-mark">harema&nbsp;|&nbsp;Purpose</div>
        <h1>暮らしに、晴れ間を。</h1>
        <p className="sub">わかる。選べる。自分のペースで、歩める。</p>
        <div className="brandline">
          <span className="line" />
          <span>h a r e m a</span>
          <span className="line" />
        </div>
      </div>
      <div className="scroll-hint">SCROLL</div>
    </div>
  );
}
