import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs, faFilter } from '@fortawesome/free-solid-svg-icons';
import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_EVENTS_CATEGORY } from '../../graphql/query/events.query';
import { GET_CATEGORY_BY_NAME } from '../../graphql/query/extra.query';
import MapLeaflet from '../../components/shared/MapLeaflet';
import { GridCol2, GridItemSpan2 } from '../../components/shared/GridCol';
import LoadIconBtn from '../../components/shared/loadingfiles/LoadIconBtn';
import ActivityCard from '../../components/shared/card/ActivityCard';
import './categoryPage.css';
import getGeoLoc from '../../utils/getGeoLoc';
import PaginationComp from '../../components/shared/PaginationComp';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function CategoryPage(props) {
  let navigate = useNavigate();
  const ITEMS_PER_PAGE = 12;
  const [page, setPage] = useState(1);

  const { category } = useParams();
  const [geoLoc, setGeoLoc] = useState({
    isLoading: false,
    coords: null,
  });

  const {
    // loading: loading2,
    // error: error2,
    data: data2,
  } = useQuery(GET_CATEGORY_BY_NAME, { variables: { name: category } });

  const [getEvents, { loading, error, data, refetch }] = useLazyQuery(GET_EVENTS_CATEGORY);

  useEffect(() => {
    if (data2?.category === null) {
      navigate('/404');
    }

    if (data2?.category && !data) {
      getEvents({
        variables: {
          input: {
            first: ITEMS_PER_PAGE,
            offset: page * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
            categories: data2.category._id,
            status: 'PUBLISHED',
            minDate: Date.now(),
            dateOrder: 'asc',
            minChildAge: 0,
            maxChildAge: 12,
          },
        },
      });
    }
    if (data) {
      refetch({
        input: {
          first: ITEMS_PER_PAGE,
          offset: page * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
          categories: data2.category._id,
          status: 'PUBLISHED',
          minDate: Date.now(),
          dateOrder: 'asc',
          minChildAge: 0,
          maxChildAge: 12,
        },
      });
    }
  }, [data2, getEvents, page, data, refetch, navigate]);

  const onClickHandler = () => {
    setGeoLoc(geoLoc => ({ ...geoLoc, isLoading: true }));

    getGeoLoc()
      .then(res => {
        return setGeoLoc(geoLoc => ({
          ...geoLoc,
          isLoading: false,
          coords: res,
        }));
      })
      .catch(err => {
        alert(err.message);
        return setGeoLoc(geoLoc => ({ ...geoLoc, isLoading: false }));
      });
  };

  useEffect(() => {
    console.log(geoLoc);
  }, [geoLoc]);

  return (
    <div className='container mx-auto'>
      <div className='category'>
        <h1 className='category__title'>Title: Activités sportives</h1>
        <p className='category__subtitle'>
          Subtitle: Se depenser en s’amuser, rien de mieux pour lier le plaisir et la santé en famille{' '}
        </p>
      </div>

      {loading && <div>LOADING</div>}
      {error && <div>ERROR</div>}
      {data && (
        <div className='relative flex gap-8'>
          <GridCol2 className='grow-0'>
            <GridItemSpan2>
              <div className='filter__group'>
                <button className='filter__container' onClick={onClickHandler}>
                  {geoLoc.isLoading ? <LoadIconBtn /> : <FontAwesomeIcon icon={faLocationCrosshairs} />}
                  <div className='filter__text'>Activités autour de moi</div>
                </button>
                <div className='filter__container'>
                  <FontAwesomeIcon icon={faFilter} />
                  <div className='filter__text'>Critères de recherche</div>
                </div>
              </div>
            </GridItemSpan2>

            {data.eventsComplexQuery.results.map((data, index) => {
              return (
                <Link  key={data._id} to={`/event/${data._id}`}>
                <ActivityCard
                  title={data.content.title}
                  // category={data.categories}
                  category={data2.category.name}
                  lieu={data.adress.city}
                  date={data.event_date.start}
                  prix={data.price.adult}
                />
                </ Link>
              );
            })}

            <GridItemSpan2>
              <PaginationComp
                totalItem={data.eventsComplexQuery.count}
                itemsPerPage={12}
                page={page}
                onPageClick={page => {
                  setPage(page);
                }}
              />
            </GridItemSpan2>
          </GridCol2>
          <MapLeaflet
            className='bg-yellow-300 rounded-xl'
            items={data.eventsComplexQuery.results}
          />
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
