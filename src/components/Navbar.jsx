import React from "react";
import { Link } from 'react-router-dom';
import books from '../data/books';
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext"

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  // console.log(books)
  // const bookList = )books.map(book => <ul>{book.slug}</ul>
  return(

    
    <div className={ darkMode ? "navbar navbar-dark" : "navbar navbar-light"}>
      {/* {books.map(book => <ul key={book.slug}><Link to={`/book/${book.slug}`}>{book.title}</Link></ul>)} */}
      <ul className={darkMode ? "ul-dark" : "ul-light"}>
          <Link to="/">Home</Link>
        </ul>
        <ul>
          <Link to="/about">L'agence</Link>
        </ul>
        <ul>
          <Link to="/works">Projets</Link>
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