import React from "react";

import Header from "../../components/app/header/Header";
import Footer from "../../components/app/footer/Footer";
import AppRoutes from "./AppRoutes";

export default function App(isAdmin) {
  return (
    <div className="index">
      <Header isAdmin={isAdmin}/>
      <AppRoutes />
      <Footer />
    </div>
  );
}
