import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_EVENTS_CATEGORY } from "../../graphql/query/events.query";
import { GET_CATEGORY_BY_NAME } from "../../graphql/query/extra.query";

// import AppMap from '../../components/shared/AppMap';
import MapLeaflet from "../../components/shared/MapLeaflet";

import {
  GridCol3,
  GridCol2,
  GridItemSpan2,
  GridItemSpan1,
} from "../../components/shared/GridCol";

import LoadIconBtn from "../../components/shared/loadingfiles/LoadIconBtn";
import ActivityCard from "../../components/shared/card/ActivityCard";

import "./_categoryPage.css";

import getGeoLoc from "../../utils/getGeoLoc";
import Pagination from "../../components/shared/Pagination";

function CategoryPage(props) {
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

  const [getEvents, { loading, error, data }] =
    useLazyQuery(GET_EVENTS_CATEGORY);

  useEffect(() => {
    if (data2) {
      getEvents({
        variables: {
          filter: data2.category._id,
          filterKey: "categories",
          offset: 0,
          limit: 12,
        },
      });
    }
  }, [data2, getEvents]);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  const onClickHandler = () => {
    setGeoLoc((geoLoc) => ({ ...geoLoc, isLoading: true }));

    getGeoLoc()
      .then((res) => {
        return setGeoLoc((geoLoc) => ({
          ...geoLoc,
          isLoading: false,
          coords: res,
        }));
      })
      .catch((err) => {
        alert(err.message);
        return setGeoLoc((geoLoc) => ({ ...geoLoc, isLoading: false }));
      });
  };

  useEffect(() => {
    console.log(geoLoc);
  }, [geoLoc]);

  return (
    <>
      <div className="category">
        <h1 className="category__title">Title: Activités sportives</h1>
        <p className="category__subtitle">
          Subtitle: Se depenser en s’amuser, rien de mieux pour lier le plaisir
          et la santé en famille{" "}
        </p>
      </div>

      {loading && <div>LOADING</div>}
      {error && <div>ERROR</div>}
      {data && (
        <GridCol3 className="bg-red-500 relative)">
          <GridCol2 className="col-span-2">
            <GridItemSpan2>
              <div className="filter_group">
                <button className="filter__container" onClick={onClickHandler}>
                  {geoLoc.isLoading ? (
                    <LoadIconBtn />
                  ) : (
                    <FontAwesomeIcon icon={faLocationCrosshairs} />
                  )}
                  <div className="filter__text">Activités autour de moi</div>
                </button>
                <div className="filter__container">
                  <FontAwesomeIcon icon={faFilter} />
                  <div className="filter__text">Critères de recherche</div>
                </div>
              </div>
            </GridItemSpan2>

            {data.events.map((data, index) => {
              console.log("event", data);
              return (
                <GridItemSpan1>
                  <ActivityCard
                    key={index}
                    // a enelver quand vrai titre
                    title={data.content.title}
                    // category={data.categories}
                    category={"sport"}
                    description={data.content.description}
                    lieu={data.adress}
                    date={data.event_date.start}
                    prix={data.price.adult}
                  />
                </GridItemSpan1>
              );
            })}

            <GridItemSpan2>
              <Pagination />
            </GridItemSpan2>
          </GridCol2>
          <div className="sticky top-0 right-0 bg-yellow-300 h-64 w-92">
            <MapLeaflet />
          </div>
        </GridCol3>
      )}
    </>
  );
}

export default CategoryPage;
