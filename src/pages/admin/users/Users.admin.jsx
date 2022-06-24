import React, { useState } from 'react';

import { useLazyQuery, useMutation } from '@apollo/client';
import * as gqlRequest from './UsersGQLRequest';

const buttonStyle = 'bg-slate-500 rounded-sm px-3 py-2 mx-3 drop-shadow-lg text-white hover:bg-slate-400 hover:text-black transition-all';

export default function UsersAdmin() {
  const [email, setEmail] = useState();
  const [requestData, setRequestData] = useState();

  const [user, setUser] = useState({
    id: '62b4371e87e4084aaa682c9a',
    input: {
      first_name: 'Toto',
      last_name: 'Tata',
    },
  });

  const [friendRequest, setFriendRequest] = useState({ senderEmail: '', targetEmail: '' });

  const handleChangeForUser = (value, type) => {
    const finalUser = user;
    switch (type) {
      case 0:
        finalUser.id = value;
        break;
      case 1:
        finalUser.input.first_name = value;
        break;
      case 2:
        finalUser.input.last_name = value;
        break;
      default:
        return;
    }

    setUser(finalUser);
  };

  const [getUserRequest] = useLazyQuery(gqlRequest.GET_BY_EMAIL, {
    onCompleted: (data) => setRequestData(JSON.stringify(data, null, 4)),
    onError: (err) => setRequestData(JSON.stringify(err, null, 4)),
  });

  const [modifyUserRequest] = useMutation(gqlRequest.MODIFY_USER, {
    onCompleted: (data) => setRequestData(JSON.stringify(data, null, 4)),
    onError: (err) => setRequestData(JSON.stringify(err, null, 4)),
  });

  const [sendFriendRequest] = useMutation(gqlRequest.FRIEND_REQUEST, {
    onCompleted: (data) => setRequestData(JSON.stringify(data, null, 4)),
    onError: (err) => setRequestData(JSON.stringify(err, null, 4)),
  });

  const getUserRequestVariables = { variables: { email: email } };

  const modifyUserRequestVariables = {
    variables: {
      id: user.id,
      input: user.input,
    },
  };

  const friendRequestVariables = {
    variables: { senderEmail: friendRequest.senderEmail, targetEmail: friendRequest.targetEmail },
  };

  return (
    <>
      <div className='flex flex-col justify-center align-middle items-center content-center'>
        <h2 className='mb-5 font-bold'>UsersAdmin</h2>

        <div className='mb-3'>
          <input type='text' className='' placeholder='_id' onChange={(e) => handleChangeForUser(e.currentTarget.value, 0)} />
          <input type='text' className='' placeholder='FirstName' onChange={(e) => handleChangeForUser(e.currentTarget.value, 1)} />
          <input type='text' className='' placeholder='LastName' onChange={(e) => handleChangeForUser(e.currentTarget.value, 2)} />
          <button className={buttonStyle} onClick={() => modifyUserRequest(modifyUserRequestVariables)}>
            Modifier l'utilisateur
          </button>
        </div>
        <div>
          <input type='text' className='' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          <button className={buttonStyle} onClick={() => getUserRequest(getUserRequestVariables)}>
            Consulter un utilisateur par son email
          </button>
        </div>
        <div className='my-3'>
          <input
            type='text'
            className=''
            placeholder='Sender Email'
            onChange={(e) => setFriendRequest(friendRequest.senderEmail(e.currentTarget.value))}
          />
          <input
            type='text'
            className=''
            placeholder='Target Email'
            onChange={(e) => setFriendRequest(friendRequest.targetEmail(e.currentTarget.value))}
          />
          <button className={buttonStyle} onClick={() => sendFriendRequest(friendRequestVariables)}>
            Envoyer une demande d'amis
          </button>
        </div>
        <h2 className='mt-5'>Résultat des requêtes</h2>
        <textarea name='Toto' id='userResult' cols='80' rows='20' value={requestData}></textarea>
      </div>
    </>
  );
}
