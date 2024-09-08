import React, { useState, useEffect } from 'react';
import './MouseCircleEffect.css';

const MouseCircleEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX, // Apenas as coordenadas do mouse na viewport
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="circle"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%)`, // Centraliza o círculo
      }}
    ></div>
  );
};

export default MouseCircleEffect;
