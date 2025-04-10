// Components/Destination.js
import React, { useEffect } from 'react';
import './Destination.css';
import { Link } from 'react-router-dom';
import { MdLocationPin } from 'react-icons/md';

import { BsFillCalendarDateFill, BsFillCreditCardFill } from 'react-icons/bs';

import { BiSearchAlt } from 'react-icons/bi';

import { TiLocation } from 'react-icons/ti';

import { GiBeachBag } from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css';




import Image1 from '../Assets/africa.jpg';
import Image2 from '../Assets/bush.plane.jpg';
import Image3 from '../Assets/avenue.jpg';
import Image4 from '../Assets/flamigo.jpg';
import Image5 from '../Assets/culture.jpg';
import Image6 from '../Assets/hotsprings.jpg'
const destinations = [
  {
    id: 1,
    img: Image1,
    name: 'Diani Beach',
    location: 'Kenya',
    rating: 4.8,
    detailsButtonText: 'Explore Diani',
  },
  {
    id: 2,
    img: Image2,
    name: 'Bush-plane Adventure',
    location: 'Nairobi',
    rating: 4.3,
    detailsButtonText: 'See Bush Plane Tours',
  },
  {
    id: 3,
    img: Image3,
    name: 'Nature',
    location: 'Karura',
    rating: 4.6,
    detailsButtonText: 'Discover Nature',
  },
  {
    id: 4,
    img: Image4,
    name: 'LAKE Nakuru',
    location: 'Nakuru',
    rating: 5.0,
    detailsButtonText: 'View Lake Nakuru',
  },
  {
    id: 5,
    img: Image5,
    name: 'Culture&Heritage',
    location: 'Kajiado',
    rating: 6.0,
    detailsButtonText: 'Learn About Culture',
  },
  {
    id: 6,
    img: Image6,
    name: 'HOTSPRINGS',
    location: 'Naivasha',
    rating: 4.8,
    detailsButtonText: 'Visit Hot Springs',
  },
  // ... more destinations if you have them
];

const Destination = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  
  return (
    <div className="destination section ">

      <div className="secContainer">

        <div className='secHeading3'>
          <h3>Explore Our Destinations</h3>
          <p>Discover the best travel destinations for your next adventure.</p>
        </div>
        <div className="destinationContainer">
          
          {destinations.map((destination) => (
            <div className="singleDestination" key={destination.id} data-aos="fade-up">
              <div className="imgDiv">
                <img src={destination.img} alt={destination.name} />
                <div className="descInfo ">
                  <div className="text">
                    <span className="name">{destination.name}</span>
                    <p className="location">{destination.location} <TiLocation className="icon" />
                    </p>
                    
                    {destination.name === 'Diani Beach' && (
                      <Link to="/destination/diani" className='buton'>
                        {destination.detailsButtonText}
                      </Link>
                    )}
                    {destination.name === 'Bush-plane Adventure' && (
                      <Link to="/destination/bush-plane" className='buton'>
                        {destination.detailsButtonText}
                      </Link>
                    )}
                    {destination.name === 'Nature' && (
                      <Link to="/destination/nature" className='buton'>
                        {destination.detailsButtonText}
                      </Link>
                    )}
                    {destination.name === 'LAKE Nakuru' && (
                      <Link to="/destination/lake-nakuru" className='buton'>
                        {destination.detailsButtonText}
                      </Link>
                    )}
                    {destination.name === 'Culture&Heritage' && (
                      <Link to="/destination/culture" className='buton'>
                        {destination.detailsButtonText}
                      </Link>
                    )}
                    {destination.name === 'HOTSPRINGS' && (
                      <Link to="/destination/hot-springs" className='buton'>
                        {destination.detailsButtonText}
                      </Link>
                    )}
                  </div>
                  <span className="rating">{destination.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;