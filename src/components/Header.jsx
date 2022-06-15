import React, { useState } from 'react';
import { FaBed, FaCarAlt, FaPlane, FaCalendarAlt } from 'react-icons/fa';
import { MdCarRental, MdAttractions } from 'react-icons/md';
import { ImMan } from 'react-icons/im';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { format } from 'date-fns';
const Header = () => {
  const [openDate, SetOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 0,
    children: 0,
    room: 0,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header  flex flex-col items-center h-56 bg-sky-500 justify-center text-white pb-4 relative">
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
      <div className="header-search-component bg-white text-gray-400 w-full max-w-5xl text-2xl p-4 flex justify-between items-center border-4 border-[#febb02] rounded-md absolute -bottom-8 h-20">
        <div className="input-container flex items-center gap-2 ">
          <FaBed />
          <input
            type="text"
            placeholder="where are you going?"
            className="headerSearchInput outline-none"
          />
        </div>
        <div
          className="input-container  flex  items-center gap-2 cursor-pointer"
          onClick={() => {
            SetOpenDate(!openDate);
          }}
        >
          <FaCalendarAlt />
          <span className="headerSearchText text-lg">
            {`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(
              date[0].endDate,
              'dd/MM/yyyy'
            )}`}
          </span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="absolute top-20"
            />
          )}
        </div>

        <div
          className="input-container  flex items-center gap-2 cursor-pointer"
          onClick={() => setOpenOptions(!openOptions)}
        >
          <ImMan />
          <span className="headerSearchText text-xl">
            {`${options.adult} adult · ${options.children} children · ${options.room} · room`}
          </span>
          {openOptions && (
            <div className="options absolute right-24 top-20 bg-white w-1/4 flex justify-center flex-col  h-36 text-black  items-start rounded-lg gap-2 shadow-2xl 0px 8px 24px p-4">
              <div className="optionsItem flex  w-full justify-between ">
                <span className="optionText text-gray-500">Adult</span>
                <div className="container flex justify-around w-1/2">
                  <button
                    className="optionCounterButton border-2 border-sky-400 w-1/3 h-full rounded-lg"
                    onClick={() => handleOption('adult', 'd')}
                    disabled={options.adult <= 1}
                  >
                    -
                  </button>
                  <span className="number">{options.adult}</span>

                  <button
                    className="optionCounterButton border-2 border-sky-400 w-1/3 h-full rounded-lg"
                    onClick={() => handleOption('adult', 'i')}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionsItem flex  w-full justify-between">
                <span className="optionText text-gray-500">Children</span>
                <div className="container  flex justify-around w-1/2">
                  <button
                    className="optionCounterButton border-2 border-sky-400 w-1/3 h-full rounded-lg"
                    onClick={() => handleOption('children', 'd')}
                    disabled={options.children <= 0}
                  >
                    -
                  </button>
                  <span className="number">{options.children}</span>

                  <button
                    className="optionCounterButton border-2 border-sky-400 w-1/3 h-full rounded-lg"
                    onClick={() => handleOption('children', 'i')}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionsItem flex w-full justify-between">
                <span className="optionText text-gray-500 ">Room</span>
                <div className="container flex justify-around w-1/2 items-center">
                  <button
                    className="optionCounterButton border-2 border-sky-400 w-1/3 h-full rounded-lg"
                    onClick={() => handleOption('room', 'd')}
                    disabled={options.room <= 1}
                  >
                    -
                  </button>
                  <span className="number">{options.room}</span>
                  <button
                    className="optionCounterButton border-2 border-sky-400 w-1/3 h-full rounded-lg"
                    onClick={() => handleOption('room', 'i')}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <button className="navButton  bg-black text-white ml-4 px-2 py-1 rounded-lg text-lg">
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
