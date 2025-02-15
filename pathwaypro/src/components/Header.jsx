import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaUserCircle, FaShoppingCart, FaBars, FaTimes, FaGlobe } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-bluedark h-22 shadow-md py-4 px-8 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center justify-center space-x-6">
        <Link to="/" className=" lg:text-4xl font-bold text-slate-100 md:text-xl">Pathway Pro</Link>
        
        <div className="hidden md:flex items-center space-x-6 text-slate-100">
        <Link to="/" className=" lg:text-lg hidden md:inline text-base font-normal text-slate-100">Explore</Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="lg:w-wull hidden md:flex items-center border border-gray-300 rounded-lg px-3 py-1 w-1/2 bg-gray-100 focus:ring-blueprimary md:w-1/5">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search Courses..."
          className="ml-1 w-full bg-transparent focus:outline-none md:text-xs"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 text-slate-100">
        <Link to="/" className="lg:text-lg hidden md:inline text-base font-normal text-slate-100">Degree</Link>
        <Link to="/" className="lg:text-lg hidden md:inline text-base font-normal text-slate-100">Career</Link>
        <Link to="/"> 
          <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-400 transition" />
        </Link>
        <Link to="/"> 
          <FaGlobe className="text-xl cursor-pointer hover:text-gray-400 transition" />
        </Link>
        <Link to="/"> 
          <FaBell className="text-xl cursor-pointer hover:text-gray-400 transition" />
        </Link>
        <Link to="/login">
          <FaUserCircle className="text-xl cursor-pointer hover:text-gray-400 transition" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl md:hidden cursor-pointer text-slate-100">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-16 right-0 w-full text-center bg-slate-100 shadow-md p-4 flex flex-col space-y-4 md:hidden z-20">
          <Link to="/" className="hover:text-slate-100 hover:bg-bluedark  " onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/" className="hover:text-slate-100 hover:bg-bluedark " onClick={() => setMenuOpen(false)}>Explore</Link>
          <Link to="/" className="hover:text-slate-100 hover:bg-bluedark " onClick={() => setMenuOpen(false)}>Degree</Link>
          <Link to="/" className="hover:text-slate-100 hover:bg-bluedark" onClick={() => setMenuOpen(false)}>Career</Link>
          <Link to="/" className="hover:text-slate-100 hover:bg-bluedark" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/" className="hover:text-slate-100 hover:bg-bluedark" onClick={() => setMenuOpen(false)}>Notification</Link>
          <Link to="/" className="hover:text-slate-100 hover:bg-bluedark " onClick={() => setMenuOpen(false)}>Language</Link>
          <Link to="/login" className="hover:text-slate-100 hover:bg-bluedark" onClick={() => setMenuOpen(false)}>Profile</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
