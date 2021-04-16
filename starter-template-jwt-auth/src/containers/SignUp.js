import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';
import {userSignUp} from '../actions/Auth';
import {hideMessage} from "../actions";
import CircularProgress from "@material-ui/core/CircularProgress";
import {NotificationContainer, NotificationManager} from "react-notifications";

const SignUp = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const authUser = useSelector(({auth}) => auth.authUser);
  const {loading, message} = useSelector(({common}) => common);

  useEffect(() => {
    if (props.message) {
      setTimeout(() => {
        dispatch(hideMessage());
      }, 3000);
    }
    if (authUser !== null) {
      props.history.push('/');
    }
  }, [props.message, authUser])

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
          <div className="app-login-header">
            <h1>Sign Up</h1>
          </div>

          <div className="mb-4">
            <h2><IntlMessages id="appModule.createAccount"/></h2>
          </div>

          <div className="app-login-form">
            <form method="post" action="/">
              <TextField
                type="text"
                label="Name"
                onChange={(event) => setName(event.target.value)}
                fullWidth
                defaultValue={name}
                margin="normal"
                className="mt-0 mb-2"
              />

              <TextField
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                label={<IntlMessages id="appModule.email"/>}
                fullWidth
                defaultValue={email}
                margin="normal"
                className="mt-0 mb-2"
              />

              <TextField
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                label={<IntlMessages id="appModule.password"/>}
                fullWidth
                defaultValue={password}
                margin="normal"
                className="mt-0 mb-4"
              />

              <div className="mb-3 d-flex align-items-center justify-content-between">
                <Button variant="contained" onClick={() => {
                  dispatch(userSignUp({name, email, password}));
                }} color="primary">
                  <IntlMessages
                    id="appModule.regsiter"/>
                </Button>
                <Link to="/signin">
                  <IntlMessages id="signUp.alreadyMember"/>
                </Link>
              </div>

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
  )
};


export default SignUp;
