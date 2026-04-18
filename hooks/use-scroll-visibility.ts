'use client';

import { useScroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';

type UseScrollVisibilityOptions = {
  threshold?: number; // how much scroll before toggling visibility
  offset?: number;    // always visible near the top
};

export function useScrollVisibility({
  threshold = 60,
  offset = 100,
}: UseScrollVisibilityOptions = {}) {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(true);

  const lastY = useRef(0);
  const accumulated = useRef(0);

  useMotionValueEvent(scrollY, 'change', (current) => {
    const diff = current - lastY.current;

    // accumulate scroll distance (important for threshold behavior)
    accumulated.current += diff;

    // always show header near top
    if (current < offset) {
      setVisible(true);
      accumulated.current = 0;
      lastY.current = current;
      return;
    }

    // ignore tiny scroll movements
    if (Math.abs(accumulated.current) < threshold) {
      lastY.current = current;
      return;
    }

    if (accumulated.current > 0) {
      // scrolling down → hide
      setVisible(false);
    } else {
      // scrolling up → show
      setVisible(true);
    }

    // reset after trigger so it doesn't spam toggles
    accumulated.current = 0;
    lastY.current = current;
  });

  return visible;
}