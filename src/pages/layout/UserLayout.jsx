import React from 'react';

import Header from '../../components/app/header/Header';
import Footer from '../../components/app/footer/Footer';

export default function UserLayout({ composant }) {
  return (
    <>
      <Header />
      <div>{composant}</div>
      <Footer />
    </>
  );
}
