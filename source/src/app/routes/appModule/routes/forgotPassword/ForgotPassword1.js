import React from 'react';
import {Link} from 'react-router-dom'
import IntlMessages from 'util/IntlMessages';


const ForgotPassword1 = () => {
  return (
    <div
      className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
      <div className="login-content">
        <div className="login-header">
          <Link className="app-logo" to="/" title="Jambo">
            <img src={require("assets/images/logo-color.png")} alt="jambo" title="jambo"/>
          </Link>
        </div>

        <div className="mb-4">
          <h2><IntlMessages id="appModule.forgotPassword"/></h2>
        </div>

        <div className="login-form">
          <form method="post" action="/">
            <div className="form-group mb-3">
              <input type="text" placeholder="Your Email" className="form-control form-control-lg"/>
            </div>

            <p>
              <IntlMessages id="appModule.dntRememberEmail"/> &nbsp;
              <span className="small jr-link">
                <IntlMessages id="appModule.contactSupport"/>
              </span>
            </p>

            <div className="">
              <Link to="/" className="btn btn-primary jr-btn-rounded"><IntlMessages
                id="appModule.resetPassword"/></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword1;

