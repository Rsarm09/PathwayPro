import React from 'react';

const MediaCard = ({ data }) => {
    return (
        <div className='m-20'>
            <h1 className="text-3xl font-bold text-gray-800">Reccommended Courses</h1>
            <section className="flex flex-wrap justify-center">
                {data.map((item) => (
                    <div
                        className="relative max-w-sm rounded border-2 border-gray-400 rounded overflow-hidden shadow-lg m-5 flex flex-col justify-between"
                        key={item.id}
                    >
                        {/* Image */}
                        <img className="w-full" src={item.image} alt="PLACEHOLDER" />

                        {/* Title and Description */}
                        <div className="px-6 py-4 flex-grow">
                            <div className="font-bold text-xl mb-2">Lorem ipsum dolor sit amet.</div>
                            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quaerat saepe sapiente consectetur quos in at quibusdam delectus velit ab.</p>
                        </div>

                        {/* Button */}
                        <div className="px-6 py-4 flex justify-end">
                            <span className="mainBtn">
                                Learn More
                            </span>
                        </div>
                    </div>
                ))}
            </section>
                <div className="px-6 pb-4 flex justify-end">
                    <span className='text-gray-700 text-base font-bold'>
                        View More
                    </span>
                </div>
        </div>
    );
};

export default MediaCard;
