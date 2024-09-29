import React, { useState } from 'react';
import './App.css';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [statusMessage, setStatusMessage] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winningMove, setWinningMove] = useState(null); // State to track the winning move

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    if (newTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  };

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares) || !isPlayerTurn) return;
    const newSquares = squares.slice();
    newSquares[i] = 'X';
    setSquares(newSquares);
    setIsPlayerTurn(false);
    if (checkWinner(newSquares)) return;
    setTimeout(() => aiMove(newSquares), 500);
  };

  const aiMove = (currentSquares) => {
    // Check if AI can win immediately
    const winningMove = findWinningMove(currentSquares, 'O');
    if (winningMove !== null) {
      const newSquares = currentSquares.slice();
      newSquares[winningMove] = 'O';
      setSquares(newSquares);
      setWinningMove([winningMove]); // Set winning move to highlight
      setStatusMessage('O Wins!');
      setScoreO(scoreO + 1);
      return resetGame();
    }

    // Otherwise, find the best move
    const bestMove = minimax(currentSquares, 'O').index;
    const newSquares = currentSquares.slice();
    newSquares[bestMove] = 'O';
    setSquares(newSquares);
    setWinningMove(null); // Reset winning move
    if (checkWinner(newSquares)) {
      return;
    }
    setIsPlayerTurn(true);
  };

  const findWinningMove = (squares, player) => {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        const newSquares = squares.slice();
        newSquares[i] = player;
        if (calculateWinner(newSquares) === player) {
          return i; // Return the index of the winning move
        }
      }
    }
    return null; // No winning move found
  };

  const checkWinner = (squares) => {
    const winner = calculateWinner(squares);
    if (winner) {
      let winningSquares = [];
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      lines.forEach((line) => {
        const [a, b, c] = line;
        if (squares[a] === winner) {
          winningSquares = [a, b, c]; // Capture the winning indices
        }
      });
      setWinningMove(winningSquares); // Set winning squares to highlight
      if (winner === 'X') {
        setScoreX(scoreX + 1);
        setStatusMessage('X Wins!');
      } else if (winner === 'O') {
        setScoreO(scoreO + 1);
        setStatusMessage('O Wins!');
      }
      resetGame();
      return true;
    } else if (!squares.includes(null)) {
      setStatusMessage("It's a Draw!");
      resetGame();
      return true;
    }
    return false;
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setIsPlayerTurn(true);
    setWinningMove(null); // Reset winning move
    setTimeout(() => setStatusMessage(''), 2000);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const minimax = (newSquares, player) => {
    const availSpots = newSquares.reduce(
      (acc, cur, idx) => (cur === null ? acc.concat(idx) : acc),
      []
    );
    const winner = calculateWinner(newSquares);
    if (winner === 'O') return { score: 10 };
    if (winner === 'X') return { score: -10 };
    if (availSpots.length === 0) return { score: 0 };

    const moves = [];
    for (let i = 0; i < availSpots.length; i++) {
      const move = {};
      move.index = availSpots[i];
      newSquares[availSpots[i]] = player;
      if (player === 'O') {
        const result = minimax(newSquares, 'X');
        move.score = result.score;
      } else {
        const result = minimax(newSquares, 'O');
        move.score = result.score;
      }
      newSquares[availSpots[i]] = null;
      moves.push(move);
    }

    let bestMove;
    if (player === 'O') {
      let bestScore = -Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }

    return moves[bestMove];
  };

  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
        highlight={winningMove && winningMove.includes(i)} // Check if the square is in the winning move
      />
    );
  };

  return (
    <div>
      <div className="status">Score - X: {scoreX} | O: {scoreO}</div>
      <div className="status">{statusMessage}</div>
      <div className="board-row">
        {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
      </div>
      <div className="controls">
        <button className="reset-button" onClick={resetGame}>Reset Game</button>
        <button className="toggle-button" onClick={toggleTheme}>
          {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        </button>
      </div>
    </div>
  );
}

// Square component
function Square({ value, onClick, highlight }) {
  return (
    <button className={`square ${highlight ? 'highlight winning-square' : ''}`} onClick={onClick}>
      {value}
    </button>
  );
}

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

export default App;
