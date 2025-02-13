import React from 'react'
import { Link } from "react-router-dom";

import { useState } from "react";
import { FaSearch, FaBell, FaUserCircle, FaShoppingCart, FaBars, FaTimes, FaGlobe } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-bluedark shadow-md py-3 px-6 flex items-center justify-between">

      {/* Logo */}
      <Link to="/" className="text-xl font-bold">Logo</Link>

      {/* Search Bar */}
      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-1 w-1/3 bg-gray-100 focus:ring-blueprimary">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search Courses..."
          className="ml-2 w-full bg-transparent focus:outline-none"
        />
      </div>

      {/* Tablet & Mobile */}
      <div className="flex items-center space-x-6 text-white">
        <div className="flex items-center justify-center space-x-6">
          <FaShoppingCart className="hidden md:inline text-xl cursor-pointer hover:text-gray-400 transition" />
          <FaBell className="hidden md:inline text-xl cursor-pointer hover:text-gray-400 transition" />
          <FaGlobe className="hidden md:inline text-xl cursor-pointer hover:text-gray-400 transition" />
          <Link to="/login">
            <FaUserCircle className="hidden md:inline text-xl cursor-pointer hover:text-gray-400 transition" />
          </Link>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl md:hidden cursor-pointer">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-16 right-0 w-full text-center bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden z-10">
          <Link to="/" className="hover:text-gray-800" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/" className="hover:text-gray-800" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/login" className="hover:text-gray-800" onClick={() => setMenuOpen(false)}>Profile</Link>
          <Link to="/" className="hover:text-gray-800" onClick={() => setMenuOpen(false)}>Notification</Link>
          <Link to="/" className="hover:text-gray-800" onClick={() => setMenuOpen(false)}>Language</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;

