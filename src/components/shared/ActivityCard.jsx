import React from "react";
import activityPic from "../../assets/images/GDN2.jpg";
import "./_activity-card.css";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faEuroSign as euroSolid } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

const ActivityCard = ({ title, category, description, lieu, date, prix }) => {
  const formatedDate = new Date(date).toLocaleDateString("fr");

  return (
    <>
      <article className="card">
        <div className="card_thumb">
          <img src={activityPic} alt="acitivty" />
        </div>
        <div className="card-icons">
          <span className="card-icon-price">
            <FontAwesomeIcon className="card-icon" icon={euroSolid} />
            <span className="card-icon-price-show" style={{ color: "white" }}>
              {prix}
            </span>
          </span>
          <span>
            <FontAwesomeIcon className="card-icon" icon={faCopyright} />
          </span>
        </div>
        <div className="card-bottom">
          <div className="card-body">
            <div className="card-category">{category}</div>
            <h3 className="card-title">{title}</h3>
            {/* <p className="card-description">{description}</p> */}
          </div>

          <div className="card-footer">
            <span className="card-place">
              <FontAwesomeIcon icon={faMapPin} />
              {lieu}
            </span>
            <span className="card-date">
              <FontAwesomeIcon icon={faCalendarDay} />
              {formatedDate}
            </span>
          </div>
        </div>
      </article>
    </>
  );
};

export default ActivityCard;
