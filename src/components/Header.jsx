import React from 'react';
import { FaBed, FaCarAlt, FaPlane } from 'react-icons/fa';
import { MdCarRental, MdAttractions } from 'react-icons/md';

const Header = () => {
  return (
    <div className="header  flex flex-col items-center h-56 bg-sky-500 justify-center text-white pb-4">
      <div className="header-container flex  justify-start items-center max-w-5xl w-full">
        <button className="navButton flex  items-center  gap-1 text-white border-2 border-white  mr-2 py-1 px-2 rounded-lg">
          <FaBed className="text-xl" /> <span> Stays</span>
        </button>
        <button className="navButton flex  items-center  gap-1 text-white border-2 border-white  mr-2 py-1 px-2 rounded-lg">
          <FaPlane className="text-xl" /> <span> Flights</span>
        </button>
        <button className="navButton flex  items-center  gap-1 text-white border-2 border-white  mr-2 py-1 px-2 rounded-lg">
          <MdCarRental className="text-xl" /> <span> Car Rentals</span>
        </button>

        <button className="navButton flex  items-center  gap-1 text-white border-2 border-white  mr-2 py-1 px-2 rounded-lg">
          <MdAttractions className="text-xl" /> <span> Attractions</span>
        </button>
        <button className="navButton flex  items-center  gap-1 text-white border-2 border-white  mr-2 py-1 px-2 rounded-lg">
          <FaCarAlt className="text-xl" /> <span> Airport taxis</span>
        </button>
      </div>
      <div className="text-block flex   justify-start my-4   max-w-5xl w-full">
        <div className="text-container flex flex-col w-4xl justify-start items-center   gap-2 ">
          <div className="header-title font-mono font-bold text-4xl">
            A lifetime of discounts? It's Genius.
          </div>
          <div className="header-description ">
            Get rewarded for your travels - unlock instant savings of 10% or
            more with a free booking account{' '}
          </div>
        </div>
        <button className="navButton  bg-black text-white ml-4 px-2  rounded-lg text-lg">
          Sign in / Register
        </button>
      </div>
    </div>
  );
};

export default Header;
