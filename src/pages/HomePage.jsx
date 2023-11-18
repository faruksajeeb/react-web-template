import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import OurPartner from '../components/OurPartner';
import WorkList from '../components/WorkList';
import StatList from '../components/StatList';
import FeaturedProject from './../components/FeaturedProject';
import SubscribeSection from '../components/SubscribeSection';
import Footer from '../components/Footer';
const HomePage = () => {
  return (
    <>
    <Header/>
    <Hero/>    
    <OurPartner/>
    <WorkList/>
    <StatList/>
    <FeaturedProject/>
    <SubscribeSection/>
    <Footer/>
    </>
  );
};

export default HomePage;
