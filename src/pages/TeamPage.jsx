import React from "react";
import Header from "../components/Header";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import teamMem1 from '../assets/images/team/1.png'
import teamMem2 from '../assets/images/team/2.png'
import teamMem3 from '../assets/images/team/3.png'

const TeamPage = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid mx-0">
        <div className="container">
          <h3>Team</h3>          
          <p>Home  <FontAwesomeIcon icon={faArrowRight}  /> Team</p>
        </div>
      </div>
      <div className="container-fluid mx-0 bg-white">
        <div className="container py-5">
            <h5 className="text-success">OUR TEAM MEMBER</h5>
            <h3>Check our awesome team members</h3>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                        <img src={teamMem1} alt="" />
                        </div>
                        <div className="card-footer">
                            <h5 className="text-center">Devon Lane</h5>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                        <img src={teamMem2} alt="" />
                        </div>
                        <div className="card-footer">
                            <h5 className="text-center">Devon Lane</h5>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                        <img src={teamMem3} alt="" />
                        </div>
                        <div className="card-footer">
                            <h5 className="text-center">Devon Lane</h5>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default TeamPage;
