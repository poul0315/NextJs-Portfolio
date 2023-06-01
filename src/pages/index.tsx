import React from 'react'
import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import SocialIcons from '@/components/SocialIcons'
import Email from '@/components/Email'

function Index() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <SocialIcons />
      <Email />
    </div>
  )
}

export default Index;