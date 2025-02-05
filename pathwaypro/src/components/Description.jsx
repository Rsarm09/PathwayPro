import React from 'react';

const Description = () => {
    return (
        <div className="flex flex-col md:flex-row overflow-hidden p-4 md:p-6 gap-6">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
                <img
                    src="https://images.unsplash.com/photo-1593642532400-2682810df593"
                    alt="Team working on a project"
                    className="w-full h-64 md:h-full object-cover rounded"
                />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-6">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
                    About Pathway Pro
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-center md:text-left">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ipsam libero sed corrupti alias. Reiciendis?
                </p>

                {/* Features List */}
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center justify-center md:justify-start">
                        <span className="text-gray-500 mr-2">•</span>
                        Lorem, ipsum dolor.
                    </li>
                    <li className="flex items-center justify-center md:justify-start">
                        <span className="text-gray-500 mr-2">•</span>
                        Lorem, ipsum dolor.
                    </li>
                    <li className="flex items-center justify-center md:justify-start">
                        <span className="text-gray-500 mr-2">•</span>
                        Lorem, ipsum dolor.
                    </li>
                </ul>
                <button className="mainBtn mt-6 px-5">
                    About Us
                </button>
            </div>
        </div>
    );
};

export default Description;
