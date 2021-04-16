import React from "react";
import {makeData} from "./Utils";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const CustomColumnWidths = () => {

  const data = makeData();

  return (
    <div>
      <ReactTable
        data={data}
        columns={[
          {
            Header: "Name",
            columns: [
              {
                Header: "First Name",
                accessor: "firstName",
                maxWidth: 200
              },
              {
                Header: "Last Name",
                id: "lastName",
                accessor: d => d.lastName,
                width: 300
              }
            ]
          },
          {
            Header: "Info",
            columns: [
              {
                Header: "Age",
                accessor: "age",
                minWidth: 400
              }
            ]
          }
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    </div>
  );
};

export default CustomColumnWidths;
