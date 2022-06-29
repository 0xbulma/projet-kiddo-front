import React from "react";
import ActivityCard from "../../components/shared/ActivityCard";
import CategoryCard from "../../components/shared/CategoryCard";
import "./home.css";

export default function Home() {
  const categories = [
    "sportives",
    "artistiques",
    "culturelles",
    "manuelles",
    "d'éveil corporel",
    "autre",
  ];

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
          <ActivityCard
            title={"Sortie randonnée"}
            category={"sport"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nesciunt, officia animi eligendi nulla architecto debitis ut qui asperiores."
            }
            lieu={"Paris"}
            date={"29 mai"}
            prix={"22€"}
          />
          <ActivityCard
            title={"Sortie randonnée"}
            category={"sport"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nesciunt, officia animi eligendi nulla architecto debitis ut qui asperiores."
            }
            lieu={"Paris"}
            date={"29 mai"}
          />
          <ActivityCard
            title={"Sortie randonnée"}
            category={"sport"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nesciunt, officia animi eligendi nulla architecto debitis ut qui asperiores."
            }
            lieu={"Paris"}
            date={"29 mai"}
          />
          <ActivityCard
            title={"Sortie randonnée"}
            category={"sport"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nesciunt, officia animi eligendi nulla architecto debitis ut qui asperiores."
            }
            lieu={"Paris"}
            date={"29 mai"}
          />
        </article>
      </section>
    </>
  );
}
