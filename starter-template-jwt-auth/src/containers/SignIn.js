import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IntlMessages from 'util/IntlMessages';
import {userSignIn} from 'actions/Auth';
import CircularProgress from "@material-ui/core/CircularProgress";
import {NotificationContainer, NotificationManager} from "react-notifications";

const SignIn = (props) => {

  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('demo#123');
  const dispatch = useDispatch();
  const token = useSelector(({auth}) => auth.token);
  const {loading, message} = useSelector(({common}) => common);

  useEffect(() => {
    if (token !== null) {
      props.history.push('/');
    }
  }, [token]);

  return (
    <div
      className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
      <div className="app-login-main-content">

        <div className="app-logo-content d-flex align-items-center justify-content-center">
          <Link className="logo-lg" to="/" title="Jambo">
            <img src={require("assets/images/logo.png")} alt="jambo" title="jambo"/>
          </Link>
        </div>

        <div className="app-login-content">
          <div className="app-login-header mb-4">
            <h1><IntlMessages id="appModule.email"/></h1>
          </div>

          <div className="app-login-form">
            <form>
              <fieldset>
                <TextField
                  label={<IntlMessages id="appModule.email"/>}
                  fullWidth
                  onChange={(event) => setEmail(event.target.value)}
                  defaultValue={email}
                  margin="normal"
                  className="mt-1 my-sm-3"
                />
                <TextField
                  type="password"
                  label={<IntlMessages id="appModule.password"/>}
                  fullWidth
                  onChange={(event) => setPassword(event.target.value)}
                  defaultValue={password}
                  margin="normal"
                  className="mt-1 my-sm-3"
                />

                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <Button onClick={() => {
                    dispatch(userSignIn({email, password}));
                  }} variant="contained" color="primary">
                    <IntlMessages id="appModule.signIn"/>
                  </Button>

                  <Link to="/signup">
                    <IntlMessages id="signIn.signUp"/>
                  </Link>
                </div>

              </fieldset>
            </form>
          </div>
        </div>
      </div>

      {
        loading &&
        <div className="loader-view">
          <CircularProgress/>
        </div>
      }
      {message && NotificationManager.error(message)}
      <NotificationContainer/>

    </div>
  );
};


export default SignIn;
