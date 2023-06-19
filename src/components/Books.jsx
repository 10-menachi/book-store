import PropTypes from 'prop-types';
import React from 'react';
import AddNewBook from './AddNewBook';
import Book from './Book';

const Books = ({ books, setBooks }) => {
  const deleteBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };
  const addBook = (book) => {
    const newBooks = [...books, book];
    setBooks(newBooks);
  };
  return (

    <div className="books-div">
      {books.length > 0 ? books.map((book) => (
        <Book
          book={book}
          key={book.id}
          deleteBook={deleteBook}
        />
      )) : (
        <p className="no-books">No books yet. Please add a book.</p>
      )}
      <hr />
      <AddNewBook addBook={addBook} />
    </div>
  );
};
Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    progress: PropTypes.string.isRequired,
    currentChapter: PropTypes.string.isRequired,
  })).isRequired,
  setBooks: PropTypes.func.isRequired,
};
export default Books;
