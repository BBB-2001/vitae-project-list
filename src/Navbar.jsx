import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5"; // SlHome yerine IoHome kullanın
import { FiShoppingBag } from "react-icons/fi";
import "./Navbar.css";
function Navbar({ count }) {
  return (
    <nav className="navbar">
      <ul className="no-bullets">
        <li className="justify">
          <Link className="home-button" to="/">
            <IoHomeOutline className="home" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/list">
            <button className="shop-button">
              <FiShoppingBag className="shop" />: {count}
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
