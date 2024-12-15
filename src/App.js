import "./App.css";
import Ride from "./components/ride";
import Cyclist from "./components/cyclist";
import Header from "./components/header/header";
import RideBlock from "./components/ride/rideBlock";
import Footer from "./components/footer/footer";
// import React, { Component } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <RideBlock />
      <Footer />
    </div>
  );
}

export default App;
