
import books from '../data/books';
import { Link } from 'react-router-dom';

  
  // const bookList = books.map(book => <ul>{book.slug}</ul>
  // const bookList = )books.map(book => <ul>{book.slug}</ul>


const Doc = () => {


  return (
    <div>
    < div > Doc </div >
     {books.map(book => <div key={book.slug}><Link to={`/book/${book.slug}`}>{book.title}</Link></div>) }
  </div>
  )

}




export default Doc;