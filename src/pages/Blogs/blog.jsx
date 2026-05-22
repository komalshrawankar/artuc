import React from 'react'
import Navbar from '../../component/Navbar'
import PageHero from '../../component/About/PageHero'
import heroBg from "../../assets/images/about-bg2.png"
import BlogGrid from '../../component/Blog/BlogGrid'
import CareerBanner from '../../component/homepage/CareerBanner'
import Footer from '../../component/Footer'

const blog = () => {
  return (
   <>
   <Navbar/>
    <PageHero
        title="Blogs"
        highlight="Artuc"
        subtitle="Explore expert articles, career tips, industry trends, and study abroad guidance to help you make smarter decisions for your future."
        backgroundImage={heroBg}
      />
      <BlogGrid/>
      <CareerBanner/>
      <Footer/>
   </>
  )
}

export default blog
