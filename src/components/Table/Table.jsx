import React from 'react';
import './../../App.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
const Table = ({ data, columns, defaultPageSize,className }) => (
  <div>
    <ReactTable
      data={data}
      columns={columns}
      defaultPageSize={defaultPageSize}
      className={className}
    />
  </div>
);

export default Table;
