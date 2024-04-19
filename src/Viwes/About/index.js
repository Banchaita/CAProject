import React from 'react'
import { Aboutsection,Footer, Header, Topbar } from '../../components/Layout'
import CommonBanner from '../../components/CommonBanner'
import banner from '../../assets/images/banner-2.jpg'
import { ProfileSpan, ProfileText, ProfileTitle } from '../../constants/Paragram'
import aboutImage from '../../assets/images/hm-call.png'
import OurValue from '../../components/OurValue'
import WhatWeDo from '../../components/WhatWeDo'
import WhyUs from '../../components/WhyUs'



const About = () => {
  console.log(ProfileText)
  return (
    <>
      <Topbar/>
      <Header/>
      <CommonBanner src={banner} text="About" url="/about"/> 
      <Aboutsection text={ProfileText} title={ProfileTitle} span={ProfileSpan} src={aboutImage} />
      <OurValue/>
      <WhatWeDo/>
      <WhyUs/>
      <Footer/>
    
    </>
  )
}

export default About
