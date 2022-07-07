import React from "react";
import { Skeleton } from "react-skeleton-generator";

const Skelet = () => {
  return (
        <Skeleton.SkeletonThemeProvider
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            width: "100%",
            boxShadow: "4px 4px 8px rgba(0,0,0,0.15)",
            padding:"0.5rem"
          }}
        >
          <Skeleton height="180px" width='100%' borderRadius="15px" />
          <Skeleton count={2} width='100%'  borderRadius="10px"/>
        </Skeleton.SkeletonThemeProvider>


  );
};

export default Skelet;
