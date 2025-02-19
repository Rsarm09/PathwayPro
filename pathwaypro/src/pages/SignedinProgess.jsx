import React from 'react';

// Components

import SignedInHero from '../components/SignedInHero';
import CarouselCard from '../components/CarouselCard';
import WeeklyProgress from '../components/CoursepageComponents/WeeklyProgress';


function SignedInProgress() {

    return (
        <div>
            <SignedInHero />
            {/* Course Recommendations */}
            <div className='container mx-auto pb-20 mt-20 px-6'>
                <h2 className="text-2xl font-bold text-gray-800 mt-20">Continue where you left off</h2>
                <WeeklyProgress />
                
                <h2 className="text-2xl font-bold text-gray-800 mt-20">You may like these courses</h2>
                <CarouselCard/>    
            </div>
        </div>
    );
}

export default SignedInProgress;
