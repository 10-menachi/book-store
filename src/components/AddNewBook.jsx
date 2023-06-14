/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const AddNewBook = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [counter, setCounter] = useState(1); // Initialize the counter

  const handleSubmit = (e) => {
    e.preventDefault();

    const book = {
      id: counter, // Assign the current counter value as the ID
      category: 'TBC',
      title,
      author,
      progress: '0',
      currentChapter: 'Chapter 1',
    };

    addBook(book);
    setTitle('');
    setAuthor('');
    setCounter((prevCounter) => prevCounter + 1); // Increment the counter
    e.target.reset();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-book-title"
        placeholder="Book title"
        required
        onChange={(e) => handleTitleChange(e)}
      />
      <input
        type="text"
        className="add-book-author"
        placeholder="Book author"
        required
        onChange={(e) => handleAuthorChange(e)}
      />
      <button type="submit" className="add-book-button">
        Add Book
      </button>
    </form>
  );
};

AddNewBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default AddNewBook;
