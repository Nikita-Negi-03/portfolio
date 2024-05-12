import React, { useState, useEffect } from 'react';
import '../App.css'

const CursorHighlight = () => {
  const [positions, setPositions] = useState([]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const newPosition = { x: clientX, y: clientY };
    setPositions([...positions, newPosition]);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [positions]);

  return (
    <div className="cursor-container">
      {positions.map((position, index) => (
        <div className='light' key={index} style={{ left: position.x, top: position.y }} />
      ))}
    </div>
  );
};

export default CursorHighlight;
