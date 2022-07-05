import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import Skelet from "../../components/shared/loadingfiles/Skelet";
import ActivityCard from "../../components/shared/card/ActivityCard";
import CategoryCard from "../../components/shared/card/CategoryCard";
import LoadingComponent from "../../components/shared/loadingfiles/LoadingComponent";
import {
  GET_EVENTS_BASE,
  GET_LAST_EVENTS,
} from "../../graphql/query/events.query";

import "./home.css";

export default function Home() {
  const { error, loading, data } = useQuery(GET_EVENTS_BASE, {
    variables: { first: 6, offset: 0 },
  });

  const {
    error: errorLast,
    loading: loadingLast,
    data: dataLast,
  } = useQuery(GET_LAST_EVENTS, {
    variables: { first: 6, offset: 0 },
  });
  useEffect(() => {
    if (data) {
      console.log("data-->", data);
    }
    if (error) {
      console.log("error", error);
    }
    if (dataLast) {
      console.log("dataLast-->", dataLast);
    }
    if (errorLast) {
      console.log("errorLast", errorLast);
    }
  }, [data, error, dataLast, errorLast]);

  const categories = [
    { name: "sportives", url: "/assets/img/sportives.jpg", category: "sport" },
    { name: "artistiques", url: "/assets/img/art.jpg", category: "art" },
    {
      name: "culturelles",
      url: "/assets/img/culturelle.jpg",
      category: "culture",
    },
    {
      name: "d'éveil corporel",
      url: "/assets/img/eveil.jpg",
      category: "eveil",
    },
    { name: "manuelles", url: "/assets/img/manuelles.jpg", category: "manuel" },
    { name: "autres", url: "/assets/img/autres.jpg", category: "autres" },
  ];

  return loading || loadingLast ? (
    <>
      <LoadingComponent />
    </>
  ) : (
    <>
      <section className="hero">
        <article className="title-hero-container">
          <h1>KIDDO</h1>
          <h2>S'amuser autrement</h2>
          <h3>Passez des bons moments amusants et inoubliables en famille </h3>
        </article>
        <article className="hero-div">
          <div className="sous-hero-div">Participer aux activités</div>
          <div className="sous-hero-div">Organiser des activités</div>
        </article>
      </section>

      <section className="container-user">
        <section className="category-container">
          <div className="home-title-category">
            <div className="fleche"></div>
            <h2>catégories d'activités</h2>
            <div className="fleche"></div>
          </div>
          <article className="category-card-container">
            {categories.map((category, index) => {
              return (
                <Link to={`/category/${category.category}`}>
                  <CategoryCard
                    name={category.name}
                    url={category.url}
                    key={index}
                  />
                </Link>
              );
            })}
          </article>
        </section>

        <section className="activity-container">
          <div className="title-activity-container">
            <h2>Activités prévues cette semaine</h2>
            <span>calendrier des activités</span>
          </div>
          <article className="activity-card-container">
            {data &&
              data.events.map((event, index) => {
                // console.log("event", event);
                return (
                  <Link to={`/event/${event._id}`}>
                    <ActivityCard
                      key={index}
                      title={event.content.title}
                      category={event.categories.name}
                      description={event.content.description}
                      lieu={event.adress}
                      date={event.event_date.start}
                      prix={event.price.adult}
                    />
                  </Link>
                );
              })}
          </article>
        </section>

        <section className="lasted-acitivty-container">
          <div className="title-activity-container">
            <h2>Dernières activités</h2>
            <span>calendrier des activités</span>
          </div>
          <article className="activity-card-container">
            {dataLast &&
              dataLast.events.map((event, index) => {
                // console.log("event", event);
                return (
                  <Link to={`/event/${event._id}`}>
                    <ActivityCard
                      key={index}
                      title={event.content.title}
                      category={event.categories.name}
                      description={event.content.description}
                      lieu={event.adress}
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
