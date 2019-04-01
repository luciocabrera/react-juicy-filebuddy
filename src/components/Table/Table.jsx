import React from 'react';
import './../../App.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import "./../../assets/css/TableStyles.css";
import TablePagination from './../TablePagination/TablePagination';
const Table = ({ data, columns, defaultPageSize,className }) => (

  <div>
    <ReactTable
      data={data}
      columns={columns}
      defaultPageSize={defaultPageSize}
      PaginationComponent={TablePagination}
      className={className}
    />
  </div>
);

export default Table;
