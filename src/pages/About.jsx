import React from 'react'
import Navbar from '../component/Navbar'
import PageHero from "../component/About/PageHero";
import heroBg from "../assets/images/about-bg2.png";
import StatsSection from '../component/About/StatsSection';
import AboutIntro from '../component/About/AboutIntro';
import WhatWeDo from '../component/About/WhatWeDo';
import WhyChooseTemplate from '../component/homepage/WhyChooseTemplate';
import Testimonials from '../component/homepage/Testimonials';
import UniversitySlider from '../component/About/UniversitySlider';
import Footer from '../component/Footer';
import whyBg from "../assets/homepage/why-bg.jpg"
import whyImage from "../assets/homepage/expert.png"

const points = [
  "Industry-relevant training programs",
  "100% placement assistance",
  "Expert trainers",
  "Interview preparation support",
  "Global education consultancy",
  "Personalized career guidance",
];


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
     <WhyChooseTemplate
  bgImage={whyBg}
  mainImage={whyImage}
  tag="Why Choose us"
  beforeText="We Are Expert &"
  orangeText="Do Our"
  orangeText2="Best"
  afterText="For Your Goal"
  description="We provide career-focused training, expert guidance, and complete support to help students achieve their academic and professional goals."
  points={points}
/>
      <Testimonials/>
      <UniversitySlider/>
      <Footer/>
    </>
  )
}

export default About
