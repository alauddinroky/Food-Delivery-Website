import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import LandingPage from "./components/TopSection/LandingPage";
import Navbar from "./components/NavBar/Navbar";
import WhatWeServe from "./components/WhatWeServe/WhatWeServe";
import OurMenu from "./components/OurMenu/OurMenu";
import Menu from "./components/Menu/Menu";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <WhatWeServe />
      <OurMenu />
      <Testimonial />
      <Footer />
      {/* <Menu /> */}
    </>
  );
}

export default App;
