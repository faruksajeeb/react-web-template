import React from "react";
import Header from "../components/Header";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import servImg1 from '../assets/images/service/Rectangle 2095.png'
import servImg2 from '../assets/images/service/Rectangle 2096.png'
import servImg3 from '../assets/images/service/Rectangle 2097.png'
import servImg4 from '../assets/images/service/Rectangle 2098.png'

const ServicePage = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid mx-0">
        <div className="container py-3">
          <h3>Our Services</h3>
          <p>
            Home <FontAwesomeIcon icon={faArrowRight} /> Service
          </p>

        </div>
      </div>
      <div className="container-fluid m-0 bg-white">
        <div className="container py-5 ">
            <h4 className="text-success">OUR ALL SERVICES</h4>
            <h3>We Provide Best Web design services</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                  <h4>Build & Launch without problems</h4>
                  <p>Increase your team’s productivity and save time with a bot that answers and fields customer inquiries</p>
                  </div>
                  <div className="crad-body">
                    <img src={servImg1} alt="" width="358" height="164" />
                    <img src={servImg2} alt="" width="143" height="164" />
                    <img src={servImg3} alt="" width="257" height="263" />
                    <img src={servImg4} alt="" width="248" height="263" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                  <h4>Build & Launch without problems</h4>
                  <p>Increase your team’s productivity and save time with a bot that answers and fields customer inquiries</p>
                  </div>
                  <div className="crad-body">
                    <img src={servImg1} alt="" width="358" height="164" />
                    <img src={servImg2} alt="" width="143" height="164" />
                    <img src={servImg3} alt="" width="257" height="263" />
                    <img src={servImg4} alt="" width="248" height="263" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                  <h4>Build & Launch without problems</h4>
                  <p>Increase your team’s productivity and save time with a bot that answers and fields customer inquiries</p>
                  </div>
                  <div className="crad-body">
                    <img src={servImg1} alt="" width="358" height="164" />
                    <img src={servImg2} alt="" width="143" height="164" />
                    <img src={servImg3} alt="" width="257" height="263" />
                    <img src={servImg4} alt="" width="248" height="263" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                  <h4>Build & Launch without problems</h4>
                  <p>Increase your team’s productivity and save time with a bot that answers and fields customer inquiries</p>
                  </div>
                  <div className="crad-body">
                    <img src={servImg1} alt="" width="358" height="164" />
                    <img src={servImg2} alt="" width="143" height="164" />
                    <img src={servImg3} alt="" width="257" height="263" />
                    <img src={servImg4} alt="" width="248" height="263" />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="container-fluid m-0 bg-white"></div>
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default ServicePage;
