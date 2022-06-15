import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar flex items-center bg-sky-500 h-14 justify-center text-white">
      <div className="navbar-container flex  justify-between items-center max-w-5xl w-full ">
        <span className="logo text-3xl font-medium">Booking.com</span>
        <div className="navItems flex w-1/5  justify-center gap-2 text-xl">
          <button className="navButton bg-white text-black mr-2 px-2 rounded-lg">
            Register
          </button>
          <button className="navButton  bg-white text-black mr-2 px-2 rounded-lg">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
