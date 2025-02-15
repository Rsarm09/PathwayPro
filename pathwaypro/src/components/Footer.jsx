import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
    return (
        <div className="relative mx-auto flex p-8 bg-bluedark text-white">
            <div>
                <p> &copy; 2025 PathwayPro All Rights Reserved</p>
            </div>

           ]
            <div className="flex flex-grow justify-end items-center gap-10">
                <ul className="flex">
                    <li className='mr-10'> 
                        <Link to="/">About</Link>
                    </li>
                    <li> 
                        <Link to="/">Contact</Link>
                    </li>
                    <li> 
                        <Link to="/"></Link>
                    </li>
                </ul>
                <FaFacebookSquare />
                <AiFillInstagram />
                <IoLogoYoutube />
            </div>
        </div>
    )
}

export default Footer