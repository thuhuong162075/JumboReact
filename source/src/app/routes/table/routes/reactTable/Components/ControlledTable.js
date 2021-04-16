import React, {useState} from "react";
import {makeData} from "./Utils";
import ReactTable from "react-table";
import "react-table/react-table.css";

const data = makeData();


const ControlledTable = () => {

  const [state, setState] = useState({
    sorted: [],
    page: 0,
    pageSize: 10,
    expanded: {},
    resized: [],
    filtered: []
  });


  const resetState = () => {
    setState({
      sorted: [],
      page: 0,
      pageSize: 10,
      expanded: {},
      resized: [],
      filtered: []
    })
  };

  return (
    <div>
      <div className="p-3">
        <button className="jr-btn mb-3 border" onClick={resetState}>Reset State</button>
        <pre>
          <code>
            <strong>this.state ===</strong>{" "}
            {JSON.stringify(state, null, 2)}
          </code>
        </pre>
      </div>
      <ReactTable
        data={data}
        columns={[
          {
            Header: "Name",
            columns: [
              {
                Header: "First Name",
                accessor: "firstName"
              },
              {
                Header: "Last Name",
                id: "lastName",
                accessor: d => d.lastName,
                width: 170
              }
            ]
          },
          {
            Header: "Info",
            columns: [
              {
                Header: "Age",
                accessor: "age"
              }
            ]
          }
        ]}
        pivotBy={["lastName"]}
        filterable
        defaultPageSize={10}
        className="-striped -highlight"
        // Controlled props
        sorted={state.sorted}
        page={state.page}
        pageSize={state.pageSize}
        expanded={state.expanded}
        resized={state.resized}
        filtered={state.filtered}
        // Callbacks
        onSortedChange={sorted => setState({...state, sorted: sorted})}
        onPageChange={page => setState({...state, page: page})}
        onPageSizeChange={(pageSize, page) =>
          setState({...state, page, pageSize})}
        onExpandedChange={expanded => setState({...state, expanded})}
        onResizedChange={resized => setState({...state, resized})}
        onFilteredChange={filtered => setState({...state, filtered})}
      />
    </div>
  );
};

export default ControlledTable;
