import React, { useState } from "react";
import Board from "./component/Board";
import { calculateWinner } from './helper';

import "./styleofall/root.scss";

const App = () => {

  const [board, setboard] = useState(Array(9).fill(null));

  const [isNext, setisNext] = useState(false);
  console.log('board rerender');

  const winner = calculateWinner(board);

  console.log(winner);

  const messege = winner ? `winner is ${winner}` : `next player is ${isNext ? '1' : '0'}`;
  const handleSquareClick = (position) => {

    if (board[position] || winner) {
      return;
    }
    setboard(prev => {

      return prev.map((Square, pos) => {
        console.log(Square)
        if (pos === position) {
          return isNext ? '1' : '0';
        }


        return Square;
      });

    });

    setisNext(prev => !prev);
  };


  return (
    <div className="app">
      <h1>Tic Tac Toe!</h1>
      <h2>{messege}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  )
}

export default App;
