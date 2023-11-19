import React from "react";
import Header from "../components/Header";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import projImg1 from "../assets/images/project/Rectangle 2097 (2).png";
import projImg2 from "../assets/images/project/Rectangle 2097 (3).png";
import projImg3 from "../assets/images/project/Rectangle 2097 (4).png";
import projImg4 from "../assets/images/project/Rectangle 2097 (5).png";
import projImg5 from "../assets/images/project/Rectangle 2097 (6).png";
import projImg6 from "../assets/images/project/Rectangle 2097 (7).png";

const ProjectPage = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid mx-0">
        <div className="container">
          <h3>Projects</h3>
          <p>
            Home <FontAwesomeIcon icon={faArrowRight} /> Project
          </p>
        </div>
      </div>
      <div className="container-fluid m-0 bg-white">
        <div className="container py-5 ">
          <h4 className="text-success">OUR ALL projICES</h4>
          <h3>We Provide Best Web design projices</h3>
          <div className="row">
            <div className="col-md-6 my-2">
              <div className="card p-3">
                <div className="crad-body">
                  <img src={projImg1} alt="" className="img-fluid" />
                </div>
                <div className="card-footer">
                  <h5 className="text-uppercase text-center">
                    Lorem ipsum dolor sit consectutar
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 my-2">
              <div className="card p-3">
                <div className="crad-body">
                  <img src={projImg2} alt="" className="img-fluid" />
                </div>
                <div className="card-footer">
                  <h5 className="text-uppercase text-center">
                    Lorem ipsum dolor sit consectutar
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 my-2">
              <div className="card p-3">
                <div className="crad-body">
                  <img src={projImg3} alt="" className="img-fluid" />
                </div>
                <div className="card-footer">
                  <h5 className="text-uppercase text-center">
                    Lorem ipsum dolor sit consectutar
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 my-2">
              <div className="card p-3">
                <div className="crad-body">
                  <img src={projImg4} alt="" className="img-fluid" />
                </div>
                <div className="card-footer">
                  <h5 className="text-uppercase text-center">
                    Lorem ipsum dolor sit consectutar
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 my-2">
              <div className="card p-3">
                <div className="crad-body">
                  <img src={projImg5} alt="" className="img-fluid" />
                </div>
                <div className="card-footer">
                  <h5 className="text-uppercase text-center">
                    Lorem ipsum dolor sit consectutar
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 my-2">
              <div className="card p-3">
                <div className="crad-body">
                  <img src={projImg6} alt="" className="img-fluid" />
                </div>
                <div className="card-footer">
                  <h5 className="text-uppercase text-center">
                    Lorem ipsum dolor sit consectutar
                  </h5>
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

export default ProjectPage;
