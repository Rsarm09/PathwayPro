import React from 'react';
import { FaChartBar, FaPlayCircle, FaPencilAlt, FaLaptop, FaClock, FaWallet } from 'react-icons/fa';

const Features = () => {
    return (
        <section className="m-12 py-12">
            {/* Heading Section */}
            <div className="text-center mb-12">
                <h2 className="mainTitle">Why Choose Pathway Pro?</h2>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
                {/* Feature Card */}
                <div className="text-center border-bluedark border-4 p-6">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-200 rounded-full mb-4">
                        <FaChartBar className="text-2xl text-bluedark" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Gurranteed Experts</h3>

                    <ul className='list-disc flex flex-wrap gap-4 text-left text-sm text-bluedark m-2'>
                        <li>Learn from industry experts with real-world experience.</li>
                        <li>Receive top-quality education in every lesson.</li>
                        <li>Gain insightful guidance from dedicated instructors.</li>
                        <li>Ensure the best learning experience possible.</li>

                    </ul>
                </div>

                {/* Feature Card */}
                <div className="text-center border-bluedark border-4 p-6">
                    <div className="flex items-center justify-center w-16 h-16  mx-auto bg-gray-200 rounded-full mb-4">
                        <FaPlayCircle className="text-2xl text-bluedark" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Anytime, Anywhere</h3>

                    <ul className='list-disc flex flex-wrap gap-4 text-left text-sm text-bluedark m-2'>
                        <li>Learn at your convenience, anytime and anywhere.</li>
                        <li>Choose between short study sessions or deep dives.</li>
                        <li>Customize your schedule to fit your lifestyle.</li>
                        <li>Stay in control of your learning journey.</li>

                    </ul>
                </div>

                {/* Feature Card */}
                <div className="text-center border-bluedark border-4 p-6">
                    <div className="flex items-center justify-center w-16 h-16  mx-auto bg-gray-200 rounded-full mb-4">
                        <FaPencilAlt className="text-2xl text-bluedark" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Comprehensive Material</h3>
                    
                    <ul className='list-disc flex flex-wrap gap-4 text-left text-sm text-bluedark m-2'>
                        <li>Learning should be engaging and hands-on.</li>
                        <li>Courses include interactive exercises and quizzes.</li>
                        <li>Real-world projects help reinforce understanding.</li>
                        <li>Stay motivated with exciting and dynamic lessons.</li>
                    </ul>
                </div>

                {/* Feature Card */}
                <div className="text-center border-bluedark border-4 p-6">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-200 rounded-full mb-4">
                        <FaWallet className="text-2xl text-bluedark" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Flexible Payment</h3>
                    <ul className='list-disc flex flex-wrap gap-4 text-left text-sm text-bluedark m-2'>
                        <li>Access affordable courses with flexible payment options.</li>
                        <li>Invest in your education without breaking the bank.</li>
                        <li>Choose a payment plan that fits your budget.</li>
                        <li>Get quality learning at an accessible price.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Features;
