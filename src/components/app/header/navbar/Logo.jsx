import { Fragment } from "react";

export default function Logo({ titleProp }) {
  return (
    <div className="md:mr-10 md:-ml-14">
      <a href="/" className="">
        <Fragment key={titleProp.title}>
          <titleProp.img className="w-36 h-36" />
        </Fragment>
      </a>
    </div>
  );
}
