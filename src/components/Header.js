import "./Header.css";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <i className="bi bi-envelope-open-fill"></i>
          <span>Estatery</span>
        </div>
      </Link>

      <nav className="nav-items">
        <span className="nav-item">Rent</span>
        <span className="nav-item">Buy</span>
        <span className="nav-item">Sell</span>

        <NavLink to="/favourites">
          <span className="nav-item">Favourites</span>
        </NavLink>
        <span className="nav-item">
          <select name="manage-property" id="manage-property">
            <option value="manage-prop">Manage Property</option>
            <option value="a">dummy 1</option>
            <option value="b">dummy 2</option>
            <option value="c">dummy 3</option>
          </select>
        </span>
      </nav>
      <div className="auth">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Signup</button>
      </div>
    </header>
  );
}
