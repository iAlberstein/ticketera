import './CheckoutForm.css'
import React, { useState } from "react";

const CheckoutForm = ({ onConfirm, total }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name,
            phone,
            email
        };

        onConfirm(userData, total); 
    };

    return (
        <div className="Container">
            <form onSubmit={handleConfirm} className='Form'>
                <label className="Label">
                    <input
                        className="Input"
                        type="text"
                        value={name}
                        placeholder='Ingresá tu nombre'
                        onChange={({ target }) => setName(target.value)}
                        required
                    />
                </label>
                <label className="Label">
                    <input
                        className="Input"
                        type="text"
                        value={phone}
                        placeholder='Ingresá tu teléfono'
                        onChange={({ target }) => setPhone(target.value)}
                        required
                    />
                </label>
                <label className="Label">
                    <input
                        className="Input"
                        type="text"
                        value={email}
                        placeholder='Ingresá tu email'
                        onChange={({ target }) => setEmail(target.value)}
                        required
                    />
                </label>
                <div className="Label">
                    <button type="submit" className="Button">Crear Orden</button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
