import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <div className="navbar-container">
            <Link to="/" className="navbar-link">
                Főoldal
            </Link>
            <Link to="/about" className="navbar-link">
                Mi ez?
            </Link>
        </div>
    )
}

export default NavBar;
