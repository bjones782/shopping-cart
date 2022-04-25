import React from 'react';


const Button = ({addItem}) => {
    return (
        <button onClick={addItem}>Add to Cart</button>
    )
}

export default Button;