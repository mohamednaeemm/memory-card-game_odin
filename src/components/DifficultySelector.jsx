import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DifficultySelector = () => {
  const [difficulty, setDifficulty] = useState('');
  const navigate = useNavigate();

  const handleSelect = (level) => {
    setDifficulty(level);
    navigate('/game', { state: { difficulty: level } });
  };

  return (
    <div className="difficulty-selector">
      <h2>Choose Difficulty</h2>
      <button onClick={() => handleSelect('easy')}>Easy</button>
      <button onClick={() => handleSelect('medium')}>Medium</button>
      <button onClick={() => handleSelect('hard')}>Hard</button>
    </div>
  );
};

export default DifficultySelector;