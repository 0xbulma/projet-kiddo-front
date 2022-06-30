import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import * as gqlQueryRequest from '../../../../graphql/query/users.query';
import useToggle from '../../../../hooks/useToggle';
import CustomInput from '../../../../components/administration/CustomInput';

//Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMailBulk, faPen, faBackwardStep } from '@fortawesome/free-solid-svg-icons';
import profilPic from '../../../../assets/admin/blank_profil_pic.png';

export default function UserProfil() {
  const returnArrowPath = '/administration/users';

  const [user, setUser] = useState();
  const [modifiedPanel, toggleModifiedPanel] = useToggle(false);

  const url = window.location.href.split('/');
  const userId = url[url.length - 1];

  useQuery(gqlQueryRequest.GET_BY_ID, {
    variables: { id: userId },
    onCompleted: (data) => setUser(data.getUserById),
    onError: (err) => console.log('err : ', JSON.stringify(err, null, 4)),
  });

  console.log(user);

  return (
    <div className='flex'>
      <div className='admin-container'>
        <h2 className='text-2xl self-start my-5 ml-5'>
          <Link to={returnArrowPath}>
            <FontAwesomeIcon icon={faBackwardStep} className='hover:text-fuchsia-600 transition-all cursor-pointer select-none' />
          </Link>{' '}
          | Utilisateur
        </h2>

        <section className='flex self-start ml-10'>
          <img src={profilPic} alt='' className='w-40 bg-fuchsia-300' />
          <article className='flex flex-col justify-center ml-4'>
            <span className='font-bold mb-3 text-xl'>
              Bob Chenapan{' | '}
              <FontAwesomeIcon icon={faPen} className='text-gray-500 text-sm' />
              <span className='ml-2 text-sm hover:text-fuchsia-600 transition-all cursor-pointer select-none' onClick={toggleModifiedPanel}>
                {modifiedPanel ? 'Modifier' : 'Consulter'}
              </span>
            </span>
            <div className='mb-3'>
              <span className='mr-3'>
                <FontAwesomeIcon icon={faMailBulk} className='mr-2 text-fuchsia-600' />
                totodu76@gmail.com
              </span>
              <span>
                <FontAwesomeIcon icon={faPhone} className='mr-2 text-fuchsia-600' />
                02.35.01.02.03
              </span>
            </div>
            <span className='text-gray-500'>Adresse complète</span>
          </article>
        </section>

        {modifiedPanel ? <ProfilInfo /> : <ProfilModifier />}
      </div>
    </div>
  );
}

function ProfilInfo() {
  return (
    <section className='w-full grid grid-cols-3 gap-4 px-10 mt-5'>
      <article className='col-span-2 admin-section'>
        <span className='admin-section__title'>Activités récentes...</span>
        <div className='mt-5'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit perferendis, explicabo quae architecto dignissimos modi delectus
            at, quidem fuga amet ad quibusdam magnam exercitationem culpa sit odit assumenda. Itaque.
          </p>
        </div>
      </article>
      <article className='admin-section'>
        <span className='admin-section__title'>Catégories : </span>
        <div className='mt-5'>
          <ul>
            <li>Événements</li>
            <li>Commentaires</li>
            <li>Signalements</li>
          </ul>
        </div>
      </article>
    </section>
  );
}

function ProfilModifier() {
  const [inputValue, setInputValue] = useState();
  console.log(inputValue);

  return (
    <section className='w-full px-10 mt-5 grid grid-cols-2 gap-4'>
      <article className='admin-section'>
        <span className='admin-section__title'>Modification du profil</span>

        <CustomInput label='Pseudo' setState={setInputValue} customWidth='w-[42rem]' />
        <div className='flex'>
          <CustomInput label='Prénom' setState={setInputValue} />
          <CustomInput label='Nom' setState={setInputValue} />
          <CustomInput label='Genre' setState={setInputValue} />
        </div>

        <div className='flex'>
          <CustomInput label='Email' setState={setInputValue} />
          <CustomInput label='Téléphone' setState={setInputValue} />
          <CustomInput label='Profession' setState={setInputValue} />
        </div>

        <CustomInput label='Adresse' setState={setInputValue} customWidth='w-[42rem]' />

        <button className='table-edit-btn mt-10'>Enregistrer</button>
        <button className='table-delete-btn mt-10 ml-3'>Supprimer le profil</button>
      </article>

      <article className='admin-section flex flex-col items-start'>
        <span className='admin-section__title'>Modification des enfants</span>

        <table className='table mt-10'>
          <thead className='bg-gray-50'>
            <tr>
              <th>ID</th>
              <th>Prénom</th>
              <th>Âge</th>
              <th>Modifier</th>
              <th>Supprimer</th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            <tr className='whitespace-nowrap'>
              <td>child._id</td>
              <td>child.name</td>
              <td>child.age</td>
              <td className='px-6 py-4'>
                <Link to='/administration/users' className='table-edit-btn'>
                  Modifier
                </Link>
              </td>
              <td className='px-6 py-4'>
                <Link to='/administration/users' className='table-delete-btn'>
                  Supprimer
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        <button className='table-edit-btn mt-10'>Enregistrer</button>
      </article>
    </section>
  );
}
