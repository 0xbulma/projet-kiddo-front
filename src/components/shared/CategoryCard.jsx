import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import activityPic from "../../assets/img/GDN2.jpg";
import "./_category-card.css";

const CategoryCard = ({ category }) => {
  return (
    <div>
      <article className="card-categ-contain">
        <div className="card_thumb">
          <img
            src={activityPic}
            alt="acitivty"
            // style={{ width: "370px", height: "235px" }}
          />
        </div>
        <div className="category-card-icon">
          <FontAwesomeIcon className="category-card-icons" icon={faCopyright} />
        </div>

        <footer className="category-card-footer">
          <div>
            <h3>Activités {category}</h3>
          </div>
          <button>Découvrir</button>
        </footer>
      </article>
    </div>
  );
};

export default CategoryCard;
