import React from "react";

const SubscribeSection = () => {
  return (
    <div className="mx-0 bg-white">
      <div className="row py-5">
        <div className="col-md-4 offset-md-4 text-center">
          <h4 className="text-success">SUBSCRIBE</h4>
          <h2>Subscribe to get the latest news about us</h2>
          <p>
            Please drop your email below to get daily update about what we do
          </p>
          <div className="input-group ps-5">
            <div id="navbar-search-autocomplete" className="form-outline">
              <input type="search" id="form1" className="form-control" />       
            </div>
            <button type="button" className="btn btn-warning">
              <i className="fas fa-search">Subscribe</i>
            </button>
          </div>
          {/* <input type="text" className="form-control" />
          <button className="btn btn-lg btn-worning">Subscribe</button> */}
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
