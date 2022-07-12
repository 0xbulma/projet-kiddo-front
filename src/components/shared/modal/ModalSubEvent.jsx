/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { GET_BY_ID } from '../../../graphql/query/users.query';
import { BOOK_EVENT_2 } from '../../../graphql/mutation/users.mutation';

import useAuthContext from '../../../hooks/useAuthContext';

import childProfil from '../../../assets/images/blank_child_profil.svg';
import boyProfil from '../../../assets/images/profil_male_child.svg';
import girlProfil from '../../../assets/images/profil_female_child.svg';

import iconAdd from '../../../assets/icons/icon_add_participant.svg';

import * as dateManager from '../../../utils/DateManager';

function SubEvent({ eventId, closeModal }) {
  const { isAuth, _id } = useAuthContext();

  const [errors, setErrors] = useState([]);
  const [childs, setChilds] = useState([]);
  const [otherPeople, setOtherPeople] = useState(0);

  // Vérification si l'utilisateur est déjà connecté (prévention bug)
  useEffect(() => {
    if (!isAuth) {
      closeModal();
    }
  }, []);

  const { loading: userLoading, error: userError, data: userData } = useQuery(GET_BY_ID, { variables: { id: _id } });

  const handleClickAddChild = (add, child) => {
    if (add) {
      let childList = childs;
      childList.push({ isChild: true, name: child.name, age: 0 });
      setChilds(childs);
    } else {
      setChilds(childs.filter((c) => c.name !== child.name));
    }
  };

  const handleClickAddPeople = (increment) => {
    let val = otherPeople;
    if (increment && val >= 4) {
      setErrors(['Taille maximale du groupe atteinte']);
      return;
    } else {
      setErrors([]);
    }
    setOtherPeople(increment ? val + 1 : val - 1);
  };

  const [bookEvent, { error: bookEventError, loading: bookEventLoading, data: bookEventData }] = useMutation(BOOK_EVENT_2);

  const handleInscription = () => {
    let groups = childs;
    for (let i = 0; i < otherPeople; i++) {
      groups.push({ isChild: false, name: 'participant_' + i, age: 0 });
    }

    bookEvent({
      variables: {
        id: _id,
        eventId: eventId,
        bookedAt: null,
        participant: {
          user: _id,
          booked_at: null,
          group_detail: groups,
        },
      },
    });
  };

  useEffect(() => {
    if (bookEventData) {
      closeModal();
    }
    if (bookEventError) console.log('BookEventError : ', bookEventError);
  }, [bookEventError, bookEventData]);

  return (
    <>
      {userLoading ? (
        <p>Chargement de vos données...</p>
      ) : userError ? (
        <p>Erreur de la récupération de vos données</p>
      ) : (
        <section>
          <h3 className='text-center underline'>Inscription à l'activité</h3>
          <p className='text-kiddoPurple'>Veuillez enregistrer les enfants qui participeront à cette activité.</p>
          <article className='modal-form mt-10'>
            {userData.getUserById?.children.map((child, index) => (
              <ChildCard key={index} child={child} addPeople={handleClickAddChild} />
            ))}

            <div className='flex items-center'>
              <img src={iconAdd} alt='' className='w-8 mr-3' />
              <p>Ajouter d'autres accompagnants à cette activité</p>
            </div>

            <div className='flex items-center justify-center mt-5'>
              <p>Participants : </p>
              <div>
                <span
                  onClick={() => handleClickAddPeople(false)}
                  className='px-2 py-1 rounded-mh shadow-sm shadow-kiddoShadow bg-gray-300 ml-2 hover:shadow-gray-600 transition-all cursor-pointer select-none'>
                  -
                </span>
                <span className='px-5 py-1 rounded-mh shadow-sm shadow-kiddoShadow bg-gray-100'>{otherPeople}</span>
                <span
                  onClick={() => handleClickAddPeople(true)}
                  className='px-2 py-1 rounded-mh shadow-sm shadow-kiddoShadow bg-gray-300 mr-2 hover:shadow-gray-600 transition-all cursor-pointer select-none'>
                  +
                </span>
              </div>
            </div>

            {/* Gestion des messages d'erreurs */}
            <div className='mt-5 flex flex-col'>
              {errors.map((error, index) => (
                <span key={index} className='text-red-600 font-medium text-sm'>
                  *{error}
                </span>
              ))}
            </div>

            <button
              onClick={() => handleInscription()}
              className={
                `bg-kiddoGreen hover:shadow-kiddoGreen shadow-md shadow-kiddoShadow hover:scale-[1.01] transition-all ` +
                (bookEventLoading && 'animate-pulse')
              }>
              {bookEventLoading ? 'Inscription en cours' : 'Inscrire votre groupe'}
            </button>
          </article>
        </section>
      )}
    </>
  );
}

function ChildCard({ child, addPeople }) {
  return (
    <>
      {child.name !== null && child.age !== null && (
        <div className='flex items-center'>
          <input type='checkbox' name='' id='' className='p-2 mr-3' onClick={(e) => addPeople(e.currentTarget.checked, child)} />
          <img src={child.gender === 'boy' ? boyProfil : child.gender === 'girl' ? girlProfil : childProfil} alt='' />
          <div className='flex flex-col ml-3'>
            <span>{child.name}</span>
            <span>{dateManager.getChildAge(child.age)}</span>
          </div>
        </div>
      )}
    </>
  );
}
export default SubEvent;
