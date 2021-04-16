import React from "react";
import {makeData} from "./Utils";
import {useTable} from "react-table";
import "react-table/react-table.css";

const Table =({ columns, data })=> {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {rows.map(
        (row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )}
      )}
      </tbody>
    </table>
  )
};


const  ReactTable =()=> {
  const columns = React.useMemo(
    () => [
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
    ],
    []
  );

  const data = React.useMemo(() => makeData(80), []);

  return (
      <Table columns={columns} data={data} />
  )
};

const SimpleTable = () => {
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
                accessor: "firstName"
              },
              {
                Header: "Last Name",
                id: "lastName",
                accessor: d => d.lastName
              }
            ]
          },
          {
            Header: "Info",
            columns: [
              {
                Header: "Age",
                accessor: "age"
              },
              {
                Header: "Status",
                accessor: "status"
              }
            ]
          },
          {
            Header: "Stats",
            columns: [
              {
                Header: "Visits",
                accessor: "visits"
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

export default SimpleTable;
