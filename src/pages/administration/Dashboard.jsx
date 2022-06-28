import { Link } from 'react-router-dom';

// Import assets
import './_dashboard.css';

export default function Dashboard() {
  return (
    <div className='flex'>
      <article className='admin-container'>
        <h2 className='text-2xl self-start my-5 ml-5'>Tableau de bord</h2>
        <div className='admin-section'>
          <span className='admin-section__title'>Bienvenue !</span>
          <p className='my-10'>
            Espace administration et modération du site <strong>kiddo.fr</strong>
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis totam, suscipit aliquam adipisci magnam, ex ratione similique in
            natus, consequatur omnis eveniet. Non nulla nobis eveniet eum harum tempora voluptatum.
          </p>
          <Link to='/' className='admin-section__button'>
            Retourner sur le site Kiddo.fr
          </Link>
        </div>
      </article>
    </div>
  );
}
