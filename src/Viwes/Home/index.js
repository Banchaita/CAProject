import React from 'react'
import { Aboutsection, Footer, Header, Hero, NewsSection, Servicesection, Supportsection, Topbar } from '../../components/Layout'
import { AboutSpan, AboutText, AboutTitle } from '../../constants/Paragram'
import aboutbanner from "../../assets/images/hm-about.jpg"




const index = () => {
  return (
    <>
    <Topbar/>
      <Header/>
      <Hero/>
      <Aboutsection text={AboutText} title={AboutTitle} span={AboutSpan} src={aboutbanner}/>
      <Servicesection/>
      <NewsSection/>
      <Supportsection/>
      <Footer/>
    </>
  )
}

export default index
