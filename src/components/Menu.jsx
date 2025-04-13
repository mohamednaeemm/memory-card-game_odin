import React from 'react';
import { useNavigate } from 'react-router-dom'; // If using React Router

const Menu = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/difficulty');
  };

  return (
    <div className="menu">
      <h1>Memory Card Game</h1>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
};

export default Menu;