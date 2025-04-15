import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';
import Loading from './Loading';
import ScoreDisplay from './ScoreDisplay';
import Result from './Result';
import { fetchCards } from '../services/api';
import shuffleArray from '../utils/shuffle';

const GameBoard = () => {
  const location = useLocation();
  const { difficulty } = location.state || { difficulty: 'easy' };
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isWin, setIsWin] = useState(false);

  useEffect(() => {
    const loadAndShuffleCards = async () => {
      setLoading(true);
      const data = await fetchCards(difficulty);
      setCards(shuffleArray(data));
      setLoading(false);
    };
    loadAndShuffleCards();
  }, [difficulty]);

  const handleCardClick = (card) => {
    const cardClickSound = new Audio('/src/assets/sounds/click.wav');
    cardClickSound.play();

    if (selectedCards.includes(card.id)) {
      // Wrong selection (lose)
      const wrongSound = new Audio('/src/assets/sounds/lose.wav');
      wrongSound.play();
      if (score > bestScore) setBestScore(score);
      setShowResult(true);
      setIsWin(false);
    } else {
      setSelectedCards([...selectedCards, card.id]);
      setScore(score + 1);
      setCards(shuffleArray(cards)); // Shuffle after each correct pick

      // Check if user won
      if (selectedCards.length + 1 === cards.length) {
        setShowResult(true);
        setIsWin(true); 
        setBestScore(0);
        const winSound = new Audio('/src/assets/sounds/win.wav');
        winSound.play();
      }
    }
  };

  const handlePlayAgain = () => {
    setSelectedCards([]);
    setScore(0);
    setShowResult(false);
    setIsWin(false);
    setCards(shuffleArray(cards));
  };

  const handleBackToMenu = () => {
    window.location.href = '/';
  };

  if (loading) return <Loading />;

  return (
    <div className="game-board">
      <ScoreDisplay score={score} bestScore={bestScore} isWin={isWin} />
      {showResult ? (
        <Result 
          score={score} 
          bestScore={bestScore} 
          onPlayAgain={handlePlayAgain} 
          onBackToMenu={handleBackToMenu} 
          isWin={isWin}
        />
      ) : (
        <div className="cards-container">
          {cards.map((card) => (
            <Card key={card.id} card={card} onClick={() => handleCardClick(card)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GameBoard;