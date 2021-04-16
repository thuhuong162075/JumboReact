import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard";
import Widgets from "./widgets";
import Metrics from "./metrics";
import Components from "./components";
import Icons from "./icons";
import Form from "./form";
import Editors from "./editors";
import Pickers from "./pickers";
import Extensions from "./extensions";
import Table from "./table";
import Chart from "./charts";
import Map from "./map";
import Calendar from "./calendar";
import TimeLine from "./timeLine";
import CustomViews from "./customViews";
import ExtraElements from "./extraElements";
import eCommerce from "./eCommerce";
import AppModule from "./appModule";
import ExtraPages from "./extraPages";
import asyncComponent from "../../util/asyncComponent";
import MenuLevels from "./menuLevels";
import SocialApps from "./socialApps";
import { withRouter } from "react-router";

const Routes = ({ match }) =>
  <Switch>
    <Route path={`${match.url}/dashboard`} component={Dashboard}/>
    <Route path={`${match.url}/social-apps`} component={SocialApps}/>
    <Route path={`${match.url}/components`} component={Components}/>
    <Route path={`${match.url}/icons`} component={Icons}/>
    <Route path={`${match.url}/form`} component={Form}/>
    <Route path={`${match.url}/editor`} component={Editors}/>
    <Route path={`${match.url}/pickers`} component={Pickers}/>
    <Route path={`${match.url}/extensions`} component={Extensions}/>
    <Route path={`${match.url}/table`} component={Table}/>
    <Route path={`${match.url}/chart`} component={Chart}/>
    <Route path={`${match.url}/map`} component={Map}/>
    <Route path={`${match.url}/calendar`} component={Calendar}/>
    <Route path={`${match.url}/time-line`} component={TimeLine}/>
    <Route path={`${match.url}/custom-views`} component={CustomViews}/>

    <Route path={`${match.url}/widgets`} component={Widgets}/>
    <Route path={`${match.url}/metrics`} component={Metrics}/>
    <Route path={`${match.url}/extra-elements`} component={ExtraElements}/>
    <Route path={`${match.url}/ecommerce`} component={eCommerce}/>
    <Route path={`${match.url}/app-module`} component={AppModule}/>
    <Route path={`${match.url}/menu-levels`} component={MenuLevels}/>
    <Route path={`${match.url}/to-do`}
           component={asyncComponent(() => import("./todo/basic"))}/>
    <Route path={`${match.url}/to-do-redux`}
           component={asyncComponent(() => import("./todo/redux"))}/>
    <Route path={`${match.url}/mail`}
           component={asyncComponent(() => import("./mail/basic"))}/>
    <Route path={`${match.url}/mail-redux`}
           component={asyncComponent(() => import("./mail/redux"))}/>
    <Route path={`${match.url}/chat`}
           component={asyncComponent(() => import("./chatPanel/basic"))}/>
    <Route path={`${match.url}/chat-redux`}
           component={asyncComponent(() => import("./chatPanel/redux"))}/>
    <Route path={`${match.url}/contact`}
           component={asyncComponent(() => import("./contact/basic"))}/>
    <Route path={`${match.url}/contact-redux`}
           component={asyncComponent(() => import("./contact/redux"))}/>
    <Route path={`${match.url}/extra-pages`} component={ExtraPages}/>
    <Route component={asyncComponent(() => import("app/routes/extraPages/routes/404"))}/>
  </Switch>;


export default withRouter(Routes);
