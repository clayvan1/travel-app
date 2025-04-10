
import { Link } from 'react-router-dom';
import './Experience.css';
import Image1 from '../Assets/gorilla.jpg';
import Image2 from '../Assets/fishing.jpg';
import Image3 from '../Assets/walking.jpg';
import Image4 from '../Assets/nairobi.jpg';
import Image5 from '../Assets/background2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';



const Experiences = () => {
   useEffect(() => {
      AOS.init({
        duration: 2000,
      });
    }, []);


  const experiencesData = [
    { id: 1, title: 'Gorilla Trekking', imageUrl: Image1, detailsLink: '/experiences/gorilla-trekking' },
    { id: 2, title: 'Fishing Excursion', imageUrl: Image2, detailsLink: '/experiences/fishing-excursion' },
    { id: 3, title: 'Nature Walks', imageUrl: Image3, detailsLink: '/experiences/nature-walks' },
    { id: 4, title: 'Nairobi City Tour', imageUrl: Image4, detailsLink: '/experiences/nairobi-city-tour' },

    // Add more images as needed
  ];

  return (
    <div className="experiences-container" style={{ backgroundImage: `url(${Image5})` }} data-aos="fade-up">
      <div className="experiences-info">
        <h2>Explore Our Unique Adventures</h2>
        <p>Discover a range of incredible experiences tailored for the adventurous soul. Click below to learn more about our offerings.</p>
        <Link to="/experiences" className="all-experiences-button">
          View All Experiences
        </Link>
      </div>
      <div className="experience-grid" data-aos="fade-up">
        {experiencesData.map((experience, index) => (
          <div key={experience.id} className={`experience-item item-${index + 1}`}>
            <div className="image-containers">
              <img src={experience.imageUrl} alt={experience.title} />
            </div>
            <h3>{experience.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;