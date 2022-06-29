import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import activityPic from "../../assets/img/GDN2.jpg";
import "./_activity-card.css";

const ActivityCard = ({ title, category, description, lieu, date, prix }) => {
  return (
    <>
      <article className="card">
        <div className="card_thumb">
          <img
            src={activityPic}
            alt="acitivty"
            // style={{ width: "370px", height: "235px" }}
          />
        </div>
        <div className="card-icons">
          <span className="card-icon-price">
            <FontAwesomeIcon className="card-icon" icon={faCopyright} />
            <span className="card-icon-price-show" style={{ color: "white" }}>
              {prix}
            </span>
          </span>
          <span>
            <FontAwesomeIcon className="card-icon" icon={faCopyright} />
          </span>
        </div>

        <div className="card-body">
          <div className="card-category">{category}</div>
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>

        <footer className="card-footer">
          <span className="card-place">{lieu}</span>
          <span className="card-date">{date}</span>
        </footer>
      </article>
    </>
  );
};

export default ActivityCard;
