import React from 'react';

import Header from '../../components/app/header/Header';
import Footer from '../../components/app/footer/Footer';
import Navbar2 from '../../components/app/header/navbar2/Navbar2';

export default function UserLayout({ composant }) {
  return (
    <>
      {/* <Header /> */}
      <Navbar2 />
      <div>{composant}</div>
      <Footer />
    </>
  );
}
