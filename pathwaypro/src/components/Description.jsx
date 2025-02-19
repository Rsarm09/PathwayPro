import React from 'react';

const Description = () => {
    return (
        <div className="my-20 flex flex-col md:flex-row overflow-hidden p-4 md:p-6 gap-6">
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
                <h3 className="mainTitle pb-5">
                    About Pathway Pro
                </h3>

                {/* Description */}
                <p className="text-bluedark mb-6 text-left">
                Pathway Pro is an online learning service where everyone has an opportunity to learn what they are passionate about. From design to web scripting, Pathway Pro has it all. We make sure we deliver top quality learning material with elite instructors to get you started to your passion! 
                </p>

                <button className="mainBtn mt-1 px-5">
                    About Us
                </button>
            </div>
        </div>
    );
};

export default Description;
