import React from 'react';
import CartImage from "../image/cart.png"

const TotalPrice = ({totalPrice, itemCount }) => {
    return (
        <div className="shoppingCartPrice">
            <h2>Total price: ${totalPrice}</h2>
            <div 
            className="allCartItems"
            style={{background: `url("${CartImage}") no-repeat center/cover`}}
            >
              <div className="itemsAmountWrap">
                  <p>{itemCount}</p>
              </div>  
            </div>
        </div>
    )
}

export default TotalPrice;