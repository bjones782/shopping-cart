import React, { useState } from 'react'

const ShoppingCart = ({ cartItems, removeItem={removeItem} }) => {
    return (
        <div className="shoppingCart">
            {cartItems.map(item => (
                <div key={item.id} className="cardRow">
                    <div className="cardImg">
                        <p>x {item.cartCount}</p>
                        <img src={item.img} alt="item"></img>
                    </div>
                    <div className="cardPrice">
                        <p>${item.price}</p>
                        <i className="fas fa-times" onClick={() => removeItem(item.id)}></i>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default ShoppingCart;