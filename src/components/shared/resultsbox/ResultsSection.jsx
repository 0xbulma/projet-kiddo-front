import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import useToggle from '../../../hooks/useToggle';

// import custom components
import { GET_EVENTS_CATEGORY } from '../../../graphql/query/events.query';
import MapLeaflet, { MapLeafletPlaceHolder } from '../../../components/shared/MapLeaflet';
import LoadIconBtn from '../../../components/shared/loadingfiles/LoadIconBtn';
import ActivityCard from '../../../components/shared/card/ActivityCard';
import getGeoLoc from '../../../utils/getGeoLoc';
import PaginationComp from '../../../components/shared/PaginationComp';
import Skelet from '../../../components/shared/loadingfiles/Skelet';
import Filterbox from '../../../components/shared/filterbox/Filterbox';
import getCity from '../../../utils/getCity';

import { FaCrosshairs, FaFilter } from 'react-icons/fa';

//import CSS
import './resultssection.css';

export default function ResultsSection({ categoryId, categoryName, searchInput }) {
  const ITEMS_PER_PAGE = 12;

  const [showFilter, toggleFilterVisibility] = useToggle(false);

  const [maxDistMeters, setMaxDistMeters] = useState(200000);
  const [minChildAge, setMinChildAge] = useState(0);
  const [maxChildAge, setMaxChildAge] = useState(12);

  const [allResults, setAllResults] = useState([]);

  const [page, setPage] = useState(1);
  const [geoLoc, setGeoLoc] = useState({
    isLoading: false,
    coords: null,
    isGeoLoc: false,
    city: null,
  });

  // GraphQl Request
  // eslint-disable-next-line no-unused-vars
  const [getEvents, { loading, data, refetch }] = useLazyQuery(GET_EVENTS_CATEGORY);
  const [getAllEvents, { data: dataAll }] = useLazyQuery(GET_EVENTS_CATEGORY);

  useEffect(() => {
    console.log(dataAll);
    if (dataAll) {
      setAllResults(() => [...dataAll.eventsComplexQuery.results]);
    }
  }, [dataAll]);

  useEffect(() => {
    setPage(1);
  }, [minChildAge, maxChildAge, maxDistMeters]);

  useEffect(() => {
    getAllEvents({
      variables: {
        input: {
          categories: categoryId,
          status: 'PUBLISHED',
          minDate: Date.now(),
          dateOrder: 'asc',
          searchInput: searchInput,
          minChildAge: minChildAge,
          maxChildAge: maxChildAge,
          lng: geoLoc.coords ? geoLoc?.coords[0] : null,
          lat: geoLoc.coords ? geoLoc?.coords[1] : null,
          maxDistMeters: maxDistMeters,
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, geoLoc.coords, minChildAge, maxChildAge, maxDistMeters, searchInput]);

  useEffect(() => {
    // if (!data) {
    getEvents({
      variables: {
        input: {
          first: ITEMS_PER_PAGE,
          offset: page * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
          categories: categoryId,
          searchInput: searchInput,
          status: 'PUBLISHED',
          minDate: Date.now(),
          dateOrder: 'asc',
          minChildAge: minChildAge,
          maxChildAge: maxChildAge,
          lng: geoLoc.coords ? geoLoc?.coords[0] : null,
          lat: geoLoc.coords ? geoLoc?.coords[1] : null,
          maxDistMeters: maxDistMeters,
        },
      },
    });
    // }

    // if (data) {
    //   refetch({
    //     input: {
    //       first: ITEMS_PER_PAGE,
    //       offset: page * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
    //       categories: categoryId,
    //       searchInput : searchInput,
    //       status: 'PUBLISHED',
    //       minDate: Date.now(),
    //       dateOrder: 'asc',
    //       minChildAge: minChildAge,
    //       maxChildAge: maxChildAge,
    //       lng: geoLoc.coords ? geoLoc?.coords[0] : null,
    //       lat: geoLoc.coords ? geoLoc?.coords[1] : null,
    //       maxDistMeters: maxDistMeters,
    //     },
    //   });
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, page, geoLoc.coords, minChildAge, maxChildAge, maxDistMeters, searchInput]);

  const onClickHandler = () => {
    setGeoLoc((geoLoc) => ({ ...geoLoc, isLoading: true }));
    let gps;

    getGeoLoc()
      .then((res) => {
        gps = res;
        return getCity(res[1], res[0]);
      })
      .then((res) => {
        setMaxDistMeters(200000);
        return setGeoLoc((geoLoc) => ({
          ...geoLoc,
          isLoading: false,
          isGeoLoc: true,
          coords: gps,
          city: res,
        }));
      })
      .catch((err) => {
        alert(err.message);
        return setGeoLoc((geoLoc) => ({ ...geoLoc, isLoading: false, isGeoLoc: false, city: null }));
      });
  };

  return (
    <>
      <section className='section__grid-3'>
        <article className='section__grid-2 col-span-2 mb-0'>
          <div className='pb-8'>
            <div className='flex bg-kiddoGray rounded-md shadow-sm shadow-kiddoShadow items-center py-2 px-5 mx-8 h-11 hover:ring-2 ring-0 transition-all gap-3'>
              {geoLoc.isLoading ? <LoadIconBtn className='mr-2' /> : <FaCrosshairs className='' />}

              <button onClick={onClickHandler} className='w-full hover:underline py-2 text-left' disabled={loading}>
                {geoLoc.city ? geoLoc.city : 'Activités autour de moi'}
              </button>
            </div>
          </div>

          <div className='relative pb-8'>
            <div className='flex bg-kiddoGray rounded-md shadow-sm shadow-kiddoShadow items-center justify-center py-2 px-5 mx-8 h-11 hover:ring-2 ring-0 transition-all gap-3'>
              {loading || !data ? <LoadIconBtn className='mr-2' /> : <FaFilter className='text-sm ' />}

              <button onClick={data && toggleFilterVisibility} className='z-20 w-full hover:underline py-2 text-left' disabled={loading}>
                Critères de recherche
              </button>

              {showFilter && (
                <Filterbox
                  className={'absolute top-12 left-6 w-96 p-3 pb-12 mb-5 mx-2 bg-kiddoGray rounded-lg' + (showFilter ? '' : 'filterbox__hidden')}
                  maxDist={maxDistMeters}
                  setMaxDist={setMaxDistMeters}
                  minChildAge={minChildAge}
                  setMinChildAge={setMinChildAge}
                  maxChildAge={maxChildAge}
                  setMaxChildAge={setMaxChildAge}
                  isGeoLoc={geoLoc.isGeoLoc}
                />
              )}
            </div>
          </div>

          {loading || !data ? (
            <>
              <Skelet />
              <Skelet />
              <Skelet />
              <Skelet />
              <Skelet />
              <Skelet />
              <Skelet />
              <Skelet />
              <Skelet />
              <Skelet />
            </>
          ) : data?.eventsComplexQuery.results.length === 0 ? (
            <div>PAS DE RESULTATS</div>
          ) : (
            data?.eventsComplexQuery.results.map((data, index) => {
              return (
                <Link key={data._id} to={`/event/${data._id}`}>
                  <ActivityCard
                    title={data.content.title}
                    category={data.categories.name}
                    location={data.adress}
                    date={data.event_date.start}
                    price={data.price}
                    img={data.content_media.photo_main_url}
                  />
                </Link>
              );
            })
          )}
        </article>

        <article className='text-center col-span-2 lg:col-span-1 mb-10'>
          {data ? <MapLeaflet currentLocation={geoLoc?.coords} items={allResults} maxDistMeters={maxDistMeters} /> : <MapLeafletPlaceHolder />}
        </article>
      </section>

      <section className=''>
        {data?.eventsComplexQuery.count > 12 && (
          <PaginationComp
            totalItem={data.eventsComplexQuery.count}
            itemsPerPage={12}
            page={page}
            onPageClick={(page) => {
              setPage(page);
              window.scrollTo(0, 0);
            }}
          />
        )}
      </section>
    </>
  );
}
