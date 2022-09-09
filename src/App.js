import React from "react";
import { Hero } from "./components/Hero";
import  Navbar  from "./components/Navbar";
import { About } from "./components/About";
import {Concesionario} from './components/Concesionario'
import { Footer } from "./components/Footer";
import Maquinas from "./components/Maquinas";
import Contact from "./components/Contact";
function App() {
  return (
  <>
  <Navbar />
  <Hero /> 
  <About />
  <Concesionario />
  <Maquinas />
  <Contact />
  <Footer />

  
  </>
  
  )
}

export default App;
