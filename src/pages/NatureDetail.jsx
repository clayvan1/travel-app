import React from 'react';
import './Diani.css';
import Image1 from '../Assets/alafjiri villaas.jpg';
import Image2 from '../Assets/borabora.jpg';
import Image3 from '../Assets/camel.jpg';
import Image4 from '../Assets/golf.jpg';
import Image5 from '../Assets/leopard beach resort.jpg';
import Image6 from '../Assets/shimba.jpg';
import Image7 from '../Assets/swahili beache.jpg';
import Image8 from '../Assets/canoe.jpg';
import Image9 from '../Assets/Kaya Kinondo.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom'; 

const dianiDetails = [
  { src: Image1, alt: "Alafjiri Villas", title: "Luxury Stays", description: "Indulge in breathtaking ocean views and unparalleled comfort." },
  { src: Image2, alt: "Bora Bora Wildlife Park", title: "Wildlife Encounters", description: "Discover the wonders of nature in Diani's own wildlife haven." },
  { src: Image3, alt: "Camel Riding", title: "Desert Adventures", description: "Embark on a memorable journey across the sandy landscapes." },
  { src: Image4, alt: "Diani Golf Club", title: "Tee Time", description: "Enjoy a round of golf on a stunning coastal course." },
  { src: Image5, alt: "Leopard Beach Resort", title: "Beachfront Bliss", description: "Experience ultimate relaxation by the shores of the Indian Ocean." },
  { src: Image6, alt: "Shimba Hills National Reserve", title: "Nature Trails", description: "Explore the rich biodiversity and scenic beauty of Shimba Hills." },
  { src: Image7, alt: "Swahili Beach", title: "Pristine Sands", description: "Unwind on the dazzling white sands of Swahili Beach." },
  { src: Image8, alt: "Canoeing Excursion", title: "Water Adventures", description: "Navigate the serene mangrove forests and coastal waterways." },
  { src: Image9, alt: "Kaya Kinondo Sacred Forest", title: "Cultural Heritage", description: "Immerse yourself in the history and spirituality of Kaya Kinondo." },
  // You can add more accommodation images here
  { src: Image1, alt: "Accommodation 1", description: "Description for Accommodation 1" },
  { src: Image2, alt: "Accommodation 2", description: "Description for Accommodation 2" },
  { src: Image3, alt: "Accommodation 3", description: "Description for Accommodation 3" },
  { src: Image4, alt: "Accommodation 4", description: "Description for Accommodation 4" },
  { src: Image5, alt: "Accommodation 5", description: "Description for Accommodation 5" },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const accommodationSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const DianiDetail = () => {
  const firstThreeImages = dianiDetails.slice(0, 3);
  const nextThreeImages = dianiDetails.slice(3, 6);
  const accommodationImages = dianiDetails.slice(6);

  const dianiHistory = (
    <div className='diani-history'>
      <h2>A Glimpse into Diani's Past</h2>
      <div className='history-columns'>
        <p>
          Diani's history is a rich tapestry woven from ancient trade routes, Swahili culture, and colonial influences. For centuries, the Kenyan coast, including what is now Diani, served as a vital hub for maritime trade. Arab traders, explorers, and settlers were drawn to the region's natural harbors and access to valuable resources.
        </p>
        <p>
          The Swahili people, a unique culture blending Bantu and Arab traditions, flourished along the coast. Their influence is evident in the local architecture, language, and customs. Diani, like other coastal settlements, was part of this vibrant Swahili world. Later, European colonial powers arrived, leaving their mark on the region's development. Today, Diani is a popular tourist destination, attracting visitors with its stunning beaches and diverse heritage.
        </p>
      </div>
    </div>
  );

  return (
    <div className='Diani'>
      <div className='diani-home'>
        <Slider {...settings}>
          {dianiDetails.map((item, index) => (
            <div className='slider-item' key={`slider-${index}`}>
              <img src={item.src} alt={item.alt} className='slider-image' />
              <div className='slider-text-overlay'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className='diani-intro'>
        <p>
          Diani Beach, a jewel on the Kenyan coast, offers an idyllic escape with its powdery white sands, turquoise waters, and swaying palm trees. This tropical paradise is renowned for its vibrant atmosphere, diverse attractions, and warm hospitality, making it a perfect destination for relaxation and adventure.
        </p>
      </div>

      {dianiHistory}

      <div className='destination-diani'>
        <h2>Explore Diani</h2>
        <div className='image-row'>
          {firstThreeImages.map((item, index) => (
            <div className='row-image-container' key={`destination-${index}`}>
              <img src={item.src} alt={item.alt} className='row-image' />
              <p className='image-text'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='diani-activities'>
        <h2>Things to Do</h2>
        <div className='circular-image-row'>
          {nextThreeImages.map((item, index) => (
            <div className='circular-image-container' key={`activity-${index}`}>
              <img src={item.src} alt={item.alt} className='circular-image' />
              <p className='image-text'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='diani-accomodation'>
        <h2>Featured Accommodations</h2>
        <Slider {...accommodationSliderSettings}>
          {accommodationImages.map((item, index) => (
            <div className='accommodation-slide' key={`accommodation-${index}`}>
              <img src={item.src} alt={item.alt} className='accommodation-image' />
              <p className='image-text'>{item.description}</p>
            </div>
          ))}
        </Slider>
        <Link to="/Booking" className='request-quote-button'>Request Qoute</Link>
      </div>
    </div>
  );
};

export default DianiDetail;