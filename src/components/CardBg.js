import React from 'react'

const CardBj = ({ shoeImg }) => {
    return (
        <div className='cardBg'>
            <img src={shoeImg} alt="shoe"></img>
        </div>
    )
}

export default CardBj;