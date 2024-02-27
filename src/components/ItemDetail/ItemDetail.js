import './ItemDetail.css';
import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
    
        const item = {
            id,
            name,
            price,
            stock
        };

        addItem(item, quantity, stock);

    };
    

    return (
        <article className="CardItem-ItemDetail">
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section className="CardContent">
                <header className="Header">
                    <h2 className="ItemHeader">{name}</h2>
                </header>
                <p className="Info"> {description}</p>
            </section>
            <footer className="ItemFooter">
                <p className="Info">Entrada general <br/> ${price.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                <p>Disponibles <br/>{stock}</p>
                {quantityAdded > 0 ? (
                    <Link to="/cart" className="Option">
                        Terminar compra
                    </Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )}
            </footer>
        </article>
    );
};

export default ItemDetail;
