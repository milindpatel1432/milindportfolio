import { useEffect, useState } from 'react';

/**
 * Scroll spy hook — tracks which section is currently in view.
 * @param {string[]} sectionIds - Array of section element IDs to spy on
 * @param {number} offset - Viewport offset (px) for detection threshold
 * @returns {string} - Currently active section ID
 */
export function useScrollSpy(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const observers = [];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: `-${offset}px 0px -60% 0px`,
      threshold: 0,
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [sectionIds, offset]);

  return activeId;
}
