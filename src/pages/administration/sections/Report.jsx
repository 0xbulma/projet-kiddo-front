import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons';

export default function Signalement() {
  const returnArrowPath = '/administration';

  const signalments = [];
  return (
    <div className='flex'>
      <div className='admin-container'>
        <h2 className='text-2xl self-start my-5 ml-5'>
          <Link to={returnArrowPath}>
            <FontAwesomeIcon icon={faBackwardStep} className='hover:text-fuchsia-600 transition-all cursor-pointer select-none' />
          </Link>{' '}
          | Signalements :
        </h2>

        <div className='w-screen'>
          <article className='admin-section mt-10 px-10 flex justify-center w-11/12'>
            <span className='mx-2 w-24 hover:text-fuchsia-600 cursor-pointer'>Commentaires</span>
            <span className='mx-2'>|</span>
            <span className='mx-2 w-24 text-center hover:text-fuchsia-600 cursor-pointer'>Events</span>
            <span className='mx-2'>|</span>
            <span className='mx-2 w-24 text-center hover:text-fuchsia-600 cursor-pointer'>Amis</span>
          </article>

          <article className='mt-10 flex-col admin-section'>
            <span className='admin-section__title'>Signalement : X</span>
            <table className='table mt-5 -mx-5'>
              <thead className='bg-gray-50'>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Crée le</th>
                  <th>Modifié le</th>
                  <th>Consulter</th>
                  <th>Supprimer</th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                {signalments.map((report, index) => (
                  <tr key={index} className='whitespace-nowrap text-center'>
                    <td>A</td>
                    <td>B</td>
                    <td>C</td>
                    <td>D</td>
                    <td className='px-6 py-4'>
                      <Link to={`/administration/`} className='table-show-btn'>
                        Consulter
                      </Link>
                    </td>
                    <td className='px-6 py-4'>
                      <Link to='/administration/users' className='table-delete-btn'>
                        Supprimer
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        </div>
      </div>
    </div>
  );
}
