# Memory Card Game

[Live Version](https://memory-card-game-example.netlify.app/)

## Project Overview

This is a **Memory Card Game** built with **React** and **Vite**, designed to test players' memory by challenging them to select unique Pokémon cards without repeating any. The game fetches Pokémon data from the [PokéAPI](https://pokeapi.co/) and includes three difficulty levels: Easy (5 cards), Medium (10 cards), and Hard (20 cards). The game features sound effects for card clicks, wins, and losses, a blurred background effect when the game ends, and a responsive UI.

## Features

- **Difficulty Selection**: Choose from Easy (5 cards), Medium (10 cards), or Hard (20 cards).
- **Dynamic Card Fetching**: Uses PokéAPI to fetch Pokémon cards with unique IDs, names, and images.
- **Game Mechanics**:
  - Cards shuffle after each correct pick and when a new difficulty is selected.
  - Players lose if they select a card they’ve already picked.
  - Players win by selecting all unique cards without repetition.
- **Sound Effects**:
  - Card click sound for each interaction.
  - Win sound (celebratory) when the player wins.
  - Lose sound (buzzer) when the player selects a repeated card.
- **Result Screen**: Displays "You Win!" or "Wrong Selection!" with the current score and best score, along with options to play again or return to the menu.
- **Visual Effects**: Background blurs when the result screen appears, keeping the result modal sharp and centered.
- **Responsive Design**: Works on desktop and mobile devices with a grid-based card layout.


## Project Structure

```plaintext
memory-card-game/
├── src/
│   ├── assets/
│   │   └── sounds/
│   │       ├── click.mp3
│   │       ├── win.mp3
│   │       └── lose.mp3
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── DifficultySelector.jsx
│   │   ├── GameBoard.jsx
│   │   ├── Loading.jsx
│   │   ├── Menu.jsx
│   │   ├── Result.jsx
│   │   └── ScoreDisplay.jsx
│   ├── services/
│   │   └── api.js
│   ├── utils/
│   │   └── shuffle.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
├── vite.config.js
└── README.md
```

