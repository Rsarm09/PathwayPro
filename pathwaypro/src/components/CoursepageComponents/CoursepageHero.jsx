import React, { useState } from 'react';  // Add useState import here
import { useOutletContext, useNavigate  } from 'react-router-dom';
import { FaRegPlayCircle, FaUser, FaCertificate, FaUsers, FaCalendarAlt, FaGlobe, FaRegHeart } from 'react-icons/fa';
import python from "../../assets/CodingImg.jpg" 

const CoursepageHero = () => {
    
    const { cart, setCart } = useOutletContext();
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const addToCart = () => {
        
        const newCourse = {
            id: 1,  // Unique identifier for the course
            title: "Python 101",
            price: 59.99
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
        navigate("/cart");
    };

    return (
        <div className="relative py-20 flex flex-col justify-center items-center bg-blueprimary">
            <img className='absolute inset-0 opacity-70  h-full w-full' src={python} alt="" />

            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            {/* Content */}
            <div className="relative z-10 px-6 text-white w-full max-w-screen-lg">
                {/* Headline */}
                <h1 className="text-3xl md:text-5xl font-bold mb-5 text-left">
                    Python 101
                </h1>
            
                {/* Course Details Section */}
                <div className="bg-white p-10 px-2 sm:px-5 lg:px-20 rounded shadow-lg w-full">
                    <h2 className='text-lg text-blueprimary md:text-2xl font-bold mb-4 text-left'>Course Outline</h2>
                    <p className='text-black'>By the end of this course, you’ll have a solid understanding of Python fundamentals and the confidence to write your own programs. You'll be able to solve problems, automate tasks, and take the next step in your coding journey—whether it’s building projects, exploring data science, or diving deeper into programming!</p>
                    
                    {/* Course Info */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2 text-blueprimary font-semibold">
                            <FaRegPlayCircle className="text-sm sm:text-sm md:text-base lg:text-lg" />
                            <span>20 Hours of Content</span>
                        </div>
                        <div className="flex items-center space-x-2 text-blueprimary font-semibold">
                            <FaUser className="text-sm sm:text-sm md:text-base lg:text-lg" />
                            <span>Expert Instructors</span>
                        </div>
                        <div className="flex items-center space-x-2 text-blueprimary font-semibold">
                            <FaCertificate className="text-sm sm:text-sm md:text-base lg:text-lg" />
                            <span>Certificate of Completion</span>
                        </div>
                        <div className="flex items-center space-x-2 text-blueprimary font-semibold">
                            <FaUsers className="text-sm sm:text-sm md:text-base lg:text-lg" />
                            <span>10,000+ Enrollments</span>
                        </div>
                        <div className="flex items-center space-x-2 text-blueprimary font-semibold">
                            <FaCalendarAlt className="text-sm sm:text-sm md:text-base lg:text-lg" />
                            <span>Self-Paced</span>
                        </div>
                        <div className="flex items-center space-x-2 text-blueprimary font-semibold">
                            <FaGlobe className="text-sm sm:text-sm md:text-base lg:text-lg" />
                            <span>Available Worldwide</span>
                        </div>
                    </div>
                    
                    <div className='flex justify-star items-center space-x-4'>
                        <span className='text-black text-xl mt-5' >$59.99</span>
                            <div className='flex items-center gap-3'>
                                <button
                                    onClick={addToCart}
                                    className="mt-12 secBtn text-white font-semibold p-2 rounded shadow-md transition duration-300">
                                    Add to Cart
                                </button>
                                <FaRegHeart className='text-black cursor-pointer hover:text-bluedark text-2xl mt-6'/>
                            </div>
                        
                    </div>

                    {showPopup && (
                        <>
                            {/* Overlay */}
                            <div className="fixed inset-0 bg-black opacity-50 z-40"></div>

                            {/* Pop-up Message */}
                            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 p-2 pt-10 sm:p-2 md:p-10 shadow-lg z-50 border-2 border-bluedark">
                                <p className="text-bluedark text-bold text-center text-lg md:text-2xl pb-5">Course added to cart!</p>
                                <div className="flex flex-col gap-2 p-5">
                                    <button className="text-slate-100 p-1 secBtn " onClick={continueShopping}>
                                        Continue Shopping
                                    </button>
                                    <button className="text-slate-100 secBtn p-1"  to="/cart" onClick={goToCheckout}>
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
