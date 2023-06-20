import PropTypes from 'prop-types';
import React from 'react';
import AddNewBook from './AddNewBook';
import Book from './Book';

const Books = ({ books, addBook, deleteBook }) => (

  <div className="books-div">
    {books.length > 0 ? books.map((book) => (
      <Book
        book={book}
        key={book.item_id}
        deleteBook={deleteBook}
      />
    )) : (
      <p className="no-books">No books yet. Please add a book.</p>
    )}
    <hr />
    <AddNewBook addBook={addBook} />
  </div>
);
Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,
  addBook: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
};
export default Books;
