import React from 'react'
import Navbar from '../component/Navbar'
import ContactInfoSection from '../component/contact/ContactInfoSection'
import PageHero from '../component/About/PageHero'
import heroBg from "../assets/images/about-bg2.png"
import MessageSection from '../component/contact/MessageSection'
import Footer from '../component/Footer'

const Contactus = () => {
  return (
    <>
    <Navbar/>
     <PageHero
        title="Contact "
        highlight="us"
        subtitle="Explore expert articles, career tips, industry trends, and study abroad guidance to help you make smarter decisions for your future."
        backgroundImage={heroBg}
      />
      <ContactInfoSection/>
      <MessageSection/>
      <Footer/>
    </>
  )
}

export default Contactus
