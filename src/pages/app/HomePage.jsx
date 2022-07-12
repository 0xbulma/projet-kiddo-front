import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_UPCOMING_EVENTS, GET_LAST_PUBLISHED_EVENTS } from '../../graphql/query/events.query';
import CategoryCard from '../../components/shared/card/CategoryCard';
import ActivityCard from '../../components/shared/card/ActivityCard';
import { useNavigate } from 'react-router-dom';

// Import: Data categories
import { CATEGORIES } from '../../utils/constants/categoryList';

// Import: Assets & Style
import MAIN_BG from '../../assets/images/main_bg.svg';

import ICON_CALENDAR from '../../assets/icons/icon_calendar.svg';
import Skelet from '../../components/shared/loadingfiles/Skelet';

// Variables
const CURRENT_DATE = Date.now();

export default function HomePage() {
  let navigate = useNavigate();

  // GraphQL requests
  const {
    error: lastPublishedError,
    loading: lastPublishedLoading,
    data: lastPublishedEvents,
  } = useQuery(GET_LAST_PUBLISHED_EVENTS, {
    variables: {
      input: {
        first: 6,
        publishedOrder: 'desc',
        status: 'PUBLISHED',
        minDate: CURRENT_DATE,
      },
    },
  });

  const {
    error: upcomingError,
    loading: upcomingLoading,
    data: upcomingEvents,
  } = useQuery(GET_UPCOMING_EVENTS, {
    variables: {
      input: {
        first: 6,
        dateOrder: 'asc',
        status: 'PUBLISHED',
        minDate: CURRENT_DATE,
      },
    },
  });

  const navigateHandler = () => {
    navigate('/search');
    window.scrollTo(({
      top: 100,
      left: 100,
      behavior: 'auto'
    }));
  }


  return (
    <>
      {/* Main section */}
      <section className='relative h-screen w-full'>
        <img src={MAIN_BG} alt='' className='absolute h-full w-full brightness-75 object-cover' />
        <article className='relative h-full top-20 text-center text-white'>
          <h1 className=''>Kiddo</h1>
          <h2 className='mt-10'>Des activités diverses en 1 clic</h2>
          <h3 className='mt-96 italic'>La plateforme créée pour les parents par les parents</h3>
        </article>
      </section>

      {/* Button section */}
      <section>
        <article className='section__grid-4 mb-16 gap-8 mx-8 mt-2 md:-mt-10'>
          <button className='main-button green-bg-gradient lg:col-start-2' onClick={navigateHandler}>Participer aux activités</button>
          <button className='main-button blue-bg-gradient lg:col-start-3' onClick={navigateHandler}>Organise des activités</button>
        </article>
      </section>

      {/* Category section */}
      <section>
        <article className='generic-container home-section'>
          <div className='mb-5'>
            <h2 className='home-section__title'>Catégories d'activités</h2>
          </div>
          <div className='section__grid-3'>
            {CATEGORIES.map((category, index) => (
              <Link key={index} to={`/category/${category.type}`}>
                <CategoryCard type={category.type} name={category.name} imageUrl={category.imageUrl} />
              </Link>
            ))}
          </div>
        </article>
      </section>

      {/* Category: Weekly events */}
      <section className='w-full bg-kiddoSection'>
        <article className='generic-container home-section'>
          <div className='flex flex-col md:flex-row justify-between items-center mb-5'>
            <h2 className='home-section__title'>Activités prévues cette semaine</h2>
            <div className='flex items-center'>
              <img src={ICON_CALENDAR} alt='' />
              <button className='md:ml-4 md:mr-10 text-xl md:text-2xl underline' onClick={navigateHandler}>Calendrier des activités</button>
            </div>
          </div>
          <div className='section__grid-3'>
            {upcomingLoading ? (
              <>
                <Skelet />
                <Skelet />
                <Skelet />
                <Skelet />
                <Skelet />
                <Skelet />
              </>
            ) : upcomingError ? (
              <>
                <p className='text-red-500 col-span-full text-xl'>Erreur lors du chargement des événements...</p>
              </>
            ) : (
              upcomingEvents &&
              // eslint-disable-next-line array-callback-return
              upcomingEvents?.eventsComplexQuery.results.map((event, index) => {
                if (event?.main_owner !== null) {
                  return (
                    <Link key={index} to={`/event/${event._id}`}>
                      <ActivityCard
                        title={event.content.title}
                        category={event.categories.name}
                        description={event.content.description}
                        location={event.adress}
                        date={event.event_date.start}
                        price={event.price}
                        img={event.content_media.photo_main_url}
                      />
                    </Link>
                  );
                }
              })
            )}
          </div>
        </article>
      </section>

      {/* Category: Latest events */}
      <section>
        <article className='generic-container home-section'>
          <div className='flex flex-col md:flex-row justify-between items-center mb-5'>
            <h2 className='home-section__title'>Nouvelles activités publiées</h2>
            <div className='flex items-center'>
              <button className='md:ml-4 md:mr-10 mt-5 md:mt-0 text-xl md:text-2xl underline' onClick={navigateHandler}>Voir plus d'activités</button>
            </div>
          </div>
          <div className='section__grid-3'>
            {lastPublishedLoading ? (
              <>
                <Skelet />
                <Skelet />
                <Skelet />
                <Skelet />
                <Skelet />
                <Skelet />
              </>
            ) : lastPublishedError ? (
              <>
                <p className='text-red-500 col-span-full text-xl'>Erreur lors du chargement des événements...</p>
              </>
            ) : (
              lastPublishedEvents &&
              // eslint-disable-next-line array-callback-return
              lastPublishedEvents?.eventsComplexQuery.results.map((event, index) => {
                if (event?.main_owner !== null) {
                  return (
                    <Link key={index} to={`/event/${event._id}`}>
                      <ActivityCard
                        title={event.content.title}
                        category={event.categories.name}
                        description={event.content.description}
                        location={event.adress}
                        date={event.event_date.start}
                        price={event.price}
                        img={event.content_media.photo_main_url}
                      />
                    </Link>
                  );
                }
              })
            )}
          </div>
        </article>
      </section>
    </>
  );
}
