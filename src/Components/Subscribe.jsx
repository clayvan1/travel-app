
import React,{useEffect}from 'react';
import './Subscribe.css';
import imagee from '../Assets/subscribe.jpeg';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Subscribe = () => {
    useEffect(() => {
      AOS.init({
        duration: 2000,
      });
    }, []);
    
  return (
    <div className='subscribe section container' data-aos="fade-up">
      <div className='secContainer grid'>
        <img src={imagee} alt="subscribe" className='subimage' />
        <div className='textDiv'>
          <h4>Best way to start your Journey!</h4>
          <p>
            we offer personalised itineraries tailored to individual preferences and interests.
          </p>
          {/* Use the Link component to navigate to the /Booking route */}
          <Link to="/Booking" className='buton'>START HERE</Link>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;