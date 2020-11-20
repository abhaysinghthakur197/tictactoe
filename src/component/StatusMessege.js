import React from 'react'
// import Board from './Board';

const StatusMessege = ({ winner, current }) => {
    // const messege = winner ? `winner is ${winner}` : `next player is ${current.isNext ? '1' : '0'}`;

    const noMoveLeft = current.board.every(el => el !== null);
    return (
        <h2>
            {winner && `winner is ${winner}`}
            {!winner && !noMoveLeft && `next player is ${current.isNext ? '1' : '0'}`}
            {!winner && noMoveLeft && `The Match is tied`}
        </h2>
    )
}

export default StatusMessege;