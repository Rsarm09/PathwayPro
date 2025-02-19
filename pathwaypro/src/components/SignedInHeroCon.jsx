import React from 'react';
import { Link } from 'react-router-dom';
import SixtyBar from './bar/sixtyBar';

const SignedInHero = () => {
    return (
        <div className="relative py-20 flex flex-col justify-center items-center bg-blueprimary">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

            {/* Content */}
            <div className="relative z-10 px-6 text-white w-full max-w-screen-lg">
                {/* Headline */}
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-left">
                    Welcome, Martin
                </h1>

                {/* Progress Section */}
                <div className="bg-white p-6 rounded shadow-lg w-full">
                    {/* Progress Bar Label */}
                    <p className="text-2xl font-bold text-bluedark">Continue: Python 101</p>
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-lg font-medium text-blueprimary">Your Progress</p>
                        <span className="text-sm font-semibold text-blueprimary">60% Complete</span>
                    </div>

                    {/* Progress Bar */}
                    <SixtyBar/>
                    
                    {/* Continue Button */}
                    <Link 
                    to="/course"
                    className="mt-4 w-full bg-blueprimary hover:bg-bluedark text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300 flex justify-center">
                        Continue Learning
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignedInHero;
