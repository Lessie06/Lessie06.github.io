import React from "react";
import {Link} from 'react-router-dom';
import '../styling/Navbar.css'

function NavBar() {
  return (
    <div >
    <div >
      <nav>
        <ul className="nav_links">
          <li>
            <a href="#">
              <Link exact to="/">
                Home
              </Link>
            </a>
          </li>
          <li>
            <a href="#">
              <Link to="/AboutMe">About Me</Link>
            </a>
          </li>
          <li>
            <a href="#">
              <Link to="/ContactMe"> Contact Me</Link>
            </a>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  );
}

export default NavBar;
