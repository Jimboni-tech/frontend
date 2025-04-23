import './Header.css';
import { FaSearch, FaShoppingCart} from "react-icons/fa";

const Header = () => {
    const currentPage = window.location.pathname;

    return (
        <header>
            <div className="navBar">
                <div id="navBarLogo">
                    <a href="/home">
                        NeoNova
                    </a>    
                </div>
                <div className="navBarElement" style={{borderBottom: currentPage === '/clothing' ? '4px solid black' : '0' }}>
                    <a href="/clothing" >
                        CLOTHING
                    </a>
                </div>

                <div className="navBarElement" style={{borderBottom: currentPage === '/accessories' ? '4px solid black' : '0' }}>
                    <a href="/accessories">
                        ACCESSORIES
                    </a>
                </div>

                <div className="navBarElement" style={{borderBottom: currentPage === '/create' ? '4px solid black' : '0' }}>
                    <a href="/create">
                        CREATE
                    </a>
                </div>

                <div className="navBarSearch">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Search"></input>
                </div>

                <div className="navBarElement">
                    <a href="/cart">
                        <FaShoppingCart id="cartIcon" />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;