import React, { Component } from 'react';
import './App.css';
// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      columns: [
        {
          Header: 'First Name',
          accessor: 'name',
        },
        {
          Header: 'Last Name',
          accessor: 'label',
        }
      ]
    };
  }

  async componentDidMount() {}

  render() {
    return (
      <div>
        <ReactTable
          data={this.state.data}
          columns={this.state.columns}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default Table;
