import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import AddNewBook from './AddNewBook';
import Book from './Book';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks());
  });

  return (
    <div className="books-div">
      {Object.keys(books).map((book) => (
        <Book key={book} bookId={book} book={books[book][0]} />
      ))}
      <hr />
      <AddNewBook />
    </div>
  );
};
export default Books;
