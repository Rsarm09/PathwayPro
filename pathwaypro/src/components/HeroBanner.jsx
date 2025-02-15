import React from 'react';
import { Link } from "react-router-dom";
import Img1 from "../assets/img-1.png";

const HeroBanner = () => {
    return (
        <div className="relative py-10 sm:py10 md:py-12 lg:py-28 flex justify-evenly items-center bg-slate-100 p-4">

            <img className='max-w-40 sm:max-w-40 md:max-w-72 lg:max-w-96 relative -right-4 sm:-right-4 md:-right-8 lg:-right-2 ' src={Img1} alt="" />
            {/* Content */}
            <div className=" p-8 sm:p-8 md:p-10 lg:p16  relative right-1 sm:right-1 md:-right-2 lg:right-12  text-bluedark">
                
                {/* Headline */}
                <h1 className="text-base sm:text-base md:text-xl lg:text-4xl font-bold mb-4">
                    Discover Your Path to Becoming a Pro
                </h1>
                <p className="text-xs sm:text-xs md:text-base lg:text-lg mb-6">
                    Gain in-demand skills, learn from expert-led courses, and start your career journey today!
                </p>
                <Link to="/login">
                    <button className="mainBtn bg-bluedark cursor-pointer text-xs sm:text-xs md:text-base lg:text-base">Join for Free</button>
                </Link>
            </div>

        
        </div>
    );
};

export default HeroBanner;


