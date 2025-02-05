import React from 'react';

const Features = () => {
    return (
        <section className="bg-gray-50 py-12">
            {/* Heading Section */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Why Choose Pathway Pro?</h2>
                <p className="text-gray-600 mt-2">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet!
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
                {/* Feature Card */}
                <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-gray-200 rounded-full mb-4">
                        <span className="text-xl">📊</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Components</h3>
                    <p className="text-gray-600 mt-2">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, rem!
                    </p>
                </div>

                {/* Feature Card */}
                <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-gray-200 rounded-full mb-4">
                        <span className="text-xl">▶️</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Mix and Match</h3>
                    <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, rem!
                    </p>
                </div>

                {/* Feature Card */}
                <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-gray-200 rounded-full mb-4">
                        <span className="text-xl">✏️</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Design</h3>
                    <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, rem!
                    </p>
                </div>

                {/* Feature Card */}
                <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-gray-200 rounded-full mb-4">
                        <span className="text-xl">💳</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Payment</h3>
                    <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, rem!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;
