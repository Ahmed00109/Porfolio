import React, { useEffect, useState } from 'react';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0 h-96 w-96 rounded-full bg-purple-500 opacity-30 blur-3xl transition duration-300"
      style={{
        left: position.x - 200,
        top: position.y - 200,
      }}
    />
  );
};

export default CursorGlow;
