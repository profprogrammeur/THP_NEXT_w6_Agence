import {useParams} from 'react-router-dom'
import { useState, useEffect } from "react";
import books from '../data/books';

const Book = () => {
  const { bookSlug } = useParams()
  const [currentBook, setCurrentBook] = useState({
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