import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DifficultySelector = () => {
  const [difficulty, setDifficulty] = useState('');
  const navigate = useNavigate();

  const handleSelect = (level) => {
    setDifficulty(level);
    navigate('/game', { state: { difficulty: level } }); // Pass difficulty in state
    console.log('Selected difficulty:', level); // Debug log
  };

  return (
    <div className="difficulty-selector">
      <h2>Choose Difficulty</h2>
      <button onClick={() => handleSelect('easy')}>Easy (5 cards)</button>
      <button onClick={() => handleSelect('medium')}>Medium (10 cards)</button>
      <button onClick={() => handleSelect('hard')}>Hard (20 cards)</button>
    </div>
  );
};

export default DifficultySelector;