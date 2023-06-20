import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { addBook, deleteBook } from '../redux/books/booksSlice';
import Books from './Books';
import Categories from './Categories';
import NavBar from './NavBar';

const BookStore = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleAddBook = (book) => {
    dispatch(addBook(book));
  };

  const handleDeleteBook = (bookId) => {
    dispatch(deleteBook(bookId));
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books books={books} addBook={handleAddBook} deleteBook={handleDeleteBook} />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
};

export default BookStore;
