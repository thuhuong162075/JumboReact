import React from "react";
import {Area, AreaChart, Line, LineChart, ResponsiveContainer} from "recharts";

import IconWithTextCard from "./IconWithTextCard";
import ChartCard from "./ChartCard";
import GrowthCard from "./GrowthCard";
import EcommerceStatus from "./EcommerceStatus";
import TrafficRaiseCard from "./TrafficRaiseCard";
import TotalEncomeCard from "./TotalEncomeCard";
import QueriesCard from "./QueriesCard";
import {commerceStatus, dataMetrics, growthData, increamentData, lineData, revenueData, trafficData} from "./data"

const ModernMetrics = () => {
  return (
    <div className="animated slideInUpTiny animation-duration-3">
      <div className="row">

        {dataMetrics.map((data, index) =>
          <div key={index} className="col-lg-3 col-sm-6 col-12">
            <IconWithTextCard data={data}/>
          </div>)}

        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
          <ChartCard title="84" children={
            <ResponsiveContainer className="card-img-bottom overflow-hidden" width="100%" height={75}>
              <AreaChart data={increamentData}
                         margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <defs>
                  <linearGradient id="color3" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#3f51b5" stopOpacity={1}/>
                    <stop offset="95%" stopColor="#1fb6fc" stopOpacity={1}/>
                  </linearGradient>
                </defs>
                <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#4D95F3' fill="url(#color3)"
                      fillOpacity={1}/>
              </AreaChart>
            </ResponsiveContainer>} styleName="up" desc="Increament in Active users"/>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
          <ChartCard title="38" children={
            <ResponsiveContainer className="card-img-bottom overflow-hidden" width="100%" height={75}>
              <AreaChart data={increamentData}
                         margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <defs>
                  <linearGradient id="color4" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#aa3c6d" stopOpacity={1}/>
                    <stop offset="95%" stopColor="#ff9800" stopOpacity={1}/>
                  </linearGradient>
                </defs>

                <Area dataKey='pv' type='monotone' strokeWidth={0} stackId="2" stroke='#4D95F3'
                      fill="url(#color4)"
                      fillOpacity={1}/>
              </AreaChart>
            </ResponsiveContainer>} styleName="up" desc="Extra revenue from last year"/>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
          <ChartCard title="38" children={
            <ResponsiveContainer className="card-img-bottom overflow-hidden" width="100%" height={75}>
              <AreaChart data={increamentData}
                         margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <defs>
                  <linearGradient id="color5" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#264dcc" stopOpacity={1}/>
                    <stop offset="95%" stopColor="#ff4081" stopOpacity={1}/>
                  </linearGradient>
                </defs>
                <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#FEEADA' fill="url(#color5)"
                      fillOpacity={1}/>
              </AreaChart>
            </ResponsiveContainer>} styleName="down" desc="Less orders from past year"/>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
          <ChartCard title="44" children={
            <ResponsiveContainer className="card-img-bottom overflow-hidden" width="100%" height={75}>
              <LineChart data={lineData}
                         margin={{top: 5, right: 5, left: 5, bottom: 5}}>
                <Line dataKey="pv" stroke="#3f51b5" dot={{stroke: '#3f51b5', strokeWidth: 2}}/>
              </LineChart>
            </ResponsiveContainer>} styleName="up" desc="Traffic raise from past year"/>
        </div>

        {commerceStatus.map((data, index) =>
          <div key={index} className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
            <EcommerceStatus data={data}/>
          </div>)}
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
          <GrowthCard title="92" children={
            <ResponsiveContainer className="card-img-bottom overflow-hidden" width="100%" height={135}>
              <AreaChart data={revenueData}
                         margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <defs>
                  <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3f51b5" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#ffffff" stopOpacity={0.8}/>
                  </linearGradient>
                </defs>
                <Area type='monotone' strokeWidth={1} dataKey='pv' stackId="2" stroke='#3f51b5'
                      fill="url(#color2)"
                      fillOpacity={1}/>
              </AreaChart>
            </ResponsiveContainer>} styleName="up" desc="Growth in revenue"/>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
          <GrowthCard title="07" children={
            <ResponsiveContainer className="card-img-bottom overflow-hidden" width="100%" height={135}>
              <AreaChart data={trafficData}
                         margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <defs>
                  <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ee4187" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#ffffff" stopOpacity={0.8}/>
                  </linearGradient>
                </defs>
                <Area dataKey='pv' strokeWidth={1} stackId="2" stroke='#ee4187' fill="url(#color1)"
                      fillOpacity={1}/>
              </AreaChart>
            </ResponsiveContainer>} styleName="up" desc="Traffic raise"/>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
          <GrowthCard title="38" children={
            <ResponsiveContainer className="card-img-bottom overflow-hidden" width="100%" height={135}>
              <AreaChart data={growthData}
                         margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <defs>
                  <linearGradient id="color6" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#aa3c6d" stopOpacity={1}/>
                    <stop offset="95%" stopColor="#ff9800" stopOpacity={1}/>
                  </linearGradient>
                </defs>
                <Area type='monotone' dataKey='pv' strokeWidth={0} stackId="2" stroke='' fill="url(#color6)"
                      fillOpacity={1}/>
              </AreaChart>
            </ResponsiveContainer>} styleName="down" desc="Growth in revenue"/>
        </div>
      </div>
      <div className='row mb-n2 mb-sm-n4'>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
          <TrafficRaiseCard/>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
          <TotalEncomeCard/>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
          <QueriesCard/>
        </div>
      </div>
    </div>
  );
};
export default ModernMetrics;
