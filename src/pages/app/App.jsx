import React from "react";

import Header from "../../components/app/header/Header";
import Footer from "../../components/app/footer/Footer";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <div className="index">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}
