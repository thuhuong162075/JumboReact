import React from "react";
import {makeData} from "./Utils";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const CustomExpanderPosition = () => {

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
                Footer: () =>
                  <div style={{textAlign: "center"}}>First Name</div>
              },
              {
                Header: "Last Name",
                accessor: "lastName",
                Footer: () =>
                  <div style={{textAlign: "center"}}>Last Name</div>
              }
            ]
          },
          {
            Header: "Info",
            columns: [
              {
                Header: "Age",
                accessor: "age",
                Footer: () => <div style={{textAlign: "center"}}>Age</div>
              }
            ]
          },
          {
            Header: "Expand",
            columns: [
              {
                expander: true,
                Header: () => <strong>More</strong>,
                width: 65,
                Expander: ({isExpanded, ...rest}) =>
                  <div>
                    {isExpanded
                      ? <span>&#x2299;</span>
                      : <span>&#x2295;</span>}
                  </div>,
                style: {
                  cursor: "pointer",
                  fontSize: 25,
                  padding: "0",
                  textAlign: "center",
                  userSelect: "none"
                },
                Footer: () => <span>&hearts;</span>
              }
            ]
          }
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
        SubComponent={() => <div style={{padding: "10px"}}>Hello</div>}
      />
    </div>
  );
}

export default CustomExpanderPosition;
