import React, { useState } from "react";
import { SiDatabricks } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div name="top" className="navbar">
      <div className="container">
        <div className="logo">
          <SiDatabricks className="icon" />
          <h1>Agro Barcelo</h1>
        </div>

        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/maquinas'>Maquinas</Link></li>
          <li><Link to='/about'>Nosotros</Link></li>
          <li><Link to='/contact'>Contacto</Link></li>
          <button>Log In</button>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {!nav ? <FaBars className="icon" /> : <FaTimes className="icon" />}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
