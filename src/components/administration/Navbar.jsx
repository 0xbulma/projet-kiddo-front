import smallLogo from '../../assets/admin/main-logo-small.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Import scss
import './_navbar.scss';

function Navbar() {
  return (
    <>
      <div className='admin-navbar'>
        <article className='admin-navbar__header'>
          <Link to='/'>
            <img src={smallLogo} alt='' className='' />
          </Link>

          <div className='flex flex-col text-black'>
            <span className='text-xl'>Kiddo</span>
            <span>Administration</span>
          </div>
        </article>

        <article>
          <div className='admin-navbar__item'>
            <FontAwesomeIcon icon={faDashboard} className='mr-5' />
            <Link to='/administration' onClick={(e) => console.log('Click')}>
              Tableau de bord
            </Link>
          </div>

          <div className='admin-navbar__item'>
            <FontAwesomeIcon icon={faUser} className='mr-5' />
            <Link to='/administration/users' onClick={(e) => console.log('Click')}>
              Utilisateur
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}

export default Navbar;
