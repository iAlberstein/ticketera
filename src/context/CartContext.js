import React, { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0, 
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const addItem = (item, quantity, stock) => {

        if (!isInCart(item.id)) {
            if (quantity <= stock) {
                const updatedStock = stock - quantity;
                setCart(prev => [...prev, { ...item, quantity, stock: updatedStock }]);
                setTotalQuantity(prevTotalQuantity => prevTotalQuantity + quantity); 
            } 
        } else {
            const updatedCart = cart.map(prod => {
                if (prod.id === item.id) {
                    const updatedQuantity = prod.quantity + quantity;
                    if (updatedQuantity <= prod.stock) {
                        const updatedStock = prod.stock - quantity;
                        return { ...prod, quantity: updatedQuantity, stock: updatedStock };
                    } 
                }
                return prod;
            });
            setCart(updatedCart);
            setTotalQuantity(prevTotalQuantity => prevTotalQuantity + quantity);
        }
    }
    
    const removeItem = (itemId) => {
        const removedItem = cart.find(item => item.id === itemId);
        if (removedItem) {
            const newCart = cart.filter(item => item.id !== itemId);
            setCart(newCart);
            setTotalQuantity(prevTotalQuantity => prevTotalQuantity - removedItem.quantity); 
        }
    }

    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0); 
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    }

    return (
        <CartContext.Provider value={{ cart, totalQuantity, total, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}
