
import './CartItem.css'
import React from "react";

const CartItem = ({ id, name, quantity, price, img, stock }) => {

    return (
        <div className="cart-item">
            <h3>{name}</h3>
            <p>Entradas: {quantity}</p>
            <p>Precio unitario: ${price.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </div>
    );
};

export default CartItem;
