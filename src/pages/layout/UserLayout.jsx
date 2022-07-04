import React from "react";

// import Header from "../../components/app/header/Header";
import Footer from "../../components/app/footer/Footer";

import "./_userLayout.css";
import Example from "../../components/app/header/Example";

export default function UserLayout({ composant }) {
  return (
    <>
      {/* <Header /> */}
      <Example />
      <div>{composant}</div>
      <Footer />
    </>
  );
}
