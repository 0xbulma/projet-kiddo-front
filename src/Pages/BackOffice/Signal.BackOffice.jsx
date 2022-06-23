import { Typography } from "@mui/material";
import React from "react";
import NavBarAdmin from "../../Components/BackOffice/NavBarAdmin";
// import OfficeBar from "../../Components/BackOffice/OfficeBar/OfficeBar";

export default function SignalBackOffice () {
  return (
    <>
      {/* <CssBaseline />
      <OfficeBar /> */}
      <NavBarAdmin />
      <Typography>List of Signal</Typography>
    </>
  );
};
