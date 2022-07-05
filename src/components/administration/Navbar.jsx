import smallLogo from '../../assets/admin/main-logo-small.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faUser, faForward, faBackward, faSection } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import useToggle from '../../hooks/useToggle';

function Navbar() {
  const [reduced, setReduced] = useToggle(false);

  if (reduced) {
    return (
      <>
        <div className='fixed h-screen translate-x-0 border-r-2 w-30 bg-cyan-200 border-cyan-400'>
          <article className='flex flex-col items-center justify-center pb-4 my-4 border-b-2'>
            <Link to='/'>
              <img src={smallLogo} alt='' className='w-12 h-12 transition-all hover:scale-105 hover:-rotate-6' />
            </Link>
            <FontAwesomeIcon
              icon={faForward}
              className='mt-2 text-lg transition-all hover:scale-105 hover:cursor-pointer hover:text-fuchsia-700'
              onClick={setReduced}
            />
          </article>

          <article className='flex flex-col'>
            <Link to='/administration/'>
              <FontAwesomeIcon icon={faDashboard} className='px-6 py-5 text-xl transition-all cursor-pointer hover:text-fuchsia-600' />
            </Link>
            <Link to='/administration/users'>
              <FontAwesomeIcon icon={faUser} className='px-6 py-5 text-xl transition-all cursor-pointer hover:text-fuchsia-600' />
            </Link>
            <Link to='/administration/reports'>
              <FontAwesomeIcon icon={faSection} className='px-6 py-5 text-xl cursor-pointer transition-all hover:text-fuchsia-600' />
            </Link>
          </article>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className='fixed w-64 h-screen translate-x-0 border-r-2 bg-cyan-200 border-cyan-400'>
          <article className='flex items-center justify-center pb-4 mx-8 my-4 border-b-2'>
            <Link to='/'>
              <img src={smallLogo} alt='' className='w-12 h-12 mr-2 transition-all hover:scale-105 hover:-rotate-6' />
            </Link>

            <div className='flex flex-col ml-1 text-black'>
              <span className='text-xl'>Kiddo</span>
              <span>Administration</span>
            </div>

            <FontAwesomeIcon
              icon={faBackward}
              className='ml-4 text-lg transition-all hover:scale-105 hover:cursor-pointer hover:text-fuchsia-600'
              onClick={setReduced}
            />
          </article>

          <article>
            <div className='px-6 py-5 text-xl transition-all cursor-pointer hover:bg-fuchsia-400 hover:bg-opacity-50'>
              <Link to='/administration' onClick={(e) => console.log('Click')}>
                <FontAwesomeIcon icon={faDashboard} className='mr-5' />
                Tableau de bord
              </Link>
            </div>

            <div className='px-6 py-5 text-xl transition-all cursor-pointer hover:bg-fuchsia-400 hover:bg-opacity-50'>
              <Link to='/administration/users' onClick={(e) => console.log('Click')}>
                <FontAwesomeIcon icon={faUser} className='mr-5' />
                Utilisateur
              </Link>
            </div>

            <div className='px-6 py-5 text-xl cursor-pointer transition-all hover:bg-fuchsia-400 hover:bg-opacity-50'>
              <Link to='/administration/reports' onClick={(e) => console.log('Click')}>
                <FontAwesomeIcon icon={faSection} className='mr-5' />
                Signalements
              </Link>
            </div>

            {/* <div className='px-6 py-5 text-xl cursor-pointer transition-all hover:bg-fuchsia-400 hover:bg-opacity-50'>
              <Link to='/administration/userTest' onClick={(e) => console.log('Click')}>
                <FontAwesomeIcon icon={faSection} className='mr-5' />
                Test GraphQL
              </Link>
            </div> */}
          </article>
        </div>
      </>
    );
  }
}

export default Navbar;
