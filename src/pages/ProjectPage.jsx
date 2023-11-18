import React from "react";
import Header from "../components/Header";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
      <div className="container-fluid mx-0 bg-white"></div>
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default ProjectPage;
