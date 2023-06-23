import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookToApi } from '../redux/books/booksSlice';
import randomIDGenerator from '../utils';

const AddNewBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Action');
  const dispatch = useDispatch();

  const addBook = (book) => {
    dispatch(addBookToApi(book));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const book = {
      item_id: `item${randomIDGenerator()}`,
      category,
      title,
      author,
    };
    addBook(book);
    setTitle('');
    setAuthor('');
    e.target.reset();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
      <select
        className="form-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Series">Series</option>
        <option value="Drama">Drama</option>
        <option value="Economy">Economy</option>
        <option value="Comedy">Comedy</option>
      </select>
      <button type="submit" className="add-book-button">
        Add Book
      </button>
    </form>
  );
};

export default AddNewBook;
