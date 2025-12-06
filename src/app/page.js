"use client"
import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ShowCase from './components/ShowCase'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap'
import GetStartedWithCodeDale from './components/GetStartedWithCodeDale'
import { stepsForGettingStarted } from './utils/Utilities'
import OurAchievements from './components/OurAchievements'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

const page = () => {
  // Lenis for Smooth Scroll 
  useEffect(() => {
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
  });

  return (
    <div>
      {/* This is the Header component */}
      <Header />
      {/* This is Hero Section */}
      <Hero />
      {/* The Scrolling Slicks are this component */}
      <ShowCase />
      {/* Steps Animation Section */}
      <GetStartedWithCodeDale StepsArray={stepsForGettingStarted} />
      {/* Achievements section */}
      <OurAchievements />
      {/*  Footer*/}
      <Footer />
    </div>
  )
}

export default page