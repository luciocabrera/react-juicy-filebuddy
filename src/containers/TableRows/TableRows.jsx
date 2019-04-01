import React, { Component } from 'react';
import './../../App.css';
import Table from './../../components/Table/Table';
import 'react-table/react-table.css';
import { connect } from 'react-redux';

class TableRows extends Component {

  render() {
    return (
      <div>
        <Table
          data={this.props.dataTableRows}
          columns={this.props.columnsTableRows}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

function  _getColumns(state) {
  return state.selectedTable && state.selectedTable.properties
    ? state.selectedTable.properties.map(column => ({
        Header: column.label,
        accessor: column.name
      }))
    : [];
}
function  _getData(state) {
  return state && state.rows
    ? state.rows
    : [];
}

function mapStateToProps(state) {
  return {
    columnsTableRows:_getColumns(state),
    dataTableRows: _getData(state)
  };
}

export default connect(mapStateToProps)(TableRows);
