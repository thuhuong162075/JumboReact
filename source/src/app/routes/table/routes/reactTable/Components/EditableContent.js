import React, {useState} from "react";
import { makeData } from "./Utils";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const EditableContent = () => {

  const [data, setData] = useState(makeData());


 const renderEditable = (cellInfo) => {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...data];
          data[cellInfo.BelowNavHeader][cellInfo.column.id] = e.target.innerHTML;
          setData(data);
        }}
        dangerouslySetInnerHTML={{
          __html: data[cellInfo.BelowNavHeader][cellInfo.column.id]
        }}
      />
    );
  };

    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "First Name",
              accessor: "firstName",
              Cell: renderEditable
            },
            {
              Header: "Last Name",
              accessor: "lastName",
              Cell: renderEditable
            },
            {
              Header: "Full Name",
              id: "full",
              accessor: d =>
                <div
                  dangerouslySetInnerHTML={{
                    __html: d.firstName + " " + d.lastName
                  }}
                />
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
};

export default EditableContent;
