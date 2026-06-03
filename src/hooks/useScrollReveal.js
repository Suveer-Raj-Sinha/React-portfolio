import { useEffect, useRef } from 'react';

/**
 * Custom hook that adds a reveal animation to elements when they enter the viewport.
 * Uses IntersectionObserver for performance — no scroll event listeners.
 *
 * @param {object} options
 * @param {number} options.threshold - How much of the element must be visible (0-1)
 * @param {string} options.rootMargin - Margin around the root (viewport)
 * @returns {React.RefObject} - Attach this ref to the element you want to animate
 */
export default function useScrollReveal({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('revealed');
          observer.unobserve(element); // Only animate once
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
