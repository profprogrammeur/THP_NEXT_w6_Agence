
import {
useParams

} from 'react-router-dom'

import { useState, useEffect } from "react";
import books from '../data/books';

const Book = () => {
  const { bookSlug } = useParams()
  const [currentBook, setCurrentBook] = useState({
    slug: "pars",
    title: "Par",
    author: "Foldingo",
    description: "Qui glisse les conventions du genre.",
  })

  useEffect(() => {
    const foundBook = books.find((book) => book.slug === bookSlug);
    setCurrentBook(foundBook);
  }, [bookSlug])

  console.log(currentBook)
  return (
    <div>
      <h1>{bookSlug}</h1>
      <h3>{currentBook.author}</h3>

    </div>
)
 }

export default Book;