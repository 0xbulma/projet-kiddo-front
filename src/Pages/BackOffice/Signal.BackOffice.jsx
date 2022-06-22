import { CssBaseline, Typography } from "@mui/material";
import React from "react";
import OfficeBar from "../../Components/BackOffice/OfficeBar";

const SignalBackOffice = () => {
  return (
    <>
      <CssBaseline />
      <OfficeBar />
      <Typography>List of Signal</Typography>
    </>
  );
};

export default SignalBackOffice;
