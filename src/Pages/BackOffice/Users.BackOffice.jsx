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
      <p>List of users</p>
    </>
  );
};

export default UsersBackOffice;
