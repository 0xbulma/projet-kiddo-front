import Footer from '../../components/app/footer/Footer';
import Navbar2 from '../../components/app/header/navbar2/Navbar2';

export default function UserLayout({ composant }) {

  return (
    <>
      <Navbar2 />
      <div>{composant}</div>
      <Footer />
    </>
  );
}
