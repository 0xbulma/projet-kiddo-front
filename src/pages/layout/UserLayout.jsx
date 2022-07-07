import React from 'react';

// import Header from '../../components/app/header/Header';
import Footer from '../../components/app/footer/Footer';
import Navbar2 from '../../components/app/header/navbar2/Navbar2';

export default function UserLayout({ composant }) {
  return (
    <>
      {/* DEBUG RESPONSIVE */}
      <div className='fixed top-0 left-0 bg-white flex flex-col border-2 border-black z-10'>
        <span className='text-green-500 sm:text-red-500'>SM TEXT</span>
        <span className='text-green-500 md:text-red-500'>MD TEXT</span>
        <span className='text-green-500 lg:text-red-500'>LG TEXT</span>
        <span className='text-green-500 xl:text-red-500'>XL TEXT</span>
      </div>
      {/* DEBUG RESPONSIVE */}

      {/* <Header /> */}
      {/* <Header /> */}
      <Navbar2 />
      <div>{composant}</div>
      <Footer />
    </>
  );
}
