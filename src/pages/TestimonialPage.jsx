import React from 'react';
import Header from "../components/Header";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
      <div className="container-fluid mx-0 bg-white"></div>
      <SubscribeSection />
      <Footer />
    </div>
    );
};

export default TestimonialPage;