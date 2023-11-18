import React from "react";
import Image from 'react-bootstrap/Image';
import HeroImg1 from "../assets/images/hero/Rectangle 1241.png";
import HeroImg2 from "../assets/images/hero/Rectangle 1242.png";
import HeroImg3 from "../assets/images/hero/Rectangle 1243.png";
import HeroImg4 from "../assets/images/hero/Rectangle 1244.png";
const Hero = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 py-5">
          <h1 className="">Increase Your Customers Loyalty and Satisfaction</h1>
          <p>
            We help businesses like yours earn more customers, standout from
            competitors, make more money Get Started
          </p>
          <button className="btn btn-success my-3">Get Started</button>
        </div>
        <div className="col-md-6">
            <img src={HeroImg1} className="hero-img img-fluid p-2" width="408" height="271" />
            <img src={HeroImg2} className="hero-img img-fluid p-2" width="180" height="271"/>
            <img src={HeroImg3} className="hero-img img-fluid p-2" width="246" height="164"/>
            <img src={HeroImg4} className="hero-img img-fluid p-2" width="345" height="164"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
