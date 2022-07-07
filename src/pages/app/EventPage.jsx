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
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import * as dateManager from '../../utils/DateManager';
import MapLeafletOneMarker from '../../components/shared/MapLeafletOneMarker';
import { Link } from 'react-router-dom';

export default function EventPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState();

  const { loading, error, data } = useQuery(GET_BY_ID, { variables: { eventId: eventId } });

  const { isAuth } = useAuthContext();

  useEffect(()=>{
    console.log('isAuth Comp', isAuth)
  },[isAuth])


  useEffect(() => {
    if (data) {
      setEvent(data.event);
    } else if (error) {
      console.log('Error : ', error);
    }
  }, [error, data]);

  const images = [image1, image2, image3, image1, image2, image3];

  return (
    <>
      {(!loading && event) && (
        <div className=''>
          <article className='flex flex-col items-center grow container mx-auto text-center mt-5 mb-3'>
            <h2 className='text-bold text-4xl'>{event.content.title}</h2>
            <h3 className='text-bold text-xl'>{event.content.subtitle}</h3>
          </article>

          <Carousel images={images} />

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
              <button className='py-2 my-3 font-bold text-white rounded-full bg-slate-700 px-14'>S'inscrire à l'activité</button>
            </div>
          </section>
          <section className='flex flex-col items-center w-full my-10 bg-[#F6F5FE]'>
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
              <button className='py-2 my-5 font-bold text-white rounded-full bg-slate-700 px-14'>S'inscrire à l'activité</button>
            </div>
          </section>

          {isAuth && (
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
