import Footer from '../../components/app/footer/Footer';
import Header from '../../components/app/header/Header';

export default function UserLayout({ composant }) {
  return (
    <>
      <Header />
      <div>{composant}</div>
      <Footer />
    </>
  );
}
