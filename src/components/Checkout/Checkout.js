import './Checkout.css'
import React, { useState, useContext } from "react";
import { writeBatch, collection, addDoc, Timestamp, doc } from 'firebase/firestore';
import { db } from "../../services/firebase/firebaseConfig";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [orderCreated, setOrderCreated] = useState(false); 
    const { cart, clearCart, totalQuantity } = useContext(CartContext);

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const handleConfirm = async (userData) => {
        setLoading(true);
    
        try {
            const orderRef = await addDoc(collection(db, "orders"), {
                buyer: userData,
                items: cart.map(product => ({ id: product.id, name: product.name, price: product.price, quantity: product.quantity })),
                total: total,
                date: Timestamp.fromDate(new Date())
            });
    
            const batch = writeBatch(db);
            cart.forEach(async (product) => {
                const productId = parseInt(product.id);
                const productRef = doc(db, 'products', productId.toString());
                batch.update(productRef, {
                    stock: product.stock
                });
            });
            await batch.commit();
    
            setOrderId(orderRef.id);
            clearCart();
            setOrderCreated(true); 
        } catch (error) {
            console.error("Error creating order:", error);
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <>
            {orderCreated ? ( 
                <div>
                    <h1>¡Orden creada con éxito!</h1>
                    <p>ID de la orden: {orderId}</p>
                    <a href="/" className="ButtonInicio">Volver a inicio</a>
                </div>
            ) : (
                <div>
                    <CheckoutForm onConfirm={handleConfirm} />
                </div>
            )}
        </>
    );
};

export default Checkout;
