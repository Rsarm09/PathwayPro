import React, { useState } from 'react';

import { CARDDATA } from '../data/CardData';

// Components
import MediaCard from '../components/MediaCard';
import SignedInHero from '../components/SignedInHero';


function Homepage() {
    const [cardData, setCardData] = useState(CARDDATA);

    return (
        <div>
            <SignedInHero />
            {/* Course Recommendations */}
            <div className='container mx-auto pb-20 mt-20 px-6'>
                <h2 className="text-2xl font-bold text-gray-800 mt-20">Continue where you left off</h2>
                <MediaCard data={cardData} />
                <h2 className="text-2xl font-bold text-gray-800 mt-20">You may like these courses</h2>
                <MediaCard data={cardData} />
                <h2 className="text-2xl font-bold text-gray-800 mt-20">Because you took Python 101</h2>
                <MediaCard data={cardData} />
            </div>
        </div>
    );
}

export default Homepage;
