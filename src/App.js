import React, { useState } from "react";
import Histor from './component/History';
import Board from "./component/Board";
import StatusMessege from './component/StatusMessege';
import { calculateWinner } from './helper';
// import { History } from './component/History'
import "./styleofall/root.scss";


const App = () => {

  const NEW_GAME = [{ board: Array(9).fill(null), isNext: true },]

  const [History, setHistory] = useState(NEW_GAME);

  const [currentMove, setcurrentMove] = useState(0);

  const current = History[currentMove];

  console.log('History', History);

  // const [isNext, setisNext] = useState(false);
  // console.log('board rerender');

  const { winner, winningSquares } = calculateWinner(current.board);

  // console.log(winner);

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

      return prev.concat({ board: newBoard, isNext: !last.isNext });
    });
    // const messege = winner ? `winner is ${winner}` : `next player is ${current.isNext ? '1' : '0'}`;
    // const handleSquareClick = (position) => {

    //   if (current.board[position] || winner) {
    //     return;
    //   }
    // })


    // setisNext(prev => !prev);
    setcurrentMove(prev => prev + 1);
  };

  const moveTo = (move) => {
    setcurrentMove(move);
  }

  const NewGame = () => {
    setHistory(NEW_GAME);
    setcurrentMove(0);
  }

  return (
    <div className="app">
      <h1>Tic <span className="text-green">Tac</span> Toe!</h1>
      <StatusMessege winner={winner} current={current} />
      {/* <h2>{messege}</h2> */}

      <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares} />
      <button type="button" onClick={NewGame} className={`btn-reset ${winner ? 'active' : ''}`}>Restart the Game</button>
      <h2 style={{ fontWeight: "bold" }}>History of The Game</h2>
      <Histor history={History} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls" />
    </div >
  );
};


export default App;
