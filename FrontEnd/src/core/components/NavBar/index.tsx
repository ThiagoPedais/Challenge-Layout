import './style.scss';
import 'bootstrap/js/src/collapse.js'
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-md navbar-dark main-nav">
            <div className="container-fluid">
                <a href="/" className="nav-logo-text">
                    <h4>Carros Top</h4>
                </a>

                <button
                    className="navbar-toggler " 
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#dscatalog-navbar"
                    aria-controls="dscatalog-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

            <div className="collapse navbar-collapse" id="dscatalog-navbar">
                <ul className="navbar-nav offset-md-4 main-menu">
                    <li>
                        <a href="/" >Home</a>
                    </li>
                    <li>
                        <a href="/" >Catálogo</a>
                    </li>                    
                </ul>
            </div>
        </nav>
    );

}

export default NavBar;