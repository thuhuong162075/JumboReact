import React from "react";
import Widget from "components/Widget/index";

const GrowthCard = ({title, children, styleName, desc, color}) => {
  return (
    <Widget styleName={`jr-card-full ${color}`}>
      <div className="jr-actchart px-3 pt-3 mb-3">
        <h2 className={`jr-chart-${styleName} mb-1`}>{title}% <i className="zmdi zmdi-caret-up"/></h2>
        <p className="mb-0 text-grey jr-fs-13">{desc}</p>
      </div>
      {children}
    </Widget>
  );
};

export default GrowthCard;
