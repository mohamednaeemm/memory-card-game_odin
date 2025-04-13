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
  const [isWin, setIsWin] = useState(false); // Track if it's a win or lose

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
    const cardClickSound = new Audio('/src/assets/sounds/card-click.mp3');
    cardClickSound.play();

    if (selectedCards.includes(card.id)) {
      // Wrong selection (lose)
      const wrongSound = new Audio('/src/assets/sounds/wrong-selection.mp3');
      wrongSound.play();
      if (score > bestScore) setBestScore(score);
      setShowResult(true);
      setIsWin(false); // Indicate it's a loss
    } else {
      setSelectedCards([...selectedCards, card.id]);
      setScore(score + 1);
      setCards(shuffleArray(cards)); // Shuffle after each correct pick

      // Check if user won (selected all unique cards)
      if (selectedCards.length + 1 === cards.length) {
        setShowResult(true);
        setIsWin(true); // Indicate it's a win
        // Optionally play a win sound here
        const winSound = new Audio('/src/assets/sounds/congrats.mp3'); // Assuming you have a win sound
        winSound.play();
      }
    }
  };

  const handlePlayAgain = () => {
    setSelectedCards([]);
    setScore(0);
    setShowResult(false);
    setIsWin(false);
    setCards(shuffleArray(cards)); // Shuffle for new game
  };

  const handleBackToMenu = () => {
    window.location.href = '/'; // Simple redirect; use navigate if using Router
  };

  if (loading) return <Loading />;

  return (
    <div className="game-board">
      <ScoreDisplay score={score} bestScore={bestScore} />
      {showResult ? (
        <Result 
          score={score} 
          bestScore={bestScore} 
          onPlayAgain={handlePlayAgain} 
          onBackToMenu={handleBackToMenu} 
          isWin={isWin} // Pass whether it's a win or lose
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