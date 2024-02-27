
import './Cart.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem'
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity } = useContext(CartContext);
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='OptionNoHayItems'>Volver a inicio</Link>
            </div>
        )
    }

    return (
        <div className="Cart">
            {cart.map(p => {
                return <CartItem key={p.id} {...p} />;
            })}

            <h3>Total: ${total.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    ) 
}

export default Cart
