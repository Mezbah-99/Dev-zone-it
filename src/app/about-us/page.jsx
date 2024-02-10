import AboutUsTwo from '@/components/AboutUs/AboutUs-2'
import Testimonials from '@/components/AboutUs/Testimonials'
import Aim from '@/components/Others/Aim'
import Vision from '@/components/Others/Vision'
import FreeServices from '@/components/Services/FreeServices'
import OurTeam from '@/components/ourTeam/OurTeam'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <AboutUsTwo/>
      <FreeServices/>
      <OurTeam/>
      <Aim/>
      <Vision/>
      <Testimonials/>
    </div>
  )
}

export default AboutUs