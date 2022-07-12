import Footer from '../../components/app/footer/Footer';
import Navbar2 from '../../components/app/header/navbar2/Navbar2';
import Header from '../../components/app/header/Header';
import { useState } from 'react';
import useEventListener from '../../hooks/useEventListener';

export default function UserLayout({ composant }) {
  const [isMobile, setIsMobile] = useState(false);

  const windowSizeHandler = () => {
    setIsMobile(window.innerWidth < 767);
  };

  useEventListener('resize', windowSizeHandler);

  return (
    <>
      {isMobile && <Header />}
      {!isMobile && <Navbar2 />}
      <div>{composant}</div>
      <Footer />
    </>
  );
}
