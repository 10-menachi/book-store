/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="nav-bar">
    <div className="left-items">
      <p className="title">Bookstore CMS</p>
      <Link to="/" className="books">
        BOOKS
      </Link>
      <Link to="/categories" className="categories">
        CATEGORIES
      </Link>
    </div>
    <HiOutlineUserCircle className="user" />
  </nav>
);
export default NavBar;
