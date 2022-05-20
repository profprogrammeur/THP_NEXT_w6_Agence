import {useParams} from 'react-router-dom'
import { useState, useEffect } from "react";
import books from '../data/books';
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext"



const Book = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { bookSlug } = useParams()
  const [currentBook, setCurrentBook] = useState({
    // slug: "Platon",
    // title: "Platon",
    // author: "Le challenge",
    // description: "Platon a décidé de se lancer à l'époque malgré une crise économique difficile."
  })

  useEffect(() => {
    const foundBook = books.find((book) => book.slug === bookSlug);
    setCurrentBook(foundBook);
  }, [bookSlug])

  console.log(currentBook)
  return (
    <div style={{ padding: "50px" }}>
      <h1>{bookSlug}</h1>
      <h3>{currentBook.author}</h3>
      <p>{currentBook.description}</p>
    </div>
)
 }

export default Book;