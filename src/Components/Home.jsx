import React, { useEffect } from 'react';
import './Home.css';
import video from '../Assets/wildlife.mp4';
import { AiOutlineSwapRight } from 'react-icons/ai';

import Image1 from '../Assets/home africa.jpg';
import Image2 from '../Assets/home animal.jpg';
import Image3 from '../Assets/lake.jpg';
import Image4 from '../Assets/kilimanjaro.jpg';
import Image5 from '../Assets/bird.jpg';
import Image6 from '../Assets/zebras.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const handleGetStartedClick = () => {
    const popularPlacesSection = document.querySelector('.middle');
    if (popularPlacesSection) {
      popularPlacesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="Home">
      <div className="videoBg">
        <video src={video} loop muted></video>
      </div>
      <div className="sectionText">
        <h1 data-aos="fade-up">UNLOCK YOUR TRAVEL DREAM WITH US !</h1>
        <p>
          Discover the worlds most astounding nature life is so short for a trip
        </p>
        <button
          className="buton flex"
          data-aos="fade-up"
          onClick={handleGetStartedClick}
        >
          GET STARTED <AiOutlineSwapRight className="icon" />
        </button>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3 data-aos="fade-up">Popular Places</h3>
          <div className="images grid" data-aos="fade-up">
            <img src={Image1} alt="Africa" />
            <img src={Image2} alt="Animal" />
            <img src={Image3} alt="Lake" />
            <img src={Image4} alt="Kilimanjaro" />
            <img src={Image5} alt="Bird" />
            <img src={Image6} alt="Zebras" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;