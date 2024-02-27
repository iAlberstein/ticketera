import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/' className="MarcaTicketera">
                <h3>TICKETERA</h3>
            </Link>
            <div className="Categories">
               <NavLink to={`/category/musica`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>MÚSICA</NavLink>
               <NavLink to={`/category/teatro`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>TEATRO</NavLink>
               <NavLink to={`/category/sociales`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>SOCIALES</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar