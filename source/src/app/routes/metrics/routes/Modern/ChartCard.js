import React from "react";

import Widget from "components/Widget/index";

const ChartCard = ({title, children, styleName, desc}) => {
  return (
    <Widget styleName="jr-card-full">

      <div className="jr-actchart px-3 pt-3">
        <h2 className={`jr-chart-${styleName} mb-1`}>{title}% <i className="zmdi zmdi-caret-up"/></h2>
        <p className="mb-0 jr-fs-sm text-grey">{desc}</p>
      </div>
      {children}
    </Widget>
  );
};

export default ChartCard;
