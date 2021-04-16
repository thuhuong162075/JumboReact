import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import asyncComponent from '../../../util/asyncComponent';

const SocialApps = ({match}) => (
  <div className="app-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/profile`}/>
      <Route path={`${match.url}/profile`} component={asyncComponent(() => import('./routes/Profile'))}/>
      <Route path={`${match.url}/wall`} component={asyncComponent(() => import('./routes/Wall'))}/>
      <Route component={asyncComponent(() => import('app/routes/extraPages/routes/404'))}/>
    </Switch>
  </div>
);

export default SocialApps;
