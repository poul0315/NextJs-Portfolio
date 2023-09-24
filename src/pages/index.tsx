import React from 'react'
import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import About from '@/sections/about'
import Experience from '@/sections/Experience'
import Project from '@/sections/Project'
import Footer from '@/sections/Footer'
import SocialIcons from '@/components/SocialIcons'
import Email from '@/components/Email'

function Index() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main-component">
        <div className="main-component-hero">
          <Hero />
        </div>
        <div className="main-component-skill">
          <About />
        </div>
        <div className="main-component-experience">
          <Experience />
        </div>
        <div className="main-component-project">
        <Project />
        </div>
        <div className="footer-main">
          <Footer />
        </div>
      </div>
      <SocialIcons />
      <Email />
    </div>
  )
}

export default Index;