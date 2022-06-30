import React from "react";
import { Skeleton } from "react-skeleton-generator";
const Skelet = () => {
  return (
    <>
      <div className="w-72">
        <Skeleton.SkeletonThemeProvider
          style={{
            backgroundColor: "lightgrey",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <Skeleton height="150px" borderRadius="10px" />
          <Skeleton count={2} />
        </Skeleton.SkeletonThemeProvider>
      </div>
    </>
  );
};

export default Skelet;
