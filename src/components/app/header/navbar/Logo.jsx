import { Fragment } from "react";

export default function Logo({ titleProp }) {
  return (
    <div className="md:mr-10 md:-ml-14">
      <a href="/" className="">
        <Fragment key={titleProp.title}>
          <img src={titleProp.imgSrc} alt={titleProp.imgAlt} className="w-36 h-36" />
        </Fragment>
      </a>
    </div>
  );
}
