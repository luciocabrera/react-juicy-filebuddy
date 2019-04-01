import React, { Component } from 'react';
import './../../App.css';
import Table from './../../components/Table/Table';
import 'react-table/react-table.css';
import { connect } from 'react-redux';
var Translate = require('react-redux-i18n').Translate;
class TableColumns extends Component {
  render() {
    return (
      <div>
        <Table
          data={this.props.dataTableColumns}
          columns={this.props.columnsTableColumns}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

function _getColumns() {
  return [
    {
      Header: <Translate value='tableColumnName' />,
      accessor: 'name'
    },
    {
      Header: <Translate value='tableColumnLabel' />,
      accessor: 'label'
    }
  ];
}

function  _getData(state) {
  return state && state.selectedTable && state.selectedTable.properties
    ? state.selectedTable.properties
    : [];
}

function mapStateToProps(state) {
  return {
    columnsTableColumns: _getColumns(),
    dataTableColumns: _getData(state)
  };
}

export default connect(mapStateToProps)(TableColumns);
