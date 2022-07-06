import React from "react";
import { Skeleton } from "react-skeleton-generator";

const Skelet = () => {
  return (
        <Skeleton.SkeletonThemeProvider
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            width: "100%",
          }}
        >
          <Skeleton height="180px" width='100%' borderRadius="10px" />
          <Skeleton count={2} width='100%' />
        </Skeleton.SkeletonThemeProvider>


  );
};

export default Skelet;
