import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import DifficultySelector from './components/DifficultySelector';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/difficulty" element={<DifficultySelector />} />
          <Route path="/game" element={<GameBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;