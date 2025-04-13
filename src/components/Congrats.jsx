import React, { useEffect } from 'react';
import congratsSound from '../assets/sounds/congrats.mp3';

const Congrats = () => {
  useEffect(() => {
    const audio = new Audio(congratsSound);
    audio.play();
  }, []);

  return <div className="congrats">Congratulations! You won!</div>;
};

export default Congrats;