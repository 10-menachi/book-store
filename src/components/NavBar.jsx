import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const theClass = open ? 'open' : 'closed';
  return (
    <nav className="nav-bar">
      <div className="left-items">
        <p className="title">Bookstore CMS</p>
        <div className="stuff">
          <Link to="/" className="books">
            BOOKS
          </Link>
          <Link to="/categories" className="categories">
            CATEGORIES
          </Link>
        </div>
      </div>
      <div className="mobile-menu">
        <AiOutlineClose className="close" onClick={() => setOpen(!open)} />
        <Link to="/">
          BOOKS
        </Link>
        <Link to="/categories">
          CATEGORIES
        </Link>
      </div>
      <HiOutlineUserCircle className={`${theClass} user`} />
      <AiOutlineMenu className="ham" onClick={() => setOpen(!open)} />
    </nav>
  );
};
export default NavBar;
