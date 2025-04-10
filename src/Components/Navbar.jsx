// Components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navBar, setNavbar] = useState("Menu");
  const [isDestinationHovered, setIsDestinationHovered] = useState(false);

  const showNavbar = () => {
    setNavbar(" Menu showNavbar");
  };

  const removeNavbar = () => {
    setNavbar("Menu");
  };

  const handleDestinationMouseEnter = () => {
    setIsDestinationHovered(true);
  };

  const handleDestinationMouseLeave = () => {
    setIsDestinationHovered(false);
  };

  const destinationDropdownItems = [
    { name: 'Diani Beach', link: '/destination/diani' },
    { name: 'Bush-plane Adventure', link: '/destination/bush-plane' },
    { name: 'Nature (Karura)', link: '/destination/nature' },
    { name: 'Lake Nakuru', link: '/destination/lake-nakuru' },
    { name: 'Culture & Heritage (Kajiado)', link: '/destination/culture' },
    { name: 'Hot Springs (Naivasha)', link: '/destination/hot-springs' },
    // Add more destinations here
  ];

  return (
    <div className='NavBar'>
      <div className='logoDiv'>
        <BiLogoMediumOld className='menuIcon' />
        <span className='maint'>Ou-Trips</span>
      </div>
      <div className={`${navBar} menu`}>
        <ul>
          <li className='navList'>
            <Link to="/travel-app" className='butonl'>Home</Link>
          </li>
          <li
            className='navList'
            onMouseEnter={handleDestinationMouseEnter}
            onMouseLeave={handleDestinationMouseLeave}
          >
            Destinations
            {isDestinationHovered && (
              <div className="dropdown">
                {destinationDropdownItems.map((item) => (
                  <Link key={item.name} to={item.link} className="dropdown-item">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li className='navList'>
            <Link to="/packages" className='butonl'>Itineraries</Link>
          </li>
          <li className='navList'>
            <Link to="/experiences" className='butonl'>Experiences</Link>
          </li>
        </ul>
        <AiFillCloseCircle className='closeIcon' onClick={removeNavbar} />
      </div>
      <Link to="/Booking" className='buton'>Request Qoute</Link>
      <PiDotsNineBold className='icon menuIcon' onClick={showNavbar} />
    </div>
  );
};

export default Navbar;