import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default page
