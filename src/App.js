import React from "react";
//import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Navbars from "./components/navbars/Navbars";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Navbar />
      <Navbars />
      <Header />
    </>
      
  );
}

export default App;
