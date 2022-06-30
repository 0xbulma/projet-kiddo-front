import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons';

import CustomInput from '../../../../components/administration/CustomInput';
import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';

import { GET_BY_EMAIL } from '../../../../graphql/query/users.query';
import useToggle from '../../../../hooks/useToggle';

export default function UserTestMutation() {
  const returnArrowPath = '/administration';

  const [email, setEmail] = useState();
  const [user, setUser] = useState();
  const [displayUser, toggleDisplayUser] = useToggle(false);

  const [getUser] = useLazyQuery(GET_BY_EMAIL, {
    onCompleted: (data) => {
      toggleDisplayUser();
      setUser(data.getUserByEmail);
    },
    onError: (err) => console.log(JSON.stringify(err, null, 4)),
  });

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
          <span className='admin-section__title'>Modifier l'utilisateur :</span>

          <div className='flex justify-center align-middle content-center items-center'>
            <CustomInput label='Email' customWidth={'w-[20rem]'} setState={setEmail} />
            <button
              className='bg-green-500 py-2 px-3 rounded-md mt-8 hover:bg-green-400 transition-all'
              onClick={() => getUser({ variables: { email: email } })}>
              Charger
            </button>
          </div>
        </div>

        {displayUser ? <UserPanel user={user} /> : ''}
      </div>
    </div>
  );
}

function UserPanel({ user }) {
  return (
    <div className='w-screen'>
      <article className='admin-section mt-10 px-10 flex justify-center w-11/12'>
        <span className='mx-2 w-24 hover:text-fuchsia-600 cursor-pointer'>Commentaires</span>
        <span className='mx-2'>|</span>
        <span className='mx-2 w-24 text-center hover:text-fuchsia-600 cursor-pointer'>Events</span>
        <span className='mx-2'>|</span>
        <span className='mx-2 w-24 text-center hover:text-fuchsia-600 cursor-pointer'>Amis</span>
      </article>

      <article className='admin-section mt-10'>
        <span className='admin-section__title'>Utilisateur : {user._id}</span>
      </article>
    </div>
  );
}
