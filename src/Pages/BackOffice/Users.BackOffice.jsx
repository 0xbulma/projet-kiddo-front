import { Typography } from "@mui/material";
import React from "react";
import NavBarAdmin from "../../Components/BackOffice/NavBarAdmin";
// import OfficeBar from "../../Components/BackOffice/OfficeBar/OfficeBar";

const UsersBackOffice = () => {
  return (
    <>
      {/* <CssBaseline />
      <OfficeBar /> */}
      <NavBarAdmin />
      <Typography>List of users</Typography>
    </>
  );
};

export default UsersBackOffice;
