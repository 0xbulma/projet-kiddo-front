import React from "react";
import { CssBaseline, Container } from "@mui/material";
import OfficeBar from "../../Components/BackOffice/OfficeBar";

export default function Contact() {
  return (
    <>
      <CssBaseline />
      <OfficeBar />
      <main>
        <div>
          <Container maxWidth="sm"></Container>
        </div>
      </main>
    </>
  );
}
