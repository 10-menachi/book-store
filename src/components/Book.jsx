import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBookFromApi } from '../redux/books/booksSlice';

const Book = ({ book, bookId }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteBookFromApi(bookId));
  };
  return (
    <div className="book">
      <div className="div-1">
        <p className="genre">{book.category}</p>
        <p className="book-name">{book.title}</p>
        <p className="author">{book.author}</p>
        <div className="interaction">
          <p className="right">Comments</p>
          <button type="button" className="right" onClick={() => handleDelete()}>Remove</button>
          <p>Edit</p>
        </div>
      </div>
      <div className="div-2">
        <div className="percentage">
          <div className="oval" />
          <div className="words">
            <p className="perc-complete">
              0
              %
            </p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <div className="interaction">
          <p className="current-chapter">Current Chapter</p>
          <p className="lesson">Chapter 1</p>
          <button type="button">Update Progress</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  bookId: PropTypes.string.isRequired,
  book: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
