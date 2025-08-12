'use client';

import { useEffect, useRef } from 'react';

const MouseFollower = () => {
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const follower = followerRef.current;

    const handleMouseMove = (e: MouseEvent) => {
  if (!follower) return;

  follower.style.left = `${e.clientX}px`;
  follower.style.top = `${e.clientY}px`;

  const element = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
  const bgColor = getEffectiveBackgroundColor(element);

  console.log('Detected bgColor:', bgColor);

  const rgb = bgColor.match(/\d+/g);
  if (rgb && rgb.length >= 3) {
    const [r, g, b] = rgb.map(Number);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    console.log('Brightness:', brightness);

    // Use sum or brightness threshold tweak
    const isDark = r + g + b < 200;
    follower.style.backgroundColor = isDark ? 'white' : 'black';
  } else {
    follower.style.backgroundColor = 'black';
  }
};


    // Add event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      style={{
        position: 'fixed',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'black',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        transition: 'background-color 0.2s ease',
        zIndex: 9999,
      }}
    />
  );
};

export default MouseFollower;
