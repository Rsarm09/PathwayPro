import React from 'react';
import { Link } from 'react-router-dom';

const SignedInHome = () => {
    return (
        <div className="relative py-20 flex flex-col justify-start items-center bg-sky-900">

            {/* Content */}
            <div className="relative z-10  text-white w-full pl-24">
                {/* Headline */}
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-left">
                    Welcome, Martin
                </h1>

            </div>
        </div>
    );
};

export default SignedInHome;
