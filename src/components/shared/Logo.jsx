import { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function Logo({ titleProp, className }) {
  return (
    <NavLink to="/">
      <span className="sr-only">Workflow</span>
      <Fragment key={titleProp.title}>
        <titleProp.img className={className} />
      </Fragment>
    </NavLink>
  );
}
