import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaUserCircle, FaShoppingCart, FaBars, FaTimes, FaGlobe } from "react-icons/fa";

const Header = ({ cart, setCart }) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const removeFromCart = (courseId) => {
    const newCart = cart.filter(course => course.id !== courseId);
    setCart(newCart);
  };

  return (
    <header className="bg-bluedark h-22 shadow-md py-8 px-20 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center justify-center space-x-6">
        <Link to="/" className=" lg:text-4xl font-bold text-slate-100 md:text-xl">Pathway Pro</Link>
        
      </div>
        <div className="hidden md:flex items-center space-x-6 text-slate-100">
        <Link to="/" className=" lg:text-lg hidden md:inline text-base font-normal text-slate-100">Explore</Link>
        </div>

      {/* Search Bar */}
      <div className="w-1/2 md:w-1/5 lg:w-1/3 hidden md:flex items-center border border-gray-300 rounded-lg px-3 py-1 bg-gray-100 focus:ring-blueprimary">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search Courses..."
          className="ml-1 w-full bg-transparent focus:outline-none md:text-xs"
        />
      </div>
        <Link to="/" className="lg:text-lg hidden md:inline text-base font-normal text-slate-100">Degree</Link>
        <Link to="/" className="lg:text-lg hidden md:inline text-base font-normal text-slate-100">Career</Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 text-slate-100">
        {/* <Link to="/"> 
          <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-400 transition" />
        </Link> */}
        <Link to="/checkout">
          <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-400 transition" />
          {cart.length > 0 && <span className="ml-2 bg-red-500 text-white px-2 py-1 rounded-full">{cart.length}</span>}
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
