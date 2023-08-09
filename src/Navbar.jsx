import React from "react";
import { Link } from "react-router-dom";

function Navbar({ count }) {
  console.log(count);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/list">
            <button>List: {count}</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
