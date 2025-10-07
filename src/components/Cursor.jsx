import React, { useEffect, useRef } from "react";

/**
 * Neon cursor with smooth trailing using requestAnimationFrame.
 * Works on desktop only (hidden on touch devices).
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // hide on touch devices
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      dot.style.display = "none";
      ring.style.display = "none";
      return;
    }

    let rafId = null;

    function onMove(e) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      // position dot instantly (small one), ring will ease
      dot.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
      // give ring a quick active style while moving
      ring.classList.add("cursor-ring-active");
      clearTimeout(ring._timeout);
      ring._timeout = setTimeout(() => ring.classList.remove("cursor-ring-active"), 120);
    }

    function loop() {
      // ease ring toward mouse
      pos.current.x += (mouse.current.x - pos.current.x) * 0.16;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.16;
      ring.style.transform = `translate3d(${pos.current.x - 18}px, ${pos.current.y - 18}px, 0)`;
      rafId = requestAnimationFrame(loop);
    }

    document.addEventListener("mousemove", onMove);
    loop();

    // hide when leaving window
    function onLeave() {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    }
    function onEnter() {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    }
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      {/* small dot */}
      <div
        ref={dotRef}
        className="cursor-dot fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ left: 0, top: 0 }}
      />
      {/* larger ring */}
      <div
        ref={ringRef}
        className="cursor-ring fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{ left: 0, top: 0 }}
      />
    </>
  );
}
