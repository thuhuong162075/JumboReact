import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import asyncComponent from '../../../util/asyncComponent';

const MenuLevels = ({match}) => (
  <div className="app-wrapper h-100">
    <Switch>
      <Route path={`${match.url}/level-1`}
             component={asyncComponent(() => import('./routes/level-1'))}/>
      <Route path={`${match.url}/level-2`}
             component={asyncComponent(() => import('./routes/level-2'))}/>
      <Route path={`${match.url}/level-3`}
             component={asyncComponent(() => import('./routes/level-3'))}/>
      <Route path={`${match.url}/level-3-2`}
             component={asyncComponent(() => import('./routes/level-3'))}/>
      <Route component={asyncComponent(() => import('app/routes/extraPages/routes/404'))}/>
    </Switch>
  </div>
);

export default MenuLevels;
