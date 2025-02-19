import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
    return (
        <div className="relative mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-10 md:gap-4 lg:gap-4 p-8 px-10 sm:px-5 md:px-20 lg:px-20 bg-bluedark text-white ">
            <div className='text-center sm:text-center md:text-left lg:text-left'>
                <p> &copy; 2025 PathwayPro All Rights Reserved</p>
            </div>
           
            <div className="flex flex-grow justify-center items-center gap-4 px-10">
                <ul className="flex gap-10 sm:gap-10 md:gap-5 lg:gap-10 ">
                    <li> 
                        <Link to="/">Home</Link>
                    </li>
                    <li > 
                        <Link to="/">About</Link>
                    </li>
                    <li className=' mr-1 sm:mr-1 md:-mr-3 lg:mr-8'> 
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
                <div className=' flex gap-7 sm:gap-5 md:gap-5 lg:gap-10 items-center'>
                    <FaFacebookSquare />
                    <AiFillInstagram />
                    <IoLogoYoutube />

                    </div>
               
            </div>

        </div>
    )
}

export default Footer