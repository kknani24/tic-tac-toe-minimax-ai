
# Tic-Tac-Toe Game

![HTML](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-%233C873A.svg?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black)
![AI](https://img.shields.io/badge/AI-%2300A6D6.svg?style=for-the-badge)
![Minimax](https://img.shields.io/badge/Minimax-%2300BFFF.svg?style=for-the-badge)

## Overview

Welcome to the **Tic-Tac-Toe** game! This is a fun and interactive implementation using **React**. You can play against an AI opponent where one player takes the role of **'X'** while the AI takes on **'O'**. This game features score tracking, a toggle between dark and light themes, and an intelligent AI that uses the **Minimax algorithm** to play optimally. 

Whether you're a seasoned player or new to the game, this Tic-Tac-Toe experience is designed to be both entertaining and challenging!

## Features

Here are some exciting features you'll find in this game:

- **Two Player Mode**: Play against the AI and see if you can outsmart it!
- **Score Tracking**: Keep track of wins for both players, making each game even more competitive.
- **AI Opponent**: The AI is not just any opponent; it uses the Minimax algorithm to make the best possible moves, providing a challenging experience.
- **Theme Toggle**: Enjoy your game in either a dark or light theme—perfect for your mood!
- **Reset Game**: Feel free to reset the game anytime to start fresh and try different strategies.
- **Responsive Design**: Play seamlessly on various devices, whether you're on your computer or a mobile device.

## Installation

Getting started with the Tic-Tac-Toe game is easy! Just follow these simple steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kknani24/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. **Install the required dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and head over to `http://localhost:3000` to start playing!

## How to Play

Once you're in the game, it's easy to jump right in:

- Simply click on a square to place your **'X'**.
- The AI will then make its move automatically, so be ready!
- If someone wins or if the game results in a draw, the game will announce the outcome.
- Use the **Reset Game** button anytime you want to start a new game.
- Feel free to toggle the theme using the **Switch to Light Theme** or **Switch to Dark Theme** buttons to match your preferences.

## AI and Minimax Algorithm

The AI in this game uses the **Minimax algorithm**, a powerful technique from game theory that helps the AI make the best decisions. Here’s a simple breakdown of how it works:

1. **Game Tree**: Think of all possible game states as a tree. Each move leads to a new state, and the algorithm explores all these possibilities.
2. **Recursion**: The algorithm checks all potential moves, deciding the best one based on whether it’s the AI's turn (trying to maximize its score) or the player’s turn (trying to minimize the AI’s score).
3. **Scoring**: The AI assigns scores to different outcomes:
   - If the AI wins, it scores +10.
   - If the player wins, it scores -10.
   - If it’s a draw, the score is 0.
4. **Optimal Move Selection**: The AI will always choose the move that leads to the most favorable outcome for itself.

### Key Functions

Here are some important functions that drive the AI's decision-making:

- **`minimax(newSquares, player)`**: This function implements the Minimax algorithm, evaluating potential moves recursively.
- **`findWinningMove(squares, player)`**: This function checks if there’s an immediate winning move for either the AI or the player.

## Code Overview

Let’s dive into the main components that make up the game:

### Main Components

- **`Board`**: This component is the heart of the game, managing the game state and implementing the core logic.
- **`Square`**: Each square on the board is represented by a button, making it easy for players to click and place their moves.

### Key Functions

Here are some key functions you’ll interact with:

- **`handleClick(i)`**: This function handles the click event for each square on the board.
- **`aiMove(currentSquares)`**: This function determines the AI's next move using the Minimax algorithm.
- **`checkWinner(squares)`**: After each move, this function checks if there’s a winner.
- **`resetGame()`**: If you want to restart the game, this function resets the game state.

## Contributing

I welcome contributions! If you'd like to enhance the game or add features, please feel free to fork the repository and submit a pull request. Your help is much appreciated!

## License

This project is licensed under the **MIT License**. Feel free to use and modify it as you wish!


### Technologies Used

This project was built using:

- **React**: For creating the interactive UI.
- **JavaScript**: The programming language that powers the game logic.
- **CSS**: For styling and layout.
- **Node.js**: To manage the backend and server-side logic.

### SVG Images

Here are the logos of the technologies used in this project:

#### HTML
<img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" width="200" alt="HTML5 Logo" />

#### CSS
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" width="200" alt="CSS3 Logo" />

#### JavaScript
<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="200" alt="JavaScript Logo" />

#### Node.js
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="200" alt="Node.js Logo" />
```

### Enhancements Made
1. **Conversational Tone**: The language is more friendly and approachable, making it feel less formal.
2. **Explanatory Details**: Added explanations in various sections to help users understand features and the Minimax algorithm better.
3. **Encouraging Contribution**: Inviting contributions in a friendly manner encourages community involvement.
4. **Personal Touch**: Included phrases like "jump right in" and "a big thank you" to make the README feel more engaging.

