import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaUserCircle, FaShoppingCart, FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import logo from "../assets/logoWhite.png"

const Header = ({ cart, setCart }) => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-bluedark h-26 shadow-md py-8 px-7 sm:px-7 md:px-9 lg:px-20 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center justify-center space-x-0 sm:-space-x-1 md:space-x-1 lg:space-x-6 ">
        <Link to="/" className=" lg:text-4xl font-bold text-slate-100 md:text-xl">
          <img className='w-30 mt-4' src={logo} alt="" />
        </Link>
        
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
      <div className="hidden md:flex items-center space-x-12  md:space-x-5 lg:space-x-12 text-slate-100">
        {/* <Link to="/"> 
          <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-400 transition" />
        </Link> */}
        <Link to="/cart">
          {cart.length > 0 && <span className="relative left-2 top-2 ml-2 bg-black text-white px-3 py-1 rounded-full">{cart.length}</span>}
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
      <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl md:hidden cursor-pointer text-slate-100 pr-2">
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
