import React from 'react';
import Square from './Square'
const Board = ({ board, handleSquareClick, winningSquares }) => {

    // yeha se app .js me ja rhe hai kyoki message me kuch print karwana hai!

    // const [board, setboard] = useState(Array(9).fill(null));

    // const [isNext, setisNext] = useState(false);
    // console.log('board rerender');

    // const handleSquareClick = (position) => {

    //     if (board[position]) {
    //         return;
    //     }
    //     setboard(prev => {

    //         return prev.map((Square, pos) => {
    //             console.log(Square)
    //             if (pos === position) {
    //                 return isNext ? '1' : '0';
    //             }


    //             return Square;
    //         });

    //     });

    //     setisNext(prev => !prev);
    // };

    const renderSquare = (position) => {

        const iswinningSquare = winningSquares.includes(position);
        return (

            <Square value={board[position]}
                onClick={() => handleSquareClick(position)}
                iswinningSquare={iswinningSquare} />
        )

    }
    return (
        <div className="board">
            <div className="board-row">

                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}

                {/* <Square value={board[0]} />
                <Square value={board[1]} />
                <Square value={board[2]} /> */}
            </div>



            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}

                {/* <Square value={board[3]} />
                <Square value={board[4]} />
                <Square value={board[5]} /> */}
            </div>



            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}

                {/* <Square value={board[6]} />
                <Square value={board[7]} />
                <Square value={board[8]} /> */}

            </div>
        </div>
    )
}

export default Board
