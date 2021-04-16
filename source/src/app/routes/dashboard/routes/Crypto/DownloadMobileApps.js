import React from "react";
import Widget from "components/Widget/index";


const DownloadMobileApps = () => {
  return (
    <Widget styleName="bg-gradient-primary-x text-white">
      <div className="row">
        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12">
          <p>Download Mobile Apps</p>
          <h4 className="jr-font-weight-semi-bold mb-sm-0">Now, your account is
            on your fingers</h4>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 text-sm-right">

          <div className="d-flex flex-column justify-content-center h-100">
            <span className="mb-2 jr-app-thumb"><img src="https://via.placeholder.com/100x30" alt="..."/>
            </span>
            <span className="jr-app-thumb"><img src="https://via.placeholder.com/97x32" alt="..."/></span>
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default DownloadMobileApps;
