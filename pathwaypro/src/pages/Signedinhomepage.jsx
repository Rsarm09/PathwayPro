import React, { useState } from 'react';
import { SIGNINHOMEDATA } from '../data/SignInHomeData';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import Img2 from "../assets/img-2.png"

// Components

import SignedInHome from "../components/SignedInHome";

function Homepage() {

    const [Data, setCardData] = useState(SIGNINHOMEDATA);

    const handleClick = () => {
        window.scrollTo(0, 0);
      };

    return (
        <div>
            <SignedInHome />
            {/* All Courses */}
            <div className='container mx-auto pb-20 mt-20 px-6'>
                <h2 className="text-2xl font-bold text-gray-800 mt-20">All Courses</h2>

                <div className='mb-20 '>
                    <section className="flex flex-wrap justify-start">
                     <Link
                        to="/progress"
                        onClick={handleClick}
                        className="relative w-60 h-80 rounded-lg overflow-hidden shadow-lg m-5 transition-transform duration-300 transform hover:scale-115 border-2 border-solid border-bluedark group cursor-pointer"
                        
                    >
                        {/* Background Image */}
                        <img
                            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            src={Img2}
                            alt="Python"
                        />

                        {/* Dark Overlay on Hover */}
                        <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-75 group-hover:bg-black group-hover:bg-opacity-40 "></div>

                        {/* Title at the Top */}
                        <div className="absolute top-4 left-4 text-slate-100 font-bold text-xl">
                            Python 101
                        </div>

                        {/* Description (Appears on Hover) */}
                        <div className="absolute top-12 text-slate-100 px-4 text-sm opacity-0 group-hover:opacity-100 transition select-none">
                        Learn Python fundamentals with hands-on exercises and real-world applications!
                        </div>

                        {/* Hover Pills (Appear on Hover) */}
                        <div className="absolute bottom-14 left-4 flex flex-col gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <span className="bg-blue-500 text-slate-100 text-xs font-semibold px-3 py-1 rounded-lg">
                                Beginner-Friendly
                            </span>
                            <span className="bg-green-500 text-slate-100  text-xs font-semibold px-3 py-1 rounded-lg">
                                Hands-On Projects
                            </span>
                            <span className="bg-yellow-500 text-slate-100  text-xs font-semibold px-3 py-1 rounded-lg">
                                Certificate Included
                            </span>
                        </div>

                        {/* "Learn More" at the Bottom (Centered) */}
                        <div className="absolute bottom-4 w-full flex justify-end pr-5 items-center bg-bluedark text-slate-100 font-semibold text-md">
                            Get Started
                            <FaLongArrowAltRight className="ml-2" />
                        </div>
                    </Link>
    
            </section>
            <p className='flex justify-end text-blueprimary font-bold cursor-pointer hover:underline'>View More</p>
        </div>


                {/* Recommended Courses */}
                <h2 className="text-2xl font-bold text-gray-800 mt-20">You may like these courses</h2>
        
                <div className='mb-20 '>
                    <section className="flex flex-wrap justify-start">
                    {Data.map((item) => (
                     <Link
                        to="/"
                        onClick={handleClick}
                        className="relative w-60 h-80 rounded-lg overflow-hidden shadow-lg m-5 transition-transform duration-300 transform hover:scale-115 border-2 border-solid border-bluedark group cursor-pointer"
                        key={item.id}
                    >
                        {/* Background Image */}
                        <img
                            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            src={item.image}
                            alt={item.title}
                        />

                        {/* Dark Overlay on Hover */}
                        <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-75 group-hover:bg-black group-hover:bg-opacity-40 "></div>

                        {/* Title at the Top */}
                        <div className="absolute top-4 left-4 text-slate-100 font-bold text-xl">
                            {item.title}
                        </div>

                        {/* Description (Appears on Hover) */}
                        <div className="absolute top-12 text-slate-100 px-4 text-sm opacity-0 group-hover:opacity-100 transition select-none">
                            {item.desc}
                        </div>

                        {/* Hover Pills (Appear on Hover) */}
                        <div className="absolute bottom-14 left-4 flex flex-col gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <span className="bg-blue-500 text-slate-100 text-xs font-semibold px-3 py-1 rounded-lg">
                                Beginner-Friendly
                            </span>
                            <span className="bg-green-500 text-slate-100  text-xs font-semibold px-3 py-1 rounded-lg">
                                Hands-On Projects
                            </span>
                            <span className="bg-yellow-500 text-slate-100  text-xs font-semibold px-3 py-1 rounded-lg">
                                Certificate Included
                            </span>
                        </div>

                        {/* "Learn More" at the Bottom (Centered) */}
                        <div className="absolute bottom-4 w-full flex justify-end pr-5 items-center bg-bluedark text-slate-100 font-semibold text-md">
                            Learn More
                            <FaLongArrowAltRight className="ml-2" />
                        </div>
                    </Link>
                ))}
            </section>
            <p className='flex justify-end text-blueprimary font-bold cursor-pointer hover:underline'>View More</p>
        </div>
                
            </div>
        </div>
    );
}

export default Homepage;

