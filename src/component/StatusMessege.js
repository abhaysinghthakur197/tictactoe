import React from 'react'
// import Board from './Board';

const StatusMessege = ({ winner, current }) => {
    // const messege = winner ? `winner is ${winner}` : `next player is ${current.isNext ? '1' : '0'}`;

    const noMoveLeft = current.board.every(el => el !== null);
    return (
        <div className="status-message">
            {winner &&
                <>
                    Winner is <span className={winner === '1' ? 'text-green' : 'text-orange'}>{winner}</span>
                </>
            }
            {!winner && !noMoveLeft &&
                <>
                    next player is <span className={current.isNext ? 'text-green' : 'text-orange'}>{current.isNext ? '1' : '0'}</span>
                </>}
            {!winner && noMoveLeft &&
                <>
                    <span className="text-green">1</span> and <span className="text-orange">0</span> Tied!
                </>}
        </div>
    )
}

export default StatusMessege;