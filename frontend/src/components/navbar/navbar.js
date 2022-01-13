import { Link } from "react-router-dom";

import './navbar.css';

const NavBar = () => {
    return ( 
        <nav className="nav__container">
            <Link className="nav__link" to="/">Home</Link>
        </nav>
     );
}
 
export default NavBar;