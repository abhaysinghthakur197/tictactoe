import React from 'react'


// we have both option/////

const Square = ({ value, onClick }) => {
    return (

        <button type="button" className="square" onClick={onClick} >
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