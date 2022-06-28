import { Fragment } from "react";
import { titleProp } from "../../../../../constants/navBar";

export default function Logo({ home }) {
  return (
    <div className="Navbar__logo">
      <a href="/" className="logo-link">
        <Fragment key={titleProp.title}>
          <img src={titleProp.imgSrc} alt={titleProp.imgAlt} />
          <p className="title">{titleProp.title}</p>
        </Fragment>
      </a>
    </div>
  );
}
