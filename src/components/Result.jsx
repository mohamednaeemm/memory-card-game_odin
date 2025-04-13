import React from 'react';

const Result = ({ score, bestScore, onPlayAgain, onBackToMenu, isWin }) => {
  return (
    <div className={`result ${isWin ? 'win' : 'lose'}`}>
      <h2>{isWin ? 'You Win!' : 'Wrong Selection!'}</h2>
      <p>Your Score: {score}</p>
      <p>Best Score: {bestScore}</p>
      <button onClick={onPlayAgain}>Play Again</button>
      <button onClick={onBackToMenu}>Back to Menu</button>
    </div>
  );
};

export default Result;