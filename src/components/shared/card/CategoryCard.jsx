import React from "react";
import { FaCopyright } from "react-icons/fa";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCopyright } from "@fortawesome/free-solid-svg-icons";
// import activityPic from "../../assets/img/GDN2.jpg";
import "./category-card.css";
// import logo from "../../../public/logo.png";

const CategoryCard = ({ name, url }) => {
  return (
    <div>
      <article className="card-categ-contain">
        <div>
          <img
            src={url}
            alt="activity"
            style={{ width: "100%", height: "235px" }}
          />
        </div>
        <div className="category-card-icon">
          <FaCopyright className="category-card-icons" />
        </div>

        <div className="category-card-footer">
          <div>
            <h3>Activités {name}</h3>
          </div>
          <div>
            <button>Découvrir</button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CategoryCard;
