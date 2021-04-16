import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IntlMessages from 'util/IntlMessages';


const LoginWithStepper =()=> {
  const [activeStep,setActiveStep]=useState(0);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

 const handleReset = () => {
   setPassword('');
   setEmail('');
   setActiveStep(0);
 }

 const handleNext = () => {
    setActiveStep(activeStep+1);
  };

 const  handleBack = () => {
   setActiveStep(activeStep-1);
 };

 const getPassword =()=> {
    return <TextField
      type="password"
      id="password"
      label={<IntlMessages id="appModule.password"/>}
      fullWidth
      defaultValue={password}
      onChange={(event) => setPassword(event.target.value)}
      margin="normal"
      className="mt-1"
    />
  };

 const getEmail =()=> {
    return <div>
      <TextField
        id="email"
        label={<IntlMessages id="appModule.email"/>}
        fullWidth
        onChange={(event) => setEmail(event.target.value)}
        defaultValue={email}
        margin="normal"
        className="mt-1"
      />
    </div>
  };

  const getStepContent =(stepIndex)=> {
    switch (stepIndex) {
      case 0:
        return getEmail();
      case 1:
        return getPassword();
      default:
        return <IntlMessages id="appModule.loginSuccessfully"/>;
    }
  };

    const steps = 2;
    return (
      <div
        className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
        <div className="login-content">
          <div className="login-header mb-4">
            <Link className="app-logo" to="/" title="Jambo">
              <img src={require("assets/images/logo-color.png")} alt="jambo" title="jambo"/>
            </Link>
          </div>

          <div className="login-form">
            {activeStep === steps ?
              <div>
                <div className="my-2">
                  <IntlMessages id="appModule.allStepsCompleted"/>
                </div>
                <Button onClick={handleReset}><IntlMessages id="appModule.reset"/> </Button>
              </div>
              :
              <form>
                <fieldset>
                  {getStepContent(activeStep)}
                  <div className="mt-1 mb-2 d-flex justify-content-between align-items-center">
                    <FormControlLabel
                      control={
                        <Checkbox color="primary"
                                  value="gilad"
                        />
                      }
                      label={<IntlMessages id="appModule.rememberMe"/>}
                    />

                    <div>
                      <Link to="/app/app-module/forgot-password-2" title="Reset Password">
                        <IntlMessages id="appModule.forgotPassword"/>
                      </Link>
                    </div>
                  </div>

                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className="mr-2"
                  >
                    <IntlMessages id="appModule.back"/>
                  </Button>
                  <Button variant="contained" className="jr-btn text-white btn-primary"
                          onClick={handleNext}>
                    {activeStep === steps - 1 ? <IntlMessages id="appModule.signIn"/> :
                      <IntlMessages id="appModule.next"/>}
                  </Button>

                </fieldset>
              </form>
            }
          </div>
        </div>
      </div>
    );
};

export default LoginWithStepper;
