import React from "react";

import Widget from "components/Widget/index";

const EcommerceStatus = ({data}) => {
  const {imageIcon, title, subTitle, color, colorTitle, colorSubTitle} = data;
  return (
    <Widget styleName={`px-2 bg-${color}`}>
      <div className="d-flex flex-row justify-content-center mt-1 mb-4">
          <span
            className={`size-70 border border-${colorTitle} text-${colorTitle} d-flex flex-row justify-content-center align-items-center rounded-circle`}>
            <img src={imageIcon} alt="..."/></span>
      </div>
      <div className="text-center">
        <h2 className={`jr-fs-xxxl jr-font-weight-bold text-${colorTitle} mb-2`}>{title}</h2>
        <span className={`text-${colorSubTitle}`}>{subTitle}</span>
      </div>
    </Widget>
  );
};

export default EcommerceStatus;
