import React, { useState } from "react";
import Histor from './component/History';
import Board from "./component/Board";
import { calculateWinner } from './helper';
// import { History } from './component/History'
import "./styleofall/root.scss";


const App = () => {

  const [History, setHistory] = useState([{ board: Array(9).fill(null), isNext: true },]);

  const [currentMove, setcurrentMove] = useState(0);

  const current = History[currentMove];

  console.log('History', History);

  // const [isNext, setisNext] = useState(false);
  // console.log('board rerender');

  const winner = calculateWinner(current.board);

  // console.log(winner);

  const messege = winner ? `winner is ${winner}` : `next player is ${current.isNext ? '1' : '0'}`;
  const handleSquareClick = (position) => {

    if (current.board[position] || winner) {
      return;
    }
    setHistory(prev => {

      const last = prev[prev.length - 1];


      const newBoard = last.board.map((Square, pos) => {
        // console.log(Square)
        if (pos === position) {
          return last.isNext ? '1' : '0';
        }


        return Square;
      });

      return prev.concat({ board: newBoard, isNext: !last.isNext })
    });

    // setisNext(prev => !prev);
    setcurrentMove(prev => prev + 1);
  };

  const moveTo = (move) => {
    setcurrentMove(move);
  }


  return (
    <div className="app">
      <h1>Tic Tac Toe!</h1>
      <h2>{messege}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <Histor history={History} moveTo={moveTo} currentMove={currentMove} />
      {/* <h1>Tic Tac Toe!</h1> */}

    </div>
  );
};

export default App;
