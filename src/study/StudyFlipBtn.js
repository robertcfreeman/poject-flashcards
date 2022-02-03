import React from 'react';
import "../icons.css";

export default function StudyFlipBtn({setCardSide}) {
  const handleFlipClick = () => {
    setCardSide(prev => (prev === "front" ? "back" : "front"));
  };
  
  return (
    <button
      className="btn btn-secondary p-2"
      onClick={handleFlipClick}
    >
      Flip
    </button>
  );
}
