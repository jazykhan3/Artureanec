import React, { useEffect } from 'react'
import Hero from './Hero'
import Services from './Services'
import Products from './Products'
import About from './About'
import InTouch from './InTouch'

function LandingPage() {
  const storedId = localStorage.getItem("currentId");
  useEffect(() => {
    // Scroll to the reference set in local storage
setTimeout(()=>{    if (storedId) {
  const element = document.getElementById(storedId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}},300)
  }, []);
  return (
    <div>   <Hero />
    <Services />
    <Products />
    <About />
    <InTouch/></div>
  )
}

export default LandingPage