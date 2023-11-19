import React from "react";
import Header from "../components/Header";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import testiImg from "../assets/images/testimonial/testi1.png";

const TestimonialPage = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid mx-0">
        <div className="container">
          <h3>Testimonial</h3>
          <p>
            Home <FontAwesomeIcon icon={faArrowRight} /> Testimonial
          </p>
        </div>
      </div>
      <div className="container-fluid m-0 bg-white">
        <div className="container py-5 ">
          <h4 className="text-success">Testimonial List</h4>
          <h3>Better Agency/SEO Solution At Your Fingertips</h3>
          <div className="row py-3">
            <div className="col-md-4 my-2">
              <div className="card p-3">
                <div className="crad-body text-center">
                  <img src={testiImg} alt="" className="img-fluid py-2" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                </div>
                <div className="card-footer text-center">
                  <h5 className="text-uppercase text-center">
                  Alice Bradley
                  </h5>
                  <strong>Backend Developer</strong>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="card p-3">
                <div className="crad-body text-center">
                  <img src={testiImg} alt="" className="img-fluid py-2" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                </div>
                <div className="card-footer text-center">
                  <h5 className="text-uppercase text-center">
                  Alice Bradley
                  </h5>
                  <strong>Backend Developer</strong>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="card p-3">
                <div className="crad-body text-center">
                  <img src={testiImg} alt="" className="img-fluid py-2" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                </div>
                <div className="card-footer text-center">
                  <h5 className="text-uppercase text-center">
                  Alice Bradley
                  </h5>
                  <strong>Backend Developer</strong>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="card p-3">
                <div className="crad-body text-center">
                  <img src={testiImg} alt="" className="img-fluid py-2" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                </div>
                <div className="card-footer text-center">
                  <h5 className="text-uppercase text-center">
                  Alice Bradley
                  </h5>
                  <strong>Backend Developer</strong>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="card p-3">
                <div className="crad-body text-center">
                  <img src={testiImg} alt="" className="img-fluid py-2" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                </div>
                <div className="card-footer text-center">
                  <h5 className="text-uppercase text-center">
                  Alice Bradley
                  </h5>
                  <strong>Backend Developer</strong>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="card p-3">
                <div className="crad-body text-center">
                  <img src={testiImg} alt="" className="img-fluid py-2" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                </div>
                <div className="card-footer text-center">
                  <h5 className="text-uppercase text-center">
                  Alice Bradley
                  </h5>
                  <strong>Backend Developer</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mx-0 bg-white"></div>
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default TestimonialPage;
