import { useQuery } from "@apollo/client";
import React, { useState} from "react";
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
          .slice(0, 10)
      );
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const categories = [
    "sportives",
    "artistiques",
    "culturelles",
    "manuelles",
    "d'éveil corporel",
    "autre",
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
        <article>
          <div>Participer aux activités</div>
          <div>Organiser des activités</div>
        </article>
      </section>
      <section>
        <div>
          <h2>catégories d'activités</h2>
          <span>calendrier des activités</span>
        </div>

        <article className="category-card-container">
          {categories.map((category, index) => {
            return <CategoryCard category={category} key={index} />;
          })}
        </article>
      </section>

      <section>
        <h2>Activités prévues cette semaine</h2>
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
    </>
  );
}
