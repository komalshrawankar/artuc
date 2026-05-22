import React from 'react'
import Navbar from '../component/Navbar'
import HomeHero from '../component/homepage/homehero'
import Partners from "../component/homepage/Partners";
import ServicesOffer from '../component/homepage/ServicesOffer';
import WhyChoose from '../component/homepage/WhyChoose';
import CoursesSection from '../component/homepage/CoursesSection';
import TopCountries from '../component/homepage/TopCountries';
import Testimonials from '../component/homepage/Testimonials';
import BlogSection from '../component/homepage/BlogSection';
import CareerBanner from '../component/homepage/CareerBanner';
import Footer from '../component/Footer';

const Home = () => {
  return (
    <>
    <Navbar/>
    <HomeHero/>
    <Partners />
    <ServicesOffer/>
    <WhyChoose/>
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
