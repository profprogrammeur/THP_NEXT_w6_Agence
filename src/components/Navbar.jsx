import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext"

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return( 
    <div className={ darkMode ? "navbar navbar-dark" : "navbar navbar-light"}>
      <ul >
        <Link to="/" className={darkMode ? "ul-dark" : "ul-light"}>Home</Link>
        </ul>
        <ul>
        <Link to="/about" className={darkMode ? "ul-dark" : "ul-light"}>L'agence</Link>
        </ul>
        <ul>
        <Link to="/works" className={darkMode ? "ul-dark" : "ul-light"}>Projets</Link>
        </ul>
        <ul>
          <button
            onClick={toggleDarkMode}
            className={darkMode ? "button-light" : "button-dark"}
            style={{width:150, height:50, marginRight:50}}
        >{darkMode ? "DAY" : "NIGHT"}</button>
        </ul>
      </div>
  )
};

export default Navbar;