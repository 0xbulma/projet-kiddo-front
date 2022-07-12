/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import activityPic from '../../../assets/images/activity_card_default.webp';
import ActivityCard from '../../../components/shared/card/ActivityCard';

import * as dateManager from '../../../utils/DateManager';
import Skelet from '../../../components/shared/loadingfiles/Skelet';

// Import: assets
import { FaShareSquare, FaMapMarkerAlt, FaCalendarAlt, FaTimes } from 'react-icons/fa';

import { getCategoryColorForCSS } from '../../../utils/constants/categoryColors';
import useAuthContext from '../../../hooks/useAuthContext';
import { GET_BY_ID } from '../../../graphql/query/users.query';
import { useEffect } from 'react';
import { getCategoryById } from '../../../utils/constants/categoryList';
import { BOOK_EVENT_2 } from '../../../graphql/mutation/users.mutation';

export default function UserDashboardActivity() {
  const navigate = useNavigate();
  const context = useAuthContext();

  useEffect(() => {
    if (context.isAuthChecked && !context.isAuth) {
      navigate('../');
    }
  }, []);

  const [fetchUserData, { loading: userLoading, data: userData }] = useLazyQuery(GET_BY_ID);
  const [bookedEvents, setBookedEvents] = useState([]);

  useEffect(() => {
    fetchUserData({ variables: { id: context._id }, fetchPolicy: 'network-only' });
  }, []);

  useEffect(() => {
    if (userData) {
      setBookedEvents(userData.getUserById.booked_events);
    }
  }, [userData]);

  const roots = [
    {
      title: 'Acceuil',
      path: '../',
      isSelected: false,
    },
    {
      title: 'Profil',
      path: '../dashboard/user',
      isSelected: false,
    },
    {
      title: 'Mon tableau de bord',
      path: '../dashboard',
      isSelected: false,
    },
    {
      title: 'Activité',
      path: '',
      isSelected: true,
    },
  ];

  const handleRootClick = (isSelected, path) => {
    if (!isSelected) navigate(path);
  };

  return (
    <>
      <section className='generic-container pt-32 min-h-screen'>
        <article className='mb-20'>
          <div className='flex mb-10 text-sm'>
            {roots.map((item, index) => (
              <div className='flex' key={index}>
                <p
                  onClick={() => handleRootClick(item.isSelected, item.path)}
                  className={`cursor-pointer hover:underline select-none ` + (item.isSelected && 'underline font-medium cursor-default')}>
                  {item.title}
                </p>
                {index < roots.length - 1 && <p className='mx-2'> {'>'} </p>}
              </div>
            ))}
          </div>
          <h2>Mes activités</h2>
        </article>

        <article className='grid grid-cols-1 lg:grid-cols-2 mx-24 mb-10'>
          <article>
            <div className='mx-36 mb-10'>
              <DashboardCard title='Je participe' path='../search' />
            </div>
            <div className='mx-36 mb-20'>
              <DashboardCard title="J'organise" path='../search' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <span className='z-10 py-32 px-36 bg-kiddoYellow rounded-tl-full ' />
              <span className='z-0 p-20 -mt-16 -mr-64 bg-orange-500 rounded-br-2xl' />
            </div>
          </article>
          <article>
            <div>
              <h3 className='border-b border-gray-500 pb-5 mb-10'>En cours</h3>
              {userLoading ? <Skelet /> : <DashboardActivityCard bookedEvent={bookedEvents && bookedEvents[0]} />}
            </div>
            <div>
              <h3 className='border-b border-gray-500 pb-5 my-10'>Historique des activités</h3>
              <p className='border border-kiddoGray px-10 w-1/2 py-10 ml-5 rounded-lg text-gray-600'>Vous n'avez pas d'historique</p>
            </div>
            <div>
              <h3 className='border-b border-gray-500 pb-5 my-10'>Nos recommendations</h3>
              <div className='section__grid-2'>
                <ActivityCard
                  title='Peinture créative'
                  category='art'
                  location={{ city: 'Toulon', zip_code: '38000' }}
                  date={1658742687}
                  price={{ adult: 10, child: 5 }}
                />
                <ActivityCard
                  title='Randonnée en forêt'
                  category='sport'
                  location={{ city: 'Rambouillet', zip_code: '78000' }}
                  date={1659865887}
                  price={{ adult: 15, child: 10 }}
                />
              </div>
            </div>
          </article>
        </article>
      </section>
    </>
  );
}

function DashboardCard({ title, path, isDisabled }) {
  const navigate = useNavigate();
  return (
    <>
      <article
        className={
          'w-full h-52 bg-kiddoGray flex flex-col items-center justify-center select-none rounded-lg shadow-sm shadow-kiddoShadow hover:shadow-md hover:shadow-blue-400 transition-all hover:scale-[1.01] cursor-pointer ' +
          (isDisabled && 'bg-gray-400 cursor-default hover:ring-0 hover:shadow-kiddoShadow hover:scale-100')
        }
        onClick={() => !isDisabled && navigate(path)}>
        <p>{title}</p>
      </article>
    </>
  );
}

function DashboardActivityCard({ bookedEvent }) {
  const navigate = useNavigate();
  const { _id } = useAuthContext();
  const event = bookedEvent?.event;

  const categoryName = getCategoryById(event?.categories._id);
  const categoryColor = getCategoryColorForCSS(categoryName);

  const [bookEvent, { data: removeBookData }] = useMutation(BOOK_EVENT_2);

  const handleSubsClick = () => {
    bookEvent({
      variables: {
        id: _id,
        eventId: event._id,
        bookedAt: null,
        participant: {
          user: _id,
          booked_at: null,
        },
      },
    });
  };

  useEffect(() => {
    if (removeBookData) {
      navigate('../dashboard/');
    }
  }, [removeBookData]);

  return (
    <>
      {event === undefined || event === null ? (
        <>
          <p>Aucun événement en cours...</p>
        </>
      ) : (
        <>
          <article className='section__grid-2 bg-kiddoGray rounded-xl'>
            <div className='dashboard__activity-card__ruban' data-category={categoryName} style={{ '--ruban-color': categoryColor }}>
              <img src={activityPic} alt='' className='relative w-full h-64 object-fill over rounded-l-xl' />
            </div>
            <div className='flex flex-col justify-around'>
              <p className='font-medium mr-auto truncate'>{event.content.title}</p>
              <div className='flex items-center'>
                <FaMapMarkerAlt className='mr-3' />
                <p className='truncate'>
                  {event.adress.city} ({event.adress.zip_code.substring(0, 2)})
                </p>
              </div>
              <div className='flex items-center'>
                <FaCalendarAlt className='mr-3' />
                <p>{dateManager.getDate(event.event_date.start)}</p>
              </div>

              <div className='flex items-center'>
                <div className='p-1 bg-kiddoPurple mr-3 text-white'>
                  <FaShareSquare />
                </div>
                <p
                  className='hover:underline select-none cursor-pointer'
                  onClick={() => alert(`Lien de partage : \nhttp://localhost:3000/event/${event._id}`)}>
                  Partager à un.e ami.e
                </p>
              </div>

              <div className='flex items-center'>
                <div className='p-1 bg-kiddoPurple mr-3 text-white'>
                  <FaTimes />
                </div>
                <p className='hover:underline select-none cursor-pointer' onClick={() => handleSubsClick()}>
                  Annuler ma participation
                </p>
              </div>
            </div>
          </article>
        </>
      )}
    </>
  );
}
