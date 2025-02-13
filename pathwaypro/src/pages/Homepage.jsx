import React, {useState} from 'react';

import { CARDDATA } from '../data/CardData';

//components
import HeroBanner from '../components/HeroBanner';
import MediaCard from '../components/MediaCard';
import Description from '../components/Description';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';


function Homepage() {

  const [cardData, setCardData] = useState(CARDDATA);

  return (
    <>
      <HeroBanner />
      <div className='container mx-auto pb-20 mt-20'>
      <h1 className="mainTitle">Popular Courses</h1>
          <MediaCard data={cardData}/>
          <Features />
          <Testimonials />
          <Description />
      </div>
    </>

)
}

export default Homepage