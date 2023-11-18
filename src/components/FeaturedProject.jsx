import React from "react";
import feImg1 from "../assets/images/featured/Mask.png";
import feImg2 from "../assets/images/featured/Mask (1).png";
import feImg3 from "../assets/images/featured/Mask (2).png";
import feImg4 from "../assets/images/featured/Mask (3).png";
import feImg5 from "../assets/images/featured/Mask (4).png";

const FeaturedProject = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-success">Featured Project</h3>
        </div>
      </div>
      <div className="roq">
        <div className="col-md-5">
          <h2>We provide the Perfect Solution to your business growth</h2>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-md-6">
          <img src={feImg1} alt="" />
          <p>App Design - June 20, 2023</p>
          <h5>App Redesign</h5>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <img src={feImg2} alt="" />
              <p>App Design - June 20, 2023</p>
              <h5>Redesign channel website landng page</h5>
            </div>
            <div className="col-md-6">
              <img src={feImg3} alt="" />
              <p>App Design - June 20, 2023</p>
              <h5>Redesign channel website landng page</h5>
            </div>
            <div className="col-md-6">
              <img src={feImg4} alt="" />
              <p>App Design - June 20, 2023</p>
              <h5>Redesign channel website landng page</h5>
            </div>
            <div className="col-md-6">
              <img src={feImg5} alt="" />
              <p>App Design - June 20, 2023</p>
              <h5>Redesign channel website landng page</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
