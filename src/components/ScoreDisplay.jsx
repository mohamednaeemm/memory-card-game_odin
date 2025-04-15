import React from 'react';

const ScoreDisplay = ({ score, bestScore, isWin }) => {
  return (
    <div className="score-display">
      <p>Current Score: {score}</p>
      <p>Best Score: {isWin ? score : bestScore}</p>
    </div>
  );
};

export default ScoreDisplay;