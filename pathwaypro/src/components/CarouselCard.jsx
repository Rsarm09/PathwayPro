import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CARDDATA } from '../data/CardData';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";

function CarouselCard() {

  const [cardData, setCardData] = useState(CARDDATA);
  const blueDark = "#1E6091"; 
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,  
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1,
        }
      }
    ]
  };
  
    return (
        <div>
          {/* Inject custom styles for arrow color */}
      <style>
        {`
          .slick-prev:before, .slick-next:before {
            color: ${blueDark} !important;
          }
        `}
      </style>
           <Slider {...settings}>
                {cardData.map((item) => (
                  <div className='mb-20  '>
                   <section className="flex flex-wrap justify-center">
                    <Link
                        to="/course"
                        className="relative w-60 h-80 rounded overflow-hidden shadow-lg m-5 transition-transform duration-300 transform hover:scale-115 border-2 border-solid border-bluedark group cursor-pointer"
                        key={item.id}
                    >
                        {/* Background Image */}
                        <img
                            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            src={item.image}
                            alt={item.title}
                        />

                        {/* Dark Overlay on Hover */}
                        <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-75 group-hover:bg-black group-hover:bg-opacity-40 "></div>

                        {/* Title at the Top */}
                        <div className="absolute top-4 left-4 text-slate-100 font-bold text-xl">
                            {item.title}
                        </div>

                        {/* Hover Pills (Appear on Hover) */}
                        <div className="absolute top-16 left-4 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <span className="bg-blue-500 text-slate-100 text-xs font-semibold px-3 py-1 rounded-full">
                                Beginner-Friendly
                            </span>
                            <span className="bg-green-500 text-slate-100  text-xs font-semibold px-3 py-1 rounded-full">
                                Hands-On Projects
                            </span>
                            <span className="bg-yellow-500 text-slate-100  text-xs font-semibold px-3 py-1 rounded-full">
                                Certificate Included
                            </span>
                        </div>

                        {/* Description (Appears on Hover) */}
                        <div className="absolute bottom-15 text-slate-100 px-5 text-sm opacity-0 group-hover:opacity-100 transition select-none">
                            {item.desc}
                        </div>

                        {/* "Learn More" at the Bottom (Centered) */}
                        <div className="absolute bottom-4 w-full flex justify-end pr-5 items-center bg-bluedark text-slate-100 font-semibold text-md">
                            Learn More
                            <FaLongArrowAltRight className="ml-2" />
                        </div>
                    </Link>
                </section>
                </div>
                ))}
          </Slider>
      </div>

    ) 
  }
  

    export default CarouselCard;

