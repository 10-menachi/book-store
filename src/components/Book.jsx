import PropTypes from 'prop-types';
import React from 'react';

const Book = ({ book, deleteBook }) => (
  <div className="book">
    <div className="div-1">
      <p className="genre">{book.category}</p>
      <p className="book-name">{book.title}</p>
      <p className="author">{book.author}</p>
      <div className="interaction">
        <p className="right">Comments</p>
        <button type="button" className="right" onClick={() => deleteBook(book.id)}>Remove</button>
        <p>Edit</p>
      </div>
    </div>
    <div className="div-2">
      <div className="percentage">
        <div className="oval" />
        <div className="words">
          <p className="perc-complete">
            {book.progress}
            %
          </p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="interaction">
        <p className="current-chapter">Current Chapter</p>
        <p className="lesson">{book.currentChapter}</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    progress: PropTypes.string.isRequired,
    currentChapter: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
