import {CssBaseline ,Typography } from "@mui/material";
import React from "react";
import OfficeBar from "../../Components/BackOffice/OfficeBar";

const UsersBackOffice = () => {
return (<>  
            <CssBaseline/>
            <OfficeBar/>
            <Typography>List of users</Typography>

        </>)
}

export default UsersBackOffice