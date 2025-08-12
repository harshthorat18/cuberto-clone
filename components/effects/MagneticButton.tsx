// utils/MagneticButton.ts
import { gsap, Power2, Expo } from "gsap";

function lerp(start: number, end: number, t: number) {
  return start * (1 - t) + end * t;
}

export function MagneticButton(
  element: string,
  opts: { duration?: number; ease?: typeof Power2.easeOut } = {}
) {
  document.querySelectorAll<HTMLElement>(element).forEach((elem) => {
    elem.addEventListener("mousemove", (e) => {
      const rect = elem.getBoundingClientRect();

      const zeroOneX = gsap.utils.mapRange(0, rect.width, 0, 1, e.clientX - rect.left);
      const zeroOneY = gsap.utils.mapRange(0, rect.height, 0, 1, e.clientY - rect.top);

      // Grow mouse follower
      gsap.to(".mousefollower", {
        scale: 4,
        ease: Power2.easeOut,
        duration: 0.5,
      });

      // Move element toward cursor
      gsap.to(elem, {
        x: lerp(-20, 20, zeroOneX),
        y: lerp(-20, 20, zeroOneY),
        duration: opts.duration || 1,
        ease: opts.ease || Expo.easeOut,
      });
    });

    elem.addEventListener("mouseleave", () => {
      // Reset mouse follower
      gsap.to(".mousefollower", {
        scale: 1,
        ease: Power2.easeOut,
        duration: 0.5,
      });

      // Reset element position
      gsap.to(elem, {
        x: 0,
        y: 0,
        duration: opts.duration || 1,
        ease: opts.ease || Expo.easeOut,
      });
    });
  });
}
