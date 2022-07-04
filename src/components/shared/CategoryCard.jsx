import React from "react";
import { FaCopyright } from "react-icons/fa";

import activityPic from "../../assets/images/GDN2.jpg";
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
          <FaCopyright className="category-card-icons" />
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
