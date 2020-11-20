import React from 'react'
import { calculateWinner } from './../helper';


// we have both option/////

const Square = ({ value, onClick, iswinningSquare }) => {

    console.log('square rerender')
    return (

        <button type="button" className="square" onClick={onClick} style={{ fontWeight: iswinningSquare ? "bold" : "normal" }}>
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