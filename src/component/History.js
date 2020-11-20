import React from 'react'

const Histor = ({ history, moveTo, currentMove }) => {
    return (
        <ul>
            {
                history.map((_, move) => {
                    return (
                        <li key={move} > <button type="button" style={{ fontWeight: move === currentMove ? 'bold' : 'normal', }}
                            onClick={() => {
                                moveTo(move);
                            }}>
                            {move === 0 ? `Go to game start` : `Go to step ${move}`}
                        </button>
                        </li >
                    )
                })
            }

        </ul >
    )
}

export default Histor; 