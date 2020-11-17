import React from 'react'


// we have both option/////

// const Square = ({ value }) => {
//     return (

//         <button type="button">{value}</button>
//     )
// }

const Square = (props) => {
    return (

        <button type="button" className="square">{props.value}</button>
    )
}



export default Square
