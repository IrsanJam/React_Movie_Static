import React from "react";
import Contact from "./componen/Contact";
import Hero from "./componen/Hero";
import Navbar from "./componen/Navbar";
import Programming from "./componen/Programming";
import Card from "./componen/Card";
import Footer from "./componen/Footer";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Programming></Programming>
      <Contact></Contact>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
};

export default App;
