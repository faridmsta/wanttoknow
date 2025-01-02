import { useState, useEffect } from 'react';

const useMousePosition = (ref?: React.RefObject<HTMLElement>) => {
  const [position, setPosition] = useState({ x: 0, y: 0, visible: false });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect();
        const withinBounds =
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom;

        setPosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
          visible: withinBounds,
        });
      } else {
        // If no ref is provided, track position relative to the window
        setPosition({
          x: event.clientX,
          y: event.clientY,
          visible: true, // Always true since it's within the window
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ref]);

  return position;
};

export default useMousePosition;
