import { Typography } from "@mui/material";
import React from "react";
import NavBarAdmin from "../../Components/BackOffice/NavBarAdmin";
// import OfficeBar from "../../Components/BackOffice/OfficeBar/OfficeBar";

const ExtraBackOffice = () => {
  return (
    <>
      {/* <CssBaseline />
      <OfficeBar /> */}
      <NavBarAdmin /> 
      <Typography>List of extra</Typography>
    </>
  );
};

export default ExtraBackOffice;
