import { Fragment } from "react";
//import { titleProp } from "../../../../../constants/navBar";

export default function Logo({ home }) {
  return (
    <div className="Navbar__logo">
      <a href="/" className="logo-link">
        <Fragment key=''>
          <img src='' alt='' />
          <p className="title">Logo</p>
        </Fragment>
      </a>
    </div>
  );
}
