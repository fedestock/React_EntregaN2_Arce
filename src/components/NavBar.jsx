import { Link, NavLink } from "react-router-dom";
import { categories } from "../data/products";
import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-mark">H</span>
          <span className="navbar__logo-text">Hauss</span>
        </Link>

        <nav className="navbar__nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "navbar__link" + (isActive ? " navbar__link--active" : "")
            }
          >
            Todo
          </NavLink>
          {categories.map((cat) => (
            <NavLink
              key={cat.id}
              to={`/category/${cat.id}`}
              className={({ isActive }) =>
                "navbar__link" + (isActive ? " navbar__link--active" : "")
              }
            >
              {cat.label}
            </NavLink>
          ))}
        </nav>

        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
