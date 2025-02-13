import React from 'react';
import { FaChartBar, FaPlayCircle, FaPencilAlt, FaLaptop, FaClock, FaWallet } from 'react-icons/fa';

const Features = () => {
    return (
        <section className="m-20 py-12">
            {/* Heading Section */}
            <div className="text-center mb-12">
                <h2 className="mainTitle">Why Choose Pathway Pro?</h2>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
                {/* Feature Card */}
                <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-200 rounded-full mb-4">
                        <FaChartBar className="text-2xl text-gray-800" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Gurranteed Experts</h3>
                    <p className="text-gray-600 mt-2">
                    Learn from industry experts who bring real-world experience and top-quality education to every lesson. Our instructors are dedicated to providing insightful guidance, ensuring you get the best learning experience possible.
                    </p>
                </div>

                {/* Feature Card */}
                <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16  mx-auto bg-gray-200 rounded-full mb-4">
                        <FaPlayCircle className="text-2xl text-gray-800" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Anytime, Anywhere</h3>
                    <p className="text-gray-600 mt-2">
                    You can study at your own pace, anytime and anywhere. Whether you prefer to learn in short bursts or deep-dive sessions, you have the freedom to create a schedule that works for you.
                    </p>
                </div>

                {/* Feature Card */}
                <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16  mx-auto bg-gray-200 rounded-full mb-4">
                        <FaPencilAlt className="text-2xl text-gray-800" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Comprehensive Material</h3>
                    <p className="text-gray-600 mt-2">
                    We believe learning should be engaging and hands-on. That’s why our courses include interactive exercises, quizzes, and real-world projects to help reinforce your understanding and keep things exciting.
                    </p>
                </div>

                {/* Feature Card */}
                <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-200 rounded-full mb-4">
                        <FaWallet className="text-2xl text-gray-800" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Flexible Payment</h3>
                    <p className="text-gray-600 mt-2">
                    Access affordable courses with flexible payment options. Invest in your education without breaking the bank.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;
