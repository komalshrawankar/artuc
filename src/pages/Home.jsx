import React from 'react'
import Navbar from '../component/Navbar'
import HomeHero from '../component/homepage/homehero'
import Partners from "../component/homepage/Partners";
import ServicesOffer from '../component/homepage/ServicesOffer';
import WhyChooseTemplate from '../component/homepage/WhyChooseTemplate';
import CoursesSection from '../component/homepage/CoursesSection';
import TopCountries from '../component/homepage/TopCountries';
import Testimonials from '../component/homepage/Testimonials';
import BlogSection from '../component/homepage/BlogSection';
import CareerBanner from '../component/homepage/CareerBanner';
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


const Home = () => {
  return (
    <>
    <Navbar/>
    <HomeHero/>
    <Partners />
    <ServicesOffer/>
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
    <CoursesSection/>
    <TopCountries/>
    <Testimonials/>
    <BlogSection/>
    <CareerBanner/>
    <Footer/>

    </>
  )
}

export default Home
