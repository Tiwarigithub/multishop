import React from 'react'
import TopNavbar from '../components/TopNavbar'
import HeroSection from '../components/HeroSection'
import MiddleSection from '../components/MiddleSection'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'

function Home() {
  return (
    <>
        <TopNavbar/>
        <HeroSection/>
        <MiddleSection/>
        <ContactSection/>
        <Footer/>
    </>
  )
}

export default Home
