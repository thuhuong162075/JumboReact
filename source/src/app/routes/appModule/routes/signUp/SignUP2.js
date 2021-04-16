import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {NotificationContainer} from 'react-notifications';
import {Link, withRouter} from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';

const SignUP2 =()=> {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

    return (
      <div
        className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
        <div className="login-content text-center">
          <div className="login-header">
            <Link className="app-logo" to="/" title="Jambo">
              <img src={require("assets/images/logo-color.png")} alt="jambo" title="jambo"/>
            </Link>
          </div>

          <div className="mb-4">
            <h2><IntlMessages id="appModule.createAccount"/></h2>
          </div>

          <div className="login-form">
            <form method="post" action="/">
              <TextField
                type="text"
                id="signUpName"
                label="Name"
                onChange={(event) => setName(event.target.value)}
                fullWidth
                defaultValue={name}
                margin="normal"
                className="mt-0 mb-2"
              />

              <TextField
                type="signUpEmail"
                onChange={(event) => setEmail(event.target.value)}
                id="required"
                label={<IntlMessages id="appModule.email"/>}
                fullWidth
                defaultValue={email}
                margin="normal"
                className="mt-0 mb-2"
              />

              <TextField
                type="signUpPassword"
                onChange={(event) =>setPassword(event.target.value)}
                id="required"
                label={<IntlMessages id="appModule.password"/>}
                fullWidth
                defaultValue={password}
                margin="normal"
                className="mt-0 mb-4"
              />

              <div className="mb-3">
                <Button color="primary" variant="contained" component={Link} to="/" className="text-white">
                  <IntlMessages id="appModule.regsiter"/>
                </Button>
              </div>
              <p>
                <IntlMessages id="appModule.hvAccount"/>
                <Link to="/app/app-module/login-2" className="ml-1">
                  <IntlMessages id="appModule.signIn"/>
                </Link>
              </p>
            </form>
          </div>
        </div>
        <NotificationContainer/>
      </div>
    )
  };

export default withRouter(SignUP2);
