import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faThumbsUp, faSmile, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
const StatList = () => {
  return (
    <div className="container-fluid mx-0 bg-white">
      <div className="container py-5">
        <div className="row py-3">
          <div className="col-md-3 p-2">
            <div className="card text-center p-3">
              <FontAwesomeIcon icon={faUsers} className="h4" />
              <h3 className="py-2">24232355</h3>
              <p>Followers</p>
            </div>
          </div>
          <div className="col-md-3 p-2">
            <div className="card text-center p-3">
              <FontAwesomeIcon icon={faThumbsUp} className="h4" />
              <h3 className="py-2">24232355</h3>
              <p>Solved Problems</p>
            </div>
          </div>
          <div className="col-md-3 p-2">
            <div className="card text-center p-3">
              <FontAwesomeIcon icon={faSmile} className="h4" />
              <h3 className="py-2">24232355</h3>
              <p>Happy Customers</p>
            </div>
          </div>
          <div className="col-md-3 p-2">
            <div className="card text-center p-3">
              <FontAwesomeIcon icon={faProjectDiagram} className="h4" />
              <h3 className="py-2">24232355</h3>
              <p>Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatList;
