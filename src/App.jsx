import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import AboutMe from './components/AboutMe/About'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonia from './components/Testimonial/Testimonia'
import Contact from './components/contactMe/Contact'
import Footer from './components/Footer/Footer'
import Experiance from './components/Experiance/Experiance'


const App = () => {
  return (
    <>
     <Nav />
     <Header />
     <AboutMe />
     <Experiance />
     <Services />
     <Portfolio />
     <Testimonia />
     <Contact />
     <Footer />
    </>
  )
}

export default App
