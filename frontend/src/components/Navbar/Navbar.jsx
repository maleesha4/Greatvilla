import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-logo">
        GREAT<span>VILLA</span>
      </div>


      <ul className="nav-links">

        <li>
          <a href="#about">
            About
          </a>
        </li>


        <li>
          <a href="#rooms">
            Rooms
          </a>
        </li>


        <li>
          <a href="#amenities">
            Amenities
          </a>
        </li>


        <li>
          <a href="#booking" className="nav-btn">
            Book Now
          </a>
        </li>

      </ul>


    </nav>
  );
}

export default Navbar;