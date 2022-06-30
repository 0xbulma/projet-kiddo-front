import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import ActivityCard from "../../components/shared/ActivityCard";
import CategoryCard from "../../components/shared/CategoryCard";
import { GET_EVENTS_BASE } from "../../graphql/query/events.query";
import "./home.css";

export default function Home() {
  const [events, setEvents] = useState();
  useQuery(GET_EVENTS_BASE, {
    onCompleted: (data) => {
      setEvents(
        data.events
          .sort((a, b) => {
            return new Date(b.event_date.start) - new Date(a.event_date.start);
          })
          .slice(0, 6)
      );
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const categories = [
    { name: "sportives", url: "/asset/img/sportives.jpg" },
    { name: "artistiques", url: "/asset/img/art.jpg" },
    { name: "culturelles", url: "/asset/img/culturelle.jpg" },
    { name: "d'éveil corporel", url: "/asset/img/eveil.jpg" },
    { name: "manuelles", url: "/asset/img/manuelles.jpg" },
    { name: "autres", url: "/asset/img/autres.jpg" },
  ];

  // const [GET_EVENTS_BY_ID] = useLazyQuery(GET_EVENTS_BASE, )

  //onClick={() => openEvent(event._id)}
  // const openEvent = (eventId)=> {
  // navigate vers element donné
  // const clickedEvent = GET_EVENTS_BY_ID({variables: {
  //   _id: eventId
  // }});

  //navigate ta page > clickedEvent
  //EventPage -> props.event -> requête
  // }
  return (
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
                <CategoryCard
                  name={category.name}
                  url={category.url}
                  key={index}
                />
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
            {events &&
              events.map((event, index) => {
                console.log("event", event);
                return (
                  <ActivityCard
                    key={index}
                    // a enelver quand vrai titre
                    title={event.content.title}
                    // category={event.categories}
                    category={"sport"}
                    description={event.content.description}
                    lieu={event.adress}
                    date={event.event_date.start}
                    prix={event.price.adult}
                  />
                );
              })}
          </article>
        </section>
      </section>
    </>
  );
}
