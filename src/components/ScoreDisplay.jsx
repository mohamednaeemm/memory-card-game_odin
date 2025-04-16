import React from 'react';

const ScoreDisplay = ({ score, bestScore }) => {
  return (
    <div className="score-display">
      <p>Current Score: <span>{score}</span></p>
      <p>Best Score: <span>{bestScore}</span></p>
    </div>
  );
};

export default ScoreDisplay;