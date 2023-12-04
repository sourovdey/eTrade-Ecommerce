import React from 'react'
import Campain from '../Components/Public Component/Campain';
import TopMenu from '../Components/Public Component/TopMenu';
import MainMenu from '../Components/Public Component/MainMenu';
import HeroSection from '../Components/Pages Component/Home Components/HeroSection';
import Footer from '../Components/Public Component/Footer';

const Home = () => {
  return (
    <>
        <Campain/>
        <TopMenu/>
        <MainMenu/>
        <HeroSection/>
        <Footer/>
    </>
    
    
  )
}

export default Home