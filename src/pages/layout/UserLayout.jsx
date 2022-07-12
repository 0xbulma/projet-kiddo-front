import Footer from '../../components/app/footer/Footer';
// import Navbar2 from '../../components/app/header/navbar2/Navbar2';
import Header from '../../components/app/header/Header'


export default function UserLayout({ composant }) {

  return (
    <>
      {/* <Navbar2 /> */}
      <Header />
      <div>{composant}</div>
      <Footer />
    </>
  );
}
