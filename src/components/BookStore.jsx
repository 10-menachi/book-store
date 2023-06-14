/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Books from './Books';
import Categories from './Categories';
import NavBar from './NavBar';

const BookStore = () => {
  const [books, setBooks] = useState([]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books books={books} setBooks={setBooks} />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
};

export default BookStore;
