import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/">
          <li className="nav-link">Home</li>
        </Link>
        <Link to="/shop">
          <li className="nav-link">Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
