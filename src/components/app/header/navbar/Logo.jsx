import { Fragment } from "react";

export default function Logo({ titleProp }) {
  return (
    <div className="">
      <a href="/" className="">
        <Fragment key={titleProp.title}>
          <img src={titleProp.imgSrc} alt={titleProp.imgAlt} />
        </Fragment>
      </a>
    </div>
  );
}
