import React from 'react';
import FriendsTableCell from './FriendsTableCell';

let counter = 0;

function createData(name, designation, image, status) {
  counter += 1;
  return {id: counter, name, designation, image, status};
}

const data = [
  createData('John Smith', 'Co-Founder', "https://via.placeholder.com/150x150", 'Followed'),
  createData('Alex Dolgove', 'CEO', "https://via.placeholder.com/150x150", 'Follow'),
  createData('Domnic Brown', 'Co-Founder', "https://via.placeholder.com/150x150", 'Followed'),
  createData('Domnic Harris', 'CEO', "https://via.placeholder.com/150x150", 'Follow'),
];

const FriendsTable = () => {

  return (

    <div className="px-3 pb-1 bg-white">
      <table className="default-table table table-sm  table-hover">
        <tbody>
        {data.map(data => {
          return (
            <FriendsTableCell key={data.id} data={data}/>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default FriendsTable;