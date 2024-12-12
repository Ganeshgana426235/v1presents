import React, { useState } from 'react';
import './Navbar.css';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import logo from '../../Media/logo.png';

const Navbar = () => {
  // State for controlling the menu visibility
  const [menu, setMenu] = useState(false); // Menu starts hidden

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenu(!menu); // Toggle the visibility state
  };

  return (
    <div className="navbar">
      <div className="logotext">
        <img className="navimage" src={logo} alt="Signature" />
        <h1 className="v1">V1 PRESENTS</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="nav-menu">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/team">About Us</RouterLink>
        </li>
        <li>
          <Link to="./Projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="applynow" smooth={true} duration={500}>
            Apply
          </Link>
        </li>
        <li>
          <Link to="v1logo" smooth={true} duration={500}>
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <div className="menu-option" onClick={toggleMenu}>
        ☰ {/* Hamburger Icon */}
      </div>

      {/* Mobile Menu */}
      <div className={`menu-list ${menu ? 'show-menu' : ''}`}>
        <div className='wrong' onClick={toggleMenu}>⛌</div>
        <ul>
          
          <li>
            <RouterLink to="/" onClick={toggleMenu}>
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/team" onClick={toggleMenu}>
              About Us
            </RouterLink>
          </li>
          <li>
            <Link to="Projects" smooth={true} duration={500} onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="applynow" smooth={true} duration={500} onClick={toggleMenu}>
              Apply
            </Link>
          </li>
          <li>
            <Link to="v1logo" smooth={true} duration={500} onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
