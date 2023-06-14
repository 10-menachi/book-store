/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';
import { v4 } from 'uuid';

const AddNewBook = ({ addBook }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const author = e.target[1].value;
    const book = {
      id: parseInt(v4(), 10),
      category: 'TBC',
      title,
      author,
      progress: '0',
      currentChapter: 'Chapter 1',

    };
    addBook(book);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="add-book-title" placeholder="Book title" required />
      <input type="author" className="add-book-author" placeholder="Book author" required />
      <button type="submit" className="add-book-button">Add Book</button>
    </form>
  );
};

AddNewBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default AddNewBook;
