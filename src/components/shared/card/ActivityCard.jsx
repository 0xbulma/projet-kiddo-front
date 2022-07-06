import React from "react";
import activityPic from "../../../assets/images/GDN2.jpg";
import "./activity-card.css";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faEuroSign as euroSolid } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

import getCategoryColor from "../../../utils/constants/categoryColors";

const ActivityCard = ({ title, category, lieu, date, prix }) => {
  const formatedDate = new Date(date).toLocaleDateString("fr");
  const categoryStyle = "card-category " + getCategoryColor(category);

  return (
    <>
      <article className="card">
        <div className="card-thumb">
          <img src={activityPic} alt="card-thumb__img acitivty" />
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
            <div className={categoryStyle}>{category}</div>
            <h3 className="card-title">{title}</h3>
          </div>

          <div className="card-footer">
            <div className="card-place">
              <FontAwesomeIcon icon={faMapPin} />
              {lieu}
            </div>
            <div className="card-date">
              <FontAwesomeIcon icon={faCalendarDay} />
              {formatedDate}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ActivityCard;
