import { useState, useEffect } from 'react';

const SCROLL_THRESHOLD = 10;

export function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState<'up'|'down'>('up');
  useEffect(() => {
    let lastY = window.pageYOffset;

    const update = () => {
      const y = window.pageYOffset;
      const direction = y > lastY ? 'down' : 'up';
      if (
        direction !== scrollDir &&
        Math.abs(y - lastY) > SCROLL_THRESHOLD
      ) {
        setScrollDir(direction);
      }
      lastY = y > 0 ? y : 0;
    };

    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, [scrollDir]);

  return scrollDir;
}
