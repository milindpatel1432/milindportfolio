import { useEffect, useRef, useState } from 'react';

/**
 * Tracks mouse position for interactive glow effects.
 * @returns {{ x: number, y: number, elementRef: React.RefObject }}
 */
export function useMouseGlow() {
  const elementRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { ...position, elementRef };
}
