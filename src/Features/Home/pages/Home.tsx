import React from "react"
import HeroSection from "../components/HeroSection"
import Categories from "../components/Categories"
import HowItsWorks from "../components/HowItsWorks"
import Providers from "../components/Providers"
import Testimonials from "../components/Testimonials"
import Offers from "../components/Offers"

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Categories />
      <HowItsWorks />
      <Providers />
      <Testimonials />
      <Offers />
    </div>
  )
}

export default Home
