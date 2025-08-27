import React from 'react'
import Navbar from './components/navbar'
import HeroSecrion from './components/HeroSecrion'
import FeatuerSection from './components/FeatuerSection'
import WorkflowSection from './components/WorkflowSection'
import Price from './components/Price'
import Tasitimonials from './components/Tasitimonials'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSecrion />
        <FeatuerSection />
        <WorkflowSection />
        <Price />
        <Tasitimonials />
        <Footer />
    </div>
   
    </div>
  )
}

export default App
