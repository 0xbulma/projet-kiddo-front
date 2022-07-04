import Carousel from '../../components/Carousel';

import image1 from '../../assets/images/carouselTest/1.jpg';
import image2 from '../../assets/images/carouselTest/2.jpg';
import image3 from '../../assets/images/carouselTest/3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendar, faPeopleGroup, faEuroSign, faClock } from '@fortawesome/free-solid-svg-icons';

import BlankProfilPic from '../../assets/admin/blank_profil_pic.png';
import CommentSection from '../../components/shared/CommentSection';

export default function EventPage() {
  const eventID = window.location.href.split('/')[4];

  const images = [image1, image2, image3];

  return (
    <>
      {/* CONTAINER MX-AUTO TEMP */}
      <div className='container mx-auto'>
        <h2>EventPage</h2>
        <div className='flex flex-col'>
          <span className='text-green-500 sm:text-red-500'>SM TEXT</span>
          <span className='text-green-500 md:text-red-500'>MD TEXT</span>
          <span className='text-green-500 lg:text-red-500'>LG TEXT</span>
          <span className='text-green-500 xl:text-red-500'>XL TEXT</span>
        </div>
        <section className='flex flex-col items-center'>
          <Carousel images={images} />
          <article className='grid grid-cols-1 gap-8 mx-32 my-10 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2'>
            <CardInfo icon={faLocationDot} line1='Parc Accrobranches' line2='Chaville (92)' />
            <CardInfo icon={faCalendar} line1='Samedi 02/07/2022' line2='à 13H30' />
            <CardInfo icon={faPeopleGroup} line1='A partir de 4 ans' line2='Taille minimale 1m' />
            <CardInfo icon={faEuroSign} line1='9.50€ par endant' line2='18€ par Adulte' />
            <CardInfo icon={faClock} line1='2 heures' />
          </article>

          <button className='py-2 my-3 font-bold text-white rounded-full bg-slate-700 px-14'>S'inscrire à l'activité</button>
        </section>
        <section className='flex flex-col items-center w-full my-10 bg-gray-300'>
          <div className='grid w-full grid-cols-2 px-56 my-10 gap-11'>
            <article>
              <h2 className='text-xl font-bold'>Description de l'activité</h2>
              <p className='mt-5 mr-10'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad perferendis quis tempore rem quasi dicta architecto qui itaque
                cupiditate? Accusamus qui quibusdam consequatur doloribus laudantium excepturi maxime possimus at temporibus. Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Ad perferendis quis tempore rem quasi dicta architecto qui itaque cupiditate? Accusamus qui
                quibusdam consequatur doloribus laudantium excepturi maxime possimus at temporibus. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Ad perferendis quis tempore rem quasi dicta architecto qui itaque cupiditate? Accusamus qui quibusdam consequatur
                doloribus laudantium excepturi maxime possimus at temporibus.
              </p>
            </article>
            <article className='flex flex-col'>
              {/* Activité organisé par */}
              <div className='flex items-start self-end'>
                <span className='mt-4 mr-5'>Activité organisé par</span>
                <div className='flex flex-col items-center'>
                  <img src={BlankProfilPic} alt='' width='75px' />
                  <span>Michel, 44 ans</span>
                  <span>Marié, 2 enfants</span>
                </div>
              </div>
              {/* Rendu de la carte */}
              <span className='my-20 text-center'>CARTE</span>
              {/* Adresse */}
              <p className='self-center'>Parc Forestier de la Mare Adam, Rte des Huit Bouteilles, 98370 Chaville</p>
            </article>
          </div>

          <button className='py-2 mx-56 mb-5 font-bold text-white rounded-full bg-slate-700 px-14'>S'inscrire à l'activité</button>
        </section>
        {/* Participants */}
        <section className='my-12'>
          <h2 className='mt-5 mb-5 text-2xl font-bold'>Participants </h2>
          <article className='flex items-center justify-around'>
            <CardParticipant user='toto' />
            <CardParticipant user='toto' />
            <CardParticipant user='toto' />
            <CardParticipant user='toto' />
            <CardParticipant user='toto' />
            <CardParticipant user='toto' />
            <CardParticipant user='toto' />
            <span className='text-lg font-bold underline cursor-pointer select-none hover:text-yellow-600'>Voir tous les participants</span>
          </article>
        </section>
        {/* Comments */}
        <CommentSection commentTarget={1} targetID={eventID} sectionName='Questions-réponses concernant l’activité' />
      </div>
    </>
  );
}

function CardInfo(props) {
  const { icon, line1, line2 } = props;

  return (
    <article className='flex items-center px-3 py-2 border-2 border-black rounded-md'>
      <FontAwesomeIcon icon={icon} className='mr-3 text-lg text-black' />
      <div className='flex flex-col'>
        <span>{line1}</span>
        {line2 !== undefined && <span>{line2}</span>}
      </div>
    </article>
  );
}

function CardParticipant(props) {
  const { user } = props;
  console.log(user);
  return (
    <div className='flex flex-col items-center justify-center align-middle'>
      <img src={BlankProfilPic} alt='' width='75px' className='transition-all hover:scale-105' />
      <span>Toto, 50ans</span>
      <span>
        <FontAwesomeIcon icon={faPeopleGroup} className='mr-3 text-lg text-black' />1 enfant
      </span>
    </div>
  );
}

function Comment() {
  return (
    <section>
      <h2 className='mt-5 mb-5 text-2xl font-bold'>Questions-réponses concernant l'activité</h2>

      <article>
        <MainComment user='Toto' content='toto' />
      </article>
    </section>
  );
}

function MainComment() {
  return (
    <div className='flex items-start py-10'>
      <img src={BlankProfilPic} alt='' width='75px' className='mr-3 transition-all hover:scale-105' />
      <div className='flex flex-col px-3 pt-8 pb-3 bg-gray-300 rounded-md'>
        <span className='text-xl font-bold'>Prénom</span>
        <p className='pb-3 mt-5'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quibusdam accusantium nobis ut ducimus sit quod maxime sunt odio magni.
          Expedita, accusantium sed. Dolorum quasi ullam est beatae voluptatum ducimus?
        </p>
        <div className='self-end font-bold'>
          <span className='mx-2'>Répondre</span>
          <span className='mx-2'>J'aime</span>
          <span className='mx-2'>Signaler</span>
        </div>
      </div>
    </div>
  );
}

// function SubComment() {}
