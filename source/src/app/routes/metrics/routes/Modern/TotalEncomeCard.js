import React from "react";
import {Area, AreaChart, ResponsiveContainer} from "recharts";

import Widget from "components/Widget/index";
import {trafficData} from "./data"

const TotalEncomeCard = () => {
  return (
    <Widget styleName={`jr-card-full`}>
      <div className="d-flex flex-row px-3 pt-4">
        <p className="text-uppercase">income last year</p>
        <p className="ml-auto text-primary">67% <i className="zmdi zmdi-caret-up jr-fs-xl"/></p>
      </div>
      <div className="row">
        <div className="col-xl-5 col-md-6 col-sm-12">
          <div className="jr-actchart pb-3 pl-3">
            <h2 className="jr-fs-2xl jr-font-weight-bold mb-1">$23,658</h2>
            <p className="mb-0 text-grey">Total income</p>
          </div>
        </div>
        <div className="col-xl-7 col-md-6 col-sm-12">
          <ResponsiveContainer className="rounded-bottom-right overflow-hidden" width="100%" height={70}>
            <AreaChart data={trafficData}
                       margin={{top: 0, right: 0, left: 0, bottom: 0}}>
              <defs>
                <linearGradient id="color7" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="5%" stopColor="#3f51b5" stopOpacity={1}/>
                  <stop offset="95%" stopColor="#1fb6fc" stopOpacity={1}/>
                </linearGradient>
              </defs>
              <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#867AE5' fill="url(#color7)"
                    fillOpacity={1}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Widget>
  );
};

export default TotalEncomeCard;
