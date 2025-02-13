import React from 'react';
import { FaSearch } from "react-icons/fa";

const HeroBanner = () => {
    return (
        <div
            className="relative py-20 flex flex-col justify-center items-center bg-blueprimary">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

            {/* Content */}
            <div className="relative z-10 px-4 text-white">
                
                {/* Headline */}
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Discover Your Path to Becoming a Pro
                </h1>
                <p className="text-sm md:text-lg mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro autem quod ipsam eius sed veritatis accusamus voluptatibus est corporis nulla.
                </p>
            <button className="mainBtn">
                    Join for Free
                </button>

                {/* Search Form */}
                <div className="bg-white rounded shadow-lg p-4 w-full flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                    <input
                        type="text"
                        placeholder="Search Courses"
                        className="p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blueprimary w-full transition"
                    />
                    <button className="bg-blueprimary font-semibold text-white px-6 py-3 rounded hover:bg-bluedark flex items-center w-full md:w-auto transition">
                        <span className="mr-2"><FaSearch /></span> Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
