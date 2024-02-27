import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    if (!products) {
        return <div>No hay productos disponibles.</div>;
    }

    return (
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList