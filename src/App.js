import React from "react";

import "./styles.css";

import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Feed />
      <Footer />
    </div>
  );
}
