import React from 'react'
import Navbar from '../component/Navbar'
import PageHero from "../component/About/PageHero";
import heroBg from "../assets/images/about-bg2.png";
import StatsSection from '../component/About/StatsSection';
import AboutIntro from '../component/About/AboutIntro';
import WhatWeDo from '../component/About/WhatWeDo';
import WhyChoose from '../component/homepage/WhyChoose';
import Testimonials from '../component/homepage/Testimonials';
import UniversitySlider from '../component/About/UniversitySlider';
import Footer from '../component/Footer';


const About = () => {
  return (
    <>
    <Navbar/>
     <PageHero
        title="About"
        highlight="Artuc"
        subtitle="Empowering Careers. Creating Global Opportunities."
        backgroundImage={heroBg}
      />
      <StatsSection/>
      <AboutIntro/>
      <WhatWeDo/>
      <WhyChoose/>
      <Testimonials/>
      <UniversitySlider/>
      <Footer/>
    </>
  )
}

export default About
