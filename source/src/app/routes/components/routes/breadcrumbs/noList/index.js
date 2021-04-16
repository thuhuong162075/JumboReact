import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';

const NoListBreadcrumbs = () => {
  return (
    <div>
      <Breadcrumb className="jr-breadcrumb" tag="nav">
        <BreadcrumbItem tag="span">Home</BreadcrumbItem>
        <BreadcrumbItem tag="span">Library</BreadcrumbItem>
        <BreadcrumbItem tag="span">Data</BreadcrumbItem>
        <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default NoListBreadcrumbs;