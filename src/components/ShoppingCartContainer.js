import React from 'react'
import ShoppingCart from './ShoppingCart'
import TotalPrice from './TotalPrice'

const ShoppingCartContainer = ({ hiddenMenu, totalPrice, itemCount, cartItems, removeItem }) => {
    return(
        <div className={`shoppingCart Container ${!hiddenMenu ? "" : "hidden"}`}>
            <ShoppingCart cartItems={cartItems} removeItem={removeItem}/>
            <TotalPrice totalPrice={totalPrice} itemCount={itemCount}/>
        </div>
    ) 
}

export default ShoppingCartContainer