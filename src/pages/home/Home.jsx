import React from 'react';
import Featured from '../../components/featured/Featured';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

const Home = () => {
  return (
    <div className="Home-container ">
      <Navbar />
      <Header />
      <div className="homeContainer mt-14 flex flex-col w-full max-w-5xl  items-center bg-red-100">
        <Featured />
      </div>
    </div>
  );
};

export default Home;
