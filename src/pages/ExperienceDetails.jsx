import React,{useEffect}from 'react';
import './ExperienceDetail.css';
import Image2 from '../Assets/fishing.jpg';
import Image3 from '../Assets/walking.jpg';
import Image4 from '../Assets/nairobi.jpg';
import Image5 from '../Assets/ballon.jpg';
import Image6 from '../Assets/migration.jpg';
import Image7 from '../Assets/camel.jpg';
import Image8 from '../Assets/camping.jpg';
import Image9 from '../Assets/zebras.jpg';
import Image10 from '../Assets/boat.jpg';
import Image11 from '../Assets/culture.jpg';
import Image12 from '../Assets/photo.jpg';
import BackgroundImage from '../Assets/background3.png'; // Import the background image
import AOS from 'aos'; // Import the AOS library
  import 'aos/dist/aos.css';

const ExperienceDetail = () => {
useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);



  const experienceData = [
    
    { id: 2, title: 'Serene Fishing Excursion', description: '...', image: Image2 },
    { id: 3, title: 'Guided Nature Walks', description: '...', image: Image3 },
    { id: 4, title: 'Nairobi City Exploration', description: '...', image: Image4 },
    { id: 5, title: 'Hot Air Balloon Safari', description: '...', image: Image5 },
    { id: 6, title: 'The Great Migration Spectacle', description: '...', image: Image6 },
    { id: 7, title: 'Camel Riding Safaris', description: '...', image: Image7 },
    { id: 8, title: 'Immersive Camping Under the Stars', description: '...', image: Image8 },
    { id: 9, title: 'Wildlife Game Drives', description: '...', image: Image9 },
    { id: 10, title: 'Lake Adventures by Boat', description: '...', image: Image10 },
    { id: 11, title: 'Cultural Encounters', description: '...', image: Image11 },
    { id: 12, title: 'Wildlife Photography Safaris', description: '...', image: Image12 },
  ];

  return (
    <div className="experience-list"  data-aos="fade-up"style={{ backgroundImage: `url(${BackgroundImage})` }}> {/* Inline style for background */}
      <div className="Etext">
        <h1>Experiences</h1>
      </div>
      {experienceData.map((experience) => (
        <div key={experience.id} className="experience-card "data-aos="fade-Right">
          <div className="experience-item">
            <div className="image">
              <img
                src={experience.image}
                alt={experience.title}
                className={`experience-image item-${experience.id}`}
              />
            </div>
            <div className="experience-details">
              <h3>{experience.title}</h3>
              <p>{experience.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceDetail;