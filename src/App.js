import React from "react";
import "./App.css";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import { About } from "./components/About";
import { Concesionario } from './components/Concesionario'
import { Footer } from "./components/Footer";
import Maquinas from "./components/Maquinas";
import Contact from "./components/Contact";
import Carousel from "./components/Carousel";
import { maquinarias } from "./components/CarouselData"
import {Maps} from './components/Maps'
function App() {
  return (
    <>  

      <Navbar />
      <Hero />
      <About />
      <Concesionario />
      <Maquinas   />
      <Contact />

      <Maps />
      
       {/* <About />
       <Maquinas />
       <Contact />
       <div className="App">
        <Carousel images={maquinarias} />
      </div>  */}
    </>

  )
}

export default App;
