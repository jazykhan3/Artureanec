import React from 'react'
import Hero from './Hero'
import Services from './Services'
import Products from './Products'
import About from './About'
import InTouch from './InTouch'

function LandingPage() {
  return (
    <div>   <Hero />
    <Services />
    <Products />
    <About />
    <InTouch/></div>
  )
}

export default LandingPage