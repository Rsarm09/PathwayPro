import React from 'react';

//components
import HeroBanner from '../components/HeroBanner';
import Description from '../components/Description';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CarouselCard from '../components/CarouselCard';
import Partner from '../components/Partner';


function Homepage() {

  return (
    <>
      <HeroBanner />
      <hr className=' border-2 border-bluedark' />
      <div className='container mx-auto pb-20 mt-20'>
        <h1 className="mainTitle pl-8 md:pl-8 lg:pl-8 text-center ">Popular Courses</h1>
        <CarouselCard/>
        <Features />
        <Testimonials />
        <Description />
        <Partner/>
      </div>
    </>

)
}

export default Homepage