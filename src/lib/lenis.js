import Lenis from '@studio-freight/lenis';

let lenis;

export function initLenis() {
  if (lenis) return lenis;
  lenis = new Lenis({ smoothWheel: true, smoothTouch: true, duration: 1.2 });
  function raf(t) {
    lenis.raf(t);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  return lenis;
}

export function scrollToTarget(target) {
  if (!lenis) return document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  lenis.scrollTo(target, { offset: 0, lock: false });
}
