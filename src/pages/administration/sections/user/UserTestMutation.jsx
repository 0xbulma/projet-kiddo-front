import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons';

import CustomInput from '../../../../components/administration/CustomInput';
import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';

import { CONNECT_USER, GET_BY_EMAIL } from '../../../../graphql/query/users.query';

export default function UserTestMutation() {
  const returnArrowPath = '/administration';

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // const [user] = useState();
  // const [displayUser] = useToggle(false);

  const [connectUser, { data }] = useLazyQuery(CONNECT_USER);
  //console.log(loading, error, data);

  const [getUser, { data: d2 }] = useLazyQuery(GET_BY_EMAIL);

  useEffect(() => {
    if (data) {
      console.log(data);
    }

    if (d2) {
      console.log(d2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, d2]);

  return (
    <div className='flex'>
      <div className='admin-container'>
        <h2 className='text-2xl self-start my-5 ml-5'>
          <Link to={returnArrowPath}>
            <FontAwesomeIcon icon={faBackwardStep} className='hover:text-fuchsia-600 transition-all cursor-pointer select-none' />
          </Link>{' '}
          | Utilisateur : Test GraphQL
        </h2>

        <div className='admin-section'>
          <span className='admin-section__title'>Se connecter :</span>

          <div className='flex justify-center align-middle content-center items-center'>
            <CustomInput label='Email' customWidth={'w-[20rem]'} setState={setEmail} />
            <CustomInput label='Password' customWidth={'w-[20rem]'} setState={setPassword} />
            <button
              className='bg-green-500 py-2 px-3 rounded-md mt-8 hover:bg-green-400 transition-all'
              onClick={() => connectUser({ variables: { email: email, password: password } })}>
              Se connecter
            </button>
          </div>
        </div>

        <div className='admin-section mt-10'>
          <span className='admin-section__title'>Charger :</span>

          <div className='flex justify-center align-middle content-center items-center'>
            <CustomInput label='Email' customWidth={'w-[20rem]'} setState={setEmail} />
            <button
              className='bg-green-500 py-2 px-3 rounded-md mt-8 hover:bg-green-400 transition-all'
              onClick={() => getUser({ variables: { email: email } })}>
              Charger
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// function UserPanel({ user }) {
//   return (
//     <div className='w-screen'>
//       <article className='admin-section mt-10 px-10 flex justify-center'>
//         <span className='mx-2 w-24 hover:text-fuchsia-600 cursor-pointer'>Commentaires</span>
//         <span className='mx-2'>|</span>
//         <span className='mx-2 w-24 text-center hover:text-fuchsia-600 cursor-pointer'>Events</span>
//         <span className='mx-2'>|</span>
//         <span className='mx-2 w-24 text-center hover:text-fuchsia-600 cursor-pointer'>Amis</span>
//       </article>

//       <article className='admin-section mt-10'>
//         <span className='admin-section__title'>Utilisateur :</span>
//       </article>
//     </div>
//   );
// }
