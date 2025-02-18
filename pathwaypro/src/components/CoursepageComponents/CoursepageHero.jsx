import React, { useState } from 'react';  // Add useState import here
import { useOutletContext } from 'react-router-dom';
import { FaRegPlayCircle, FaUser, FaCertificate, FaUsers, FaCalendarAlt, FaGlobe } from 'react-icons/fa';

const CoursepageHero = () => {
    
    const { cart, setCart } = useOutletContext();
    const [showPopup, setShowPopup] = useState(false);

    const addToCart = () => {
        
        const newCourse = {
            id: 1,  // Unique identifier for the course
            title: "Python 101",
            price: 99.99
        };
        setCart([...cart, newCourse]);
        setShowPopup(true);
    };

    const continueShopping = () => {
        setShowPopup(false);
    };

    const goToCheckout = () => {
        setShowPopup(false);
        // Redirect to checkout page
        window.location.href = '/checkout';
    };

    return (
        <div className="relative py-20 flex flex-col justify-center items-center bg-blueprimary">
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            {/* Content */}
            <div className="relative z-10 px-6 text-white w-full max-w-screen-lg">
                {/* Headline */}
                <h1 className="text-3xl md:text-5xl font-bold mb-5 text-left">
                    Python 101
                </h1>

                {/* Course Details Section */}
                <div className="bg-white p-6 rounded shadow-lg w-full">
                    <h2 className='text-lg text-blueprimary md:text-2xl font-bold mb-4 text-left'>Course Outline</h2>
                    <p className='text-black'>By the end of this course, you’ll have a solid understanding of Python fundamentals and the confidence to write your own programs. You'll be able to solve problems, automate tasks, and take the next step in your coding journey—whether it’s building projects, exploring data science, or diving deeper into programming!</p>
                    
                    {/* Course Info */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2 text-blueprimary font-semibold">
                            <FaRegPlayCircle className="text-lg" />
                            <span>20 Hours of Content</span>
                        </div>
                        <div className="flex items-center space-x-2 text-blueprimary font-semibold">
                            <FaUser className="text-lg" />
                            <span>Expert Instructors</span>
                        </div>
                        <div className="flex items-center space-x-2 text-blueprimary font-semibold">
                            <FaCertificate className="text-lg" />
                            <span>Certificate of Completion</span>
                        </div>
                        <div className="flex items-center space-x-2 text-blueprimary font-semibold">
                            <FaUsers className="text-lg" />
                            <span>10,000+ Enrollments</span>
                        </div>
                        <div className="flex items-center space-x-2 text-blueprimary font-semibold">
                            <FaCalendarAlt className="text-lg" />
                            <span>Self-Paced</span>
                        </div>
                        <div className="flex items-center space-x-2 text-blueprimary font-semibold">
                            <FaGlobe className="text-lg" />
                            <span>Available Worldwide</span>
                        </div>
                    </div>
                    
                    <div>
                        <p className='text-bluedark' >$99.99</p>
                    </div>
                    {/* Continue Button */}
                    <button
                        onClick={addToCart}
                        className="mt-6 w-full bg-blueprimary hover:bg-bluedark text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300">
                        Add to Cart
                    </button>


                    {showPopup && (
                        <>
                            {/* Overlay */}
                            <div className="fixed inset-0 bg-black opacity-50 z-40"></div>

                            {/* Pop-up Message */}
                            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 shadow-lg z-50 border-2 border-bluedark">
                                <p className="text-bluedark text-bold text-center text-2xl">Course added to cart!</p>
                                <div className="flex flex-col gap-5 p-5">
                                    <button className="text-slate-100 bg-bluedark p-1" onClick={continueShopping}>
                                        Continue Shopping
                                    </button>
                                    <button className="text-slate-100 bg-bluedark p-1" onClick={goToCheckout}>
                                        Go to Checkout
                                    </button>
                                </div>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </div>
    );
};

export default CoursepageHero;
