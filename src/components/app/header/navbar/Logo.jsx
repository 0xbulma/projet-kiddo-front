import { Fragment } from "react";

export default function Logo({ titleProp }) {
  return (
    <div className="mr-10 -ml-14">
      <a href="/" className="">
        <Fragment key={titleProp.title}>
          <img src={titleProp.imgSrc} alt={titleProp.imgAlt} className="w-24 h-24" />
        </Fragment>
      </a>
    </div>
  );
}
