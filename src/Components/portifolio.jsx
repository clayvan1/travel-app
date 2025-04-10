import React, { useRef, useEffect, useState } from 'react';
import './portifolio.css';
import { Link } from 'react-router-dom';
import Image1 from '../Assets/bush and baech.jpg';
import Image2 from '../Assets/chill and vibe.jpg';
import Image3 from '../Assets/cultureheritage.jpg';
import Image4 from '../Assets/family.jpg';
import Image5 from '../Assets/mountainer.jpg';
import Image6 from '../Assets/wilds.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portifolio = () => {
  useEffect(() => {
      AOS.init({
        duration: 2000,
      });
    }, []);
  const portfolioGridRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const portfolioData = [
    { id: 1, url: Image1, title: 'Bush and Beach Escapes', description: 'Experience the best of both worlds with our bush and beach adventures.', price: 499 },
    { id: 2, url: Image2, title: 'Relaxing Getaways', description: 'Unwind and recharge in serene and beautiful locations.', price: 349 },
    { id: 3, url: Image3, title: 'Cultural Heritage Tours', description: 'Immerse yourself in the rich culture and heritage of the region.', price: 599 },
    { id: 4, url: Image4, title: 'Family Adventures', description: 'Create unforgettable memories with our family-friendly itineraries.', price: 699 },
    { id: 5, url: Image5, title: 'Mountain Expeditions', description: 'Conquer majestic peaks and enjoy breathtaking mountain scenery.', price: 799 },
    { id: 6, url: Image6, title: 'Wildlife Safaris', description: 'Embark on thrilling safaris to discover incredible wildlife.', price: 899 },
    // You can add more portfolio items here
  ];

  const scrollLeft = () => {
    if (portfolioGridRef.current) {
      portfolioGridRef.current.scrollLeft -= 400;
    }
  };

  const scrollRight = () => {
    if (portfolioGridRef.current) {
      portfolioGridRef.current.scrollLeft += 400;
    }
  };

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
  }, []);

  return (
    <div className='itinerary' data-aos="fade-up">
      <div className='text' data-aos="fade-up">
        <h1>Sample Iteranries</h1>
        <p>Explore our diverse travel itineraries that cater to all types of travelers.</p>
        <p>From thrilling adventures to relaxing getaways, we have something for everyone.</p>
        <p>Discover the perfect itinerary for your next journey!</p>
      </div>
      <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
      <div
        className={`portfolio-grid ${isTouchDevice ? 'touch-scroll-enabled' : ''}`}
        ref={portfolioGridRef}
        style={{
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
        }}
      >
        {portfolioData.map((item) => (
          <div key={item.id} className="portfolio-item" style={{ scrollSnapAlign: 'start' }}>
            <img src={item.url} alt={item.title} className="portfolio-image" />
            <div className="portfolio-details" data-aos="fade-up">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="portfolio-price">Price: ${item.price}</p>
            </div>
          </div>
        ))}
        {/* "See More" button as a Link */}
        <Link to="/packages" className="see-more-button buton" style={{ scrollSnapAlign: 'start' }}>See More</Link>
      </div>
      <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
    </div>
  );
};

export default Portifolio;