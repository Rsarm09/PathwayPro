import React from 'react';
import { Link } from "react-router-dom";
import Img1 from "../assets/photo-1.png";

const HeroBanner = () => {
    return (
        <div className="relative py-20 flex justify-evenly items-center bg-slate-100 p-4">

            {/* Content */}
            <div className="sm:p-8 md:p-10 sm:pl-6 md:pl-10 text-bluedark">
                
                {/* Headline */}
                <h1 className="text-xl sm:text-xl md:text-2xl lg:text-5xl font-bold mb-4">
                    Discover Your Path to Becoming a Pro
                </h1>
                <p className="text-xs sm:text-xs md:text-base lg:text-lg mb-6">
                    Gain in-demand skills, learn from expert-led courses, and start your career journey today!
                </p>
                <Link to="/login">
                    <button className="mainBtn cursor-pointer">Join for Free</button>
                </Link>

            </div>


                    <img className='relative sm:w-sm md:w-1/4 lg:w-1/4 sm:right-6 md:right-10 lg:right-11' src={Img1} alt="" />

                    
        </div>
    );
};

export default HeroBanner;
