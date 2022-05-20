import { Link, Outlet } from "react-router-dom";
import books from '../data/books';

  
  // const bookList = books.map(book => <ul>{book.slug}</ul>
  // const bookList = )books.map(book => <ul>{book.slug}</ul>
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext"

const Doc = () => {

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div style={{ padding: "50px" }}>
      < div style={{ fontWeight: "bold", fontSize: "40px" }} > Au fil des années, nous avons pu accompagner les meilleurs. </div >
      <br></br>
      <p> Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
      {books.map(book => <div key={book.slug} ><Link to={`/works/${book.slug}`} className={darkMode ? "ul-dark " : "ul-light"}>{book.title}</Link></div>) }
      <Outlet></Outlet>
  </div>
  )

}




export default Doc;