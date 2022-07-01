import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const LoadingComponent = () => {
  return (
    <>
      <div className="flex justify-center items-center my-40">
        <PacmanLoader color={"#79D2E6"} size={100} />
      </div>
    </>
  );
};

export default LoadingComponent;
