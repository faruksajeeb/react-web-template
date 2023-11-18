import React from "react";
import ActivityImg from '../assets/images/worklist/Activity.png'
import HeartImg from '../assets/images/worklist/Heart.png'
import WorkImg from '../assets/images/worklist/Work.png'

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const WorkList = () => {
  return (
    <div className="container-fluid mx-0 bg-white mt-4">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12 ">
                <h5 className="text-success">WORK LIST</h5>
          </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <h3>We provide the Perfect Solution to your business growth</h3>
            </div>
        </div>
        <div className="row py-3">
            <div className="col-md-4 p-2">
                <img src={ActivityImg} alt="" width="80" />
                <h6 className="py-2">Grow Your Business</h6>
                <p>We help identify the best ways to improve your business</p>
                <a href="" className="btn btn-defult">Learn More  <FontAwesomeIcon icon={faArrowRight} /></a>           
  
            </div>
            <div className="col-md-4 p-2">
                <img src={HeartImg} alt="" width="80" />
                <h6 className="py-2">Imporove Brand Loyality</h6>
                <p>We help identify the best ways to improve your business</p>
                <a href="" className="btn btn-defult">Learn More  <FontAwesomeIcon icon={faArrowRight} /></a>           
  
            </div>
            <div className="col-md-4 p-2">
                <img src={WorkImg} alt="" width="80" />
                <h6 className="py-2">Imporove Business Model</h6>
                <p>We help identify the best ways to improve your business</p>
                <a href="" className="btn btn-defult">Learn More  <FontAwesomeIcon icon={faArrowRight} /></a>           
  
            </div>
        </div>
      </div>
    </div>
  );
};

export default WorkList;
