import React from 'react'
import Button from './Button'

const CardInfo = ({ shoePrice, updateCart }) => {
    return (
        <div className='cardinfo'>
            <p>${shoePrice}</p>
            <Button addItem={updateCart}/>
        </div>
    )
}

export default CardInfo;