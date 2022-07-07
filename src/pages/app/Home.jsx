import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Register from '../../components/app/register/Register';
import ModalBackdrop from '../../components/shared/modal/ModalBackdrop';

import ActivityCard from '../../components/shared/card/ActivityCard';
import CategoryCard from '../../components/shared/card/CategoryCard';
import LoadingComponent from '../../components/shared/loadingfiles/LoadingComponent';
import { GET_UPCOMING_EVENTS, GET_LAST_PUBLISHED_EVENTS } from '../../graphql/query/events.query';

// Import style & assets
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const CURRENT_DATE = Date.now();

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { error, loading, data } = useQuery(GET_UPCOMING_EVENTS, {
    variables: {
      input: {
        first: 6,
        dateOrder: 'asc',
        status: 'PUBLISHED',
        minDate: CURRENT_DATE,
      },
    },
  });

  const {
    error: errorLast,
    loading: loadingLast,
    data: dataLast,
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
  useEffect(() => {
    if (loadingLast) {
      console.log('loadingLast', loadingLast);
    }
    if (loading) {
      console.log('loading', loading);
    }
    if (data) {
      console.log('data-->', data);
    }
    if (error) {
      console.log('error', error);
    }
    if (dataLast) {
      console.log('dataLast-->', dataLast);
    }
    if (errorLast) {
      console.log('errorLast', errorLast);
    }
  }, [data, error, loading, dataLast, loadingLast, errorLast]);

  const categories = [
    {
      name: 'sportives',
      url: '/assets/img/sportives.jpg',
      category: 'sport',
      color: 'bg-red-300',
    },
    {
      name: 'artistiques',
      url: '/assets/img/art.jpg',
      category: 'art',
      color: 'bg-yellow-300',
    },
    {
      name: 'culturelles',
      url: '/assets/img/culturelle.jpg',
      category: 'culture',
      color: 'bg-purple-300',
    },
    {
      name: "d'éveil corporel",
      url: '/assets/img/eveil.jpg',
      category: 'eveil',
      color: 'bg-blue-300',
    },
    {
      name: 'manuelles',
      url: '/assets/img/manuelles.jpg',
      category: 'manuel',
      color: 'bg-green-300',
    },
    {
      name: 'autres',
      url: '/assets/img/autres.jpg',
      category: 'autres',
      color: 'bg-orange-300',
    },
  ];

  return loading ? (
    <>
      <LoadingComponent />
    </>
  ) : (
    <>
      <section className='hero shadow-lg'>
        <article className='h-full flex flex-col text-center justify-around text-white'>
          <div>
            <h1 className='mb-10'>Kiddo</h1>
            <h2>Des activités diverses en 1 click</h2>
          </div>
          <h2 className='-mb-16'>La plateforme crée pour les parents par les parents</h2>
        </article>
        {/* MODAL BUTTON */}
        <article className='hero-div'>
          <div
            onClick={() => {
              setIsOpen(true);
            }}
            className='sous-hero-div'>
            <h3>Participer aux activités</h3>
          </div>
          <div
            onClick={() => {
              setIsOpen(true);
            }}
            className='sous-hero-div'>
            <h3>Organiser des activités</h3>
          </div>
          <ModalBackdrop composant={<Register />} open={isOpen} onClose={() => setIsOpen(false)} />
        </article>
      </section>

      <section className='container-user'>
        <section className='category-container'>
          <div className='flex justify-between items-center mb-10 mt-5 mx-2'>
            <h3 className='text-3xl'>Catégories d'activités</h3>
          </div>
          <article className='category-card-container'>
            {categories.map((category, index) => {
              return (
                <Link key={index} to={`/category/${category.category}`}>
                  <CategoryCard name={category.name} url={category.url} color={category.color} />
                </Link>
              );
            })}
          </article>
        </section>
      </section>

      <section className='bg-[#EDEBFC] w-full pb-10'>
        <div className='container-user activity-container'>
          <div className='flex justify-between items-center mb-10 mt-5 mx-2'>
            <h3 className='text-3xl'>Activités prévues cette semaine</h3>
            <div className='flex items-center'>
              <FontAwesomeIcon icon={faCalendar} className='mr-3 text-3xl' />
              <p className='underline text-xl'>Calendrier des activités</p>
            </div>
          </div>
          <article className='activity-card-container'>
            {data &&
              data.eventsComplexQuery.results.map((event, index) => {
                return (
                  <Link key={event._id} to={`/event/${event._id}`}>
                    <ActivityCard
                      title={event.content.title}
                      category={event.categories.name}
                      description={event.content.description}
                      lieu={event.adress.city}
                      date={event.event_date.start}
                      prix={event.price.adult}
                    />
                  </Link>
                );
              })}
          </article>
        </div>
      </section>

      <section className='container-user lasted-acitivty-container mb-10'>
        <div className='flex justify-between items-center mb-10 mt-5 mx-2'>
          <h3 className='text-3xl'>Nouvelles activités</h3>
          <div className='flex items-center'>
            <p className='underline text-xl'>Voir plus d'activité</p>
          </div>
        </div>
        <article className='activity-card-container'>
          {dataLast &&
            dataLast.eventsComplexQuery.results.map((event) => {
              // console.log("event", event);
              return (
                <Link key={event._id} to={`/event/${event._id}`}>
                  <ActivityCard
                    title={event.content.title}
                    category={event.categories.name}
                    description={event.content.description}
                    lieu={event.adress.city}
                    date={event.event_date.start}
                    prix={event.price.adult}
                  />
                </Link>
              );
            })}
        </article>
      </section>
    </>
  );
}
