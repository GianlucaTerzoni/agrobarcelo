import React from 'react'
import Navbar from '../components/Navbar'
import { Concesionario } from '../components/Concesionario'
import { About } from '../components/About'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import Maquinas from '../components/Maquinas'
import Contact from '../components/Contact'

export const HomeRoutes = () => {
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
