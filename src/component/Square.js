import React from 'react'
import { calculateWinner } from './../helper';


// we have both option/////

const Square = ({ value, onClick, iswinningSquare }) => {

    console.log('square rerender')
    return (

        <button type="button" className={`square ${iswinningSquare ? 'winning' : ''} ${value === '1' ? 'text-green' : 'text-orange'}`} onClick={onClick}
            style={{ fontWeight: iswinningSquare ? "bold" : "normal" }}>
            { value}</button >
    )
}

// const Square = (props) => {
//     return (

//         <button type="button" className="square">
//         {props.value}</button>
//     )
// }



export default Square;