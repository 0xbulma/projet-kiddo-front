/* eslint-disable react-hooks/exhaustive-deps */
import Carousel from '../../components/Carousel';
import useAuthContext from '../../hooks/useAuthContext';

import image1 from '../../assets/images/carouselTest/1.jpg';
import image2 from '../../assets/images/carouselTest/2.jpg';
import image3 from '../../assets/images/carouselTest/3.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendar, faPeopleGroup, faEuroSign, faClock } from '@fortawesome/free-solid-svg-icons';
import { GET_BY_ID } from '../../graphql/query/events.query';

import BlankProfilPic from '../../assets/admin/blank_profil_pic.png';
import CommentSection from '../../components/shared/CommentSection';
import { useParams } from 'react-router';
import { useQuery, useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import * as dateManager from '../../utils/DateManager';
import MapLeafletOneMarker from '../../components/shared/MapLeafletOneMarker';
import { Link } from 'react-router-dom';
import useToggle from '../../hooks/useToggle';
import ModalBackdrop from '../../components/shared/modal/ModalBackdrop';
import ModalRegisterLogin from '../../components/shared/modal/ModalRegisterLogin';
import { BOOK_EVENT, PIN_EVENT } from '../../graphql/mutation/users.mutation';

import ReactTooltip from 'react-tooltip';
import { FaStar } from 'react-icons/fa';

export default function EventPage() {
  const { eventId } = useParams();
  const authContext = useAuthContext();

  const [event, setEvent] = useState();

  const { loading, error, data } = useQuery(GET_BY_ID, { variables: { eventId: eventId } });

  useEffect(() => {
    if (data) {
      setEvent(data.event);
    } else if (error) {
      console.log('Error : ', error);
    }
  }, [error, data]);

  // Images temporaire
  const images = [image1, image2, image3, image1, image2, image3];

  // Bouton inscription
  const [displayModal, toggleModal] = useToggle(false);
  const [isSubs, toggleSubs] = useToggle(false);

  const [bookEvent, { error: bookEventError, data: bookEventData }] = useMutation(BOOK_EVENT);

  const handleSubsClick = () => {
    if (!authContext.isAuth) {
      toggleModal(true);
    } else {
      bookEvent({
        variables: {
          id: authContext._id,
          eventId: eventId,
          bookedAt: Date.now(),
        },
      });
    }
  };

  useEffect(() => {
    if (bookEventData) {
      toggleSubs();
    }
    if (bookEventError) {
      alert(bookEventError);
    }
  }, [bookEventError, bookEventData]);

  //Mis en favoris
  const [isPin, togglePin] = useToggle(false);
  const [pinEvent, { error: pinEventError, data: pinEventData }] = useMutation(PIN_EVENT);

  const handlePinClick = () => {
    if (!authContext.isAuth) {
      toggleModal(true);
    } else {
      pinEvent({
        variables: {
          id: authContext._id,
          eventId: eventId,
          pinnedAt: Date.now(),
        },
      });
    }
  };

  useEffect(() => {
    if (pinEventData) {
      togglePin();
    }
    if (pinEventError) {
      alert(pinEventError);
    }
  }, [pinEventError, pinEventData]);

  return (
    <>
      {!loading && event ? (
        <div className=''>
          <article className='flex flex-col items-center grow container mx-auto text-center pt-28 pb-8'>
            <h2 className='text-bold text-4xl flex items-center'>
              {event.content.title}
              <ReactTooltip type='success' effect='solid' place='top' />
              <FaStar
                className={
                  `ml-3 text-white bg-black bg-opacity-25 w-8 h-8 p-[6px] rounded-full hover:bg-kiddoGreen hover:text-yellow-300 hover:animate-spin transition-all` +
                  (isPin ? 'bg-kiddoGreen hover:bg-black hover:text-yellow-300' : 'bg-black hover:bg-kiddoGreen hover:text-yellow-300')
                }
                data-tip='Mettre en favoris'
                onClick={handlePinClick}
              />
            </h2>
            <h3 className='text-bold text-xl'>{event.content.subtitle}</h3>
          </article>

          <div className='bg-gray-100 py-5'>
            <Carousel images={images} />
          </div>
          {/* Carte d'information de l'événement */}
          <section className='flex flex-col items-center grow'>
            <article className='grid grid-cols-1 gap-8 my-10 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2'>
              <CardInfo icon={faLocationDot} line1={event.adress.city} line2={event.adress.adress_line} />
              <CardInfo
                icon={faCalendar}
                line1={dateManager.getDate(event.event_date.start)}
                line2={'à ' + dateManager.getHHMM(event.event_date.start)}
              />
              <CardInfo
                icon={faPeopleGroup}
                line1={event.group_size + (event.group_size > 1 ? ' places' : ' place')}
                line2={'A partir de ' + event.minChildAge + ' ans'}
              />
              <CardInfo icon={faEuroSign} line1={event.price.child + '€ par enfant'} line2={event.price.adult + '€ par adulte'} />
              <CardInfo icon={faClock} line1={dateManager.getTimeBetweenDates(event.event_date.start, event.event_date.end) + ' heures'} />
            </article>

            {/* Bouton s'inscrire ou notification inscrit.e à l'activité */}
            <div>
              <div className='mt-5'>
                {!isSubs ? (
                  <button
                    onClick={handleSubsClick}
                    className='bg-kiddoGreen px-8 py-2 w-96 rounded-2xl mt-2 font-medium mb-5 hover:underline shadow-md shadow-kiddoShadow hover:scale-[1.01] transition-all'>
                    S'inscrire à l'activité
                  </button>
                ) : (
                  <div className='relative flex items-center justify-center'>
                    <p className='absolute -top-5 text-center italic text-md'>Inscrit.e à l'activité</p>
                    <button
                      onClick={handleSubsClick}
                      className='bg-kiddoPurple px-8 py-2 w-96 rounded-2xl mt-2 font-medium mb-5 hover:underline shadow-md shadow-kiddoShadow hover:scale-[1.01] transition-all'>
                      Se désinscrire de l'activité
                    </button>
                  </div>
                )}
                {displayModal && (
                  <ModalBackdrop
                    composant={
                      <ModalRegisterLogin
                        registerSubtitle="Veuillez vous créer un compte pour vous inscrire à l'activité"
                        loginSubtitle="Veuillez vous connecter pour vous inscrire à l'activité"
                        isLoginPage
                        closeModal={() => toggleModal(false)}
                      />
                    }
                    open={displayModal}
                    onClose={() => toggleModal(false)}
                  />
                )}
              </div>
            </div>
          </section>
          <section className='flex flex-col items-center w-full mt-10 pb-16 bg-[#F6F5FE]'>
            <div className='grid w-full grid-cols-2 px-56 my-10 gap-11'>
              <article>
                <h2 className='text-2xl font-bold'>Description de l'activité</h2>
                <p className='mt-8 mr-10'>{event.content.description}</p>
              </article>
              <article className='flex flex-col justify-around'>
                {/* Activité organisé par */}
                <div className='flex justify-center items-center'>
                  <span className='mr-3'>Activité organisé par </span>
                  <div className='flex flex-col items-center'>
                    <Link to={`/user/${event.main_owner._id}`}>
                      <img src={BlankProfilPic} alt='' width='75px' className='hover:scale-105 transition-all' />
                    </Link>
                    <span>{event.main_owner.first_name + ', ' + dateManager.getUserAge(event.main_owner.birthdate) + ' ans'}</span>
                    <span>{event.main_owner.children.length + (event.main_owner.children.length > 1 ? ' enfants' : ' enfant')}</span>
                  </div>
                </div>
                {/* Rendu de la carte */}
                <div className='bg-yellow-300'>
                  <MapLeafletOneMarker inputGPS={event.gps} />
                </div>
                {/* Adresse */}
                <p className='text-center'>Parc Forestier de la Mare Adam, Rte des Huit Bouteilles, 98370 Chaville</p>
              </article>
            </div>

            {/* Bouton s'inscrire ou notification inscrit.e à l'activité */}
            <div>
              <div className='mt-5'>
                {!isSubs ? (
                  <button
                    onClick={handleSubsClick}
                    className='bg-kiddoGreen px-8 py-2 w-96 rounded-2xl mt-2 font-medium mb-5 hover:underline shadow-md shadow-kiddoShadow hover:scale-[1.01] transition-all'>
                    S'inscrire à l'activité
                  </button>
                ) : (
                  <div className='relative flex items-center justify-center'>
                    <p className='absolute -top-5 text-center italic text-md'>Inscrit.e à l'activité</p>
                    <button
                      onClick={handleSubsClick}
                      className='bg-kiddoPurple px-8 py-2 w-96 rounded-2xl mt-2 font-medium mb-5 hover:underline shadow-md shadow-kiddoShadow hover:scale-[1.01] transition-all'>
                      Se désinscrire de l'activité
                    </button>
                  </div>
                )}
                {displayModal && (
                  <ModalBackdrop
                    composant={
                      <ModalRegisterLogin
                        registerSubtitle="Veuillez vous créer un compte pour vous inscrire à l'activité"
                        loginSubtitle="Veuillez vous connecter pour vous inscrire à l'activité"
                        isLoginPage
                        closeModal={() => toggleModal(false)}
                      />
                    }
                    open={displayModal}
                    onClose={() => toggleModal(false)}
                  />
                )}
              </div>
            </div>
          </section>

          {authContext.isAuth && (
            <>
              <section className='container mx-auto my-12'>
                <h2 className='mt-5 mb-5 text-2xl font-bold'>Participants </h2>
                <article className='flex items-center justify-around'>
                  {event.group_participants.map((group, index) => (
                    <CardParticipant key={index} user={group.user} participants={group.group_detail} />
                  ))}
                </article>
              </section>
              <CommentSection commentTarget={1} targetID={eventId} sectionName='Questions-réponses concernant l’activité' />
            </>
          )}
        </div>
      ) : loading ? (
        <div className='flex flex-col items-center min-h-screen pt-28 '>
          <h2 className='text-center mt-10'>Chargement en cours...</h2>
        </div>
      ) : (
        error && <h2 className='min-h-screen text-center text-red-500 pt-28 '>Erreur lors du chargment de l'événement !</h2>
      )}
    </>
  );
}

function CardInfo(props) {
  const { icon, line1, line2 } = props;

  return (
    <article className='flex items-center py-3 px-2 border border-gray-600 rounded-md'>
      <FontAwesomeIcon icon={icon} className='mr-3 text-lg text-black' />
      <div className='flex flex-col'>
        <span>{line1}</span>
        {line2 && <span>{line2}</span>}
      </div>
    </article>
  );
}

function CardParticipant(props) {
  const { user, participants } = props;
  return (
    <div className='flex flex-col items-center justify-center align-middle'>
      <Link to={`/user/${user._id}`}>
        <img src={BlankProfilPic} alt='' width='75px' className='hover:scale-105 transition-all' />
      </Link>
      <span>
        {user.first_name}, {dateManager.getUserAge(user.birthdate)} ans
      </span>
      <span>
        <FontAwesomeIcon icon={faPeopleGroup} className='mr-3 text-lg text-black' />
        {participants.length + (participants.length > 1 ? ' inscrits' : ' inscrit')}
      </span>
    </div>
  );
}
