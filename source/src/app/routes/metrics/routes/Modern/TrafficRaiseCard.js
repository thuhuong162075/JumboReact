import React from "react";
import {Line, LineChart, ResponsiveContainer} from "recharts";

import Widget from "components/Widget/index";

const data = [
  {name: 'Page A', pv: 200},
  {name: 'Page B', pv: 1100},
  {name: 'Page C', pv: 800},
  {name: 'Page D', pv: 1700},
  {name: 'Page D', pv: 600},
  {name: 'Page D', pv: 1800},
  {name: 'Page D', pv: 600},
];

const TrafficRaiseCard = () => {
  return (
    <Widget styleName="py-3">
      <div className="row">
        <div className="col-xl-5 col-md-6 col-sm-12">
          <div className="jr-actchart pt-3">
            <h2 className="jr-fs-2xl jr-font-weight-bold mb-1">07% <i
              className="zmdi zmdi-caret-up jr-fs-xxxl"/>
            </h2>
            <p className="mb-0">Traffic raise</p>
          </div>
        </div>
        <div className="col-xl-7 col-md-6 col-sm-12">
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={data}
                       margin={{top: 5, right: 5, left: 5, bottom: 5}}>
              <Line dataKey="pv" stroke="#4caf50" strokeWidth={2}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Widget>
  );
};

export default TrafficRaiseCard;
