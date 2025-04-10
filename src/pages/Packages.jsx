// pages/Packages.jsx// pages/Packages.jsx
import React,{useEffect} from 'react';
import './packages.css';
import Image1 from '../Assets/bush and baech.jpg';
import Image2 from '../Assets/chill and vibe.jpg';
import Image3 from '../Assets/cultureheritage.jpg';
import Image4 from '../Assets/family.jpg';
import Image5 from '../Assets/mountainer.jpg';
import Image6 from '../Assets/wilds.jpg';
import Image7 from '../Assets/victoria.jpg';
import Image8 from '../Assets/migration.jpg';
import Image9 from '../Assets/honeymoon.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


const packageData = [





  {
    name: 'Bush & Beach Escape',
    description: 'Experience the best of both worlds with thrilling safari adventures and relaxing beach stays.',
    price: 1500,
    nights: 7,
    location: 'Masai Mara & Diani Beach',
    image: Image1,
  },
  {
    name: 'Chill & Vibe Getaway',
    description: 'Unwind and recharge in serene locations with stunning views and laid-back atmospheres.',
    price: 800,
    nights: 5,
    location: 'Lamu Island',
    image: Image2,
  },
  {
    name: 'Culture & Heritage Tour',
    description: 'Immerse yourself in the rich cultural heritage of Kenya, exploring historical sites and traditions.',
    price: 1200,
    nights: 6,
    location: 'Nairobi & Coastal Region',
    image: Image3,
  },
  {
    name: 'Family Fun Adventure',
    description: 'Create unforgettable memories with your family through exciting activities and family-friendly accommodations.',
    price: 1800,
    nights: 7,
    location: 'Lake Nakuru & Amboseli',
    image: Image4,
  },
  {
    name: 'Mountain Explorer',
    description: 'Challenge yourself with a trek up majestic mountains and enjoy breathtaking panoramic views.',
    price: 1000,
    nights: 4,
    location: 'Mount Kenya',
    image: Image5,
  },
  {
    name: 'Wilds of Kenya Safari',
    description: 'Embark on an unforgettable safari to witness the incredible wildlife of Kenya in their natural habitat.',
    price: 2000,
    nights: 8,
    location: 'Serengeti & Ngorongoro (Extension Available)',
    image: Image6,
  },
  {
    name: 'Victoria Falls Expedition',
    description: 'Witness the awe-inspiring power and beauty of the magnificent Victoria Falls.',
    price: 1300,
    nights: 5,
    location: 'Victoria Falls (Zimbabwe/Zambia)',
    image: Image7,
  },
  {
    name: 'Great Migration Spectacle',
    description: 'Witness one of the world\'s greatest natural wonders, the annual wildebeest migration.',
    price: 2500,
    nights: 9,
    location: 'Masai Mara (July-October)',
    image: Image8,
  },
  {
    name: 'Romantic Honeymoon Retreat',
    description: 'Celebrate your love in idyllic settings with luxurious accommodations and romantic experiences.',
    price: 2200,
    nights: 7,
    location: 'Mombasa & Zanzibar (Optional)',
    image: Image9,
  },
];

const Packages = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="packages" data-aos="fade-up">
      <h2>Sample Itineraries</h2>
      <p>Explore our various travel packages and find the perfect adventure for you!</p>
      <p>Whether you're looking for a relaxing getaway, an adventurous safari, or a cultural experience, we have something for everyone.</p>
      <p>Our packages are designed to provide you with the best experiences, accommodations, and activities.</p>
      <div className='pack'>
        {packageData.map((pkg, index) => (
          <div key={index} className="package-card" data-aos="fade-up">
            <img src={pkg.image} alt={pkg.name} className="package-image" />
            <div className="package-details" >
              <h3>{pkg.name}</h3>
              <p className="package-price">From ${pkg.price} / {pkg.nights} nights</p>
              <p className="package-location">Location: {pkg.location}</p>
              <p className="package-description">{pkg.description}</p>
            
              <Link to="/Booking" className='package-button'>Book now</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;