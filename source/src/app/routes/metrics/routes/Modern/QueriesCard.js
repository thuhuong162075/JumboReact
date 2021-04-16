import React from "react";
import {Bar, BarChart, ResponsiveContainer} from "recharts";

import Widget from "components/Widget/index";

const data = [
  {name: 'Page A', amt: 400},
  {name: 'Page B', amt: 600},
  {name: 'Page C', amt: 800},
  {name: 'Page D', amt: 1200},
  {name: 'Page E', amt: 800},
  {name: 'Page F', amt: 600},
  {name: 'Page G', amt: 300},
  {name: 'Page H', amt: 900},
  {name: 'Page A', amt: 400},
  {name: 'Page B', amt: 600},
  {name: 'Page C', amt: 800},
  {name: 'Page D', amt: 1200},
];

const QueriesCard = () => {
  return (
    <Widget styleName="pt-4 pb-3">
      <div className="d-flex">
        <p className="text-uppercase">queries</p>
        <p className="ml-auto text-primary">67% <i className="zmdi zmdi-caret-up jr-fs-xl"/></p>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 ">
          <h2 className="jr-fs-2xl jr-font-weight-bold mb-1">43,856</h2>
          <p className="mb-0">Mail, Website and Call</p>

        </div>
        <div className="col-md-6 col-sm-12 ">
          <ResponsiveContainer width="100%" height={55}>
            <BarChart data={data}
                      margin={{top: 0, right: 0, left: 0, bottom: 0}}>
              <Bar dataKey="amt" fill="#4caf50" barSize={4}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Widget>
  );
};

export default QueriesCard;
