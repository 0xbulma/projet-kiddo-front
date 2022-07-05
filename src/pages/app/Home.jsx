import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Register from '../../components/app/register/Register';
import ModalBackdrop from '../../components/shared/modal/ModalBackdrop';

import ActivityCard from '../../components/shared/card/ActivityCard';
import CategoryCard from '../../components/shared/card/CategoryCard';
import LoadingComponent from '../../components/shared/loadingfiles/LoadingComponent';
import { GET_UPCOMING_EVENTS, GET_LAST_PUBLISHED_EVENTS } from '../../graphql/query/events.query';

import './home.css';

const currentDate = Date.now();

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { error, loading, data } = useQuery(GET_UPCOMING_EVENTS, {
    variables: {
      input: {
        first: 6,
        dateOrder: 'asc',
        status: 'PUBLISHED',
        minDate: currentDate,
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
        minDate: currentDate,
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
      <section className='hero'>
        <article className='title-hero-container'>
          <h1>KIDDO</h1>
          <h2>S'amuser autrement</h2>
          <h3>Passez des bons moments amusants et inoubliables en famille </h3>
        </article>
        {/* MODAL BUTTON */}
        <article className='hero-div'>
          <div
            onClick={() => {
              setIsOpen(true);
            }}
            className='sous-hero-div'>
            Participer aux activités
          </div>
          <div
            onClick={() => {
              setIsOpen(true);
            }}
            className='sous-hero-div'>
            Organiser des activités
          </div>
          <ModalBackdrop composant={<Register />} open={isOpen} onClose={() => setIsOpen(false)} />
        </article>
      </section>

      <section className='container-user'>
        <section className='category-container'>
          <div className='home-title-category'>
            <div className='fleche'></div>
            <h2>catégories d'activités</h2>
            <div className='fleche'></div>
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

        <section className='activity-container'>
          <div className='title-activity-container'>
            <h2>Activités prévues cette semaine</h2>
            <span>calendrier des activités</span>
          </div>
          <article className='activity-card-container'>
            {data &&
              data.eventsComplexQuery.results.map((event, index) => {
                // console.log("event", event);
                return (
                  <Link key={index} to={`/event/${event._id}`}>
                    <ActivityCard
                      key={event._id}
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

        <section className='lasted-acitivty-container'>
          <div className='title-activity-container'>
            <h2>Dernières activités</h2>
            <span>calendrier des activités</span>
          </div>
          <article className='activity-card-container'>
            {dataLast &&
              dataLast.eventsComplexQuery.results.map((event, index) => {
                return (
                  <Link key={index} to={`/event/${event._id}`}>
                    <ActivityCard
                      key={event._id}
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
      </section>
    </>
  );
}
