import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';

const ForgotPassword2 = () => {
  return (
    <div
      className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
      <div className="login-content">
        <div className="login-header">
          <Link className="app-logo" to="/" title="Jambo">
            <img src={require("assets/images/logo-color.png")} alt="jambo" title="jambo"/>
          </Link>
        </div>

        <div className="mb-2">
          <h2><IntlMessages id="appModule.forgotPassword"/></h2>
        </div>

        <div className="login-form">
          <form method="post" action="/">
            <TextField
              type="email"
              id="required"
              label={<IntlMessages id="appModule.email"/>}
              fullWidth
              defaultValue=""
              margin="normal"
              className="mt-0 mb-4"
            />

            <p className="mb-3">
              <IntlMessages id="appModule.dntRememberEmail"/> &nbsp;
              <span className="small jr-link">
                <IntlMessages id="appModule.contactSupport"/>
              </span>
            </p>

            <Button variant="contained" color="primary" className="text-white">
              <IntlMessages id="appModule.resetPassword"/>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword2;

