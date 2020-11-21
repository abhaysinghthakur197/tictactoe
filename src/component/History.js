import React from 'react'

const Histor = ({ history, moveTo, currentMove }) => {
    return (
        <div className="history-wrapper">
            <ul className="history">
                {
                    history.map((_, move) => {
                        return (
                            <li key={move} > <button type="button"
                                className={`btn-move ${move === currentMove ? 'active' : ''}`}
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
        </div>
    )
}

export default Histor; 