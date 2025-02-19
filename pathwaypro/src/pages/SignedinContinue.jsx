import React from 'react';

// Components

import SignedInHeroCon from '../components/SignedInHeroCon';
import CarouselCard from '../components/CarouselCard';
import WeeklyContinue from '../components/CoursepageComponents/WeeklyContinue';

function SignedInContinue() {

    return (
        <div>
            <SignedInHeroCon />
            {/* Course Recommendations */}
            <div className='container mx-auto pb-20 mt-20 px-6'>
                <h2 className="text-2xl font-bold text-gray-800 mt-20">Continue where you left off</h2>
                <WeeklyContinue />
                <h2 className="text-2xl font-bold text-gray-800 mt-20">You may like these courses</h2>
                <CarouselCard/>
            
            </div>
        </div>
    );
}

export default SignedInContinue;
