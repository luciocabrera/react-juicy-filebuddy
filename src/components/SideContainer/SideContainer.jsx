import React, { Component } from 'react';
import Select from '../Select/Select';
import Service from '../../lib/util/OData/Service';
import Table from '../../lib/util/OData/Table';
import ODataQuery from '../ODataQuery/ODataQuery';
import './../../assets/css/flatly/bootstrap.min.css';

class SideContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      tables: [],
      selectServices: [],
      selectTables: []
    };
  }

  async componentDidMount() {
    await this.setServices();
  }

  async setServices() {
    const services = (await Service()) || [];

    const selectServices =
      services.map(service => ({
        label: service.LABEL,
        key: service.NAME,
        uri: service.URI
      })) || [];

    this.setState({ selectServices: selectServices });
  }

  async setTables(serviceUri) {
    const tables = (await Table(serviceUri)) || [];

    const selectTables =
      tables.map(table => ({
        label: table.label,
        key: table.value,
        properties: table.properties,
        uri: serviceUri
      })) || [];

    this.setState({ selectTables: selectTables });
  }

  async fetchData(serviceUri) {
    ODataQuery.get(serviceUri).then(function(data) {
      console.log(data);
    });
  }

  _handleChangeService = event => {
    this.setState({
      [event.currentTarget.name + 'SelectedItem']: event.currentTarget.value
    });
    console.log({ [event.currentTarget.name]: event.currentTarget.value });
    let serviceSelected = JSON.parse(event.currentTarget.value); //object
    this.setTables(serviceSelected.uri);
  };

  _handleChangeTable = event => {
    this.setState({
      [event.currentTarget.name + 'SelectedItem']: event.currentTarget.value
    });
    console.log({ [event.currentTarget.name]: event.currentTarget.value });
    let tableSelected = JSON.parse(event.currentTarget.value); //object
    console.log(tableSelected);

    this.fetchData(tableSelected.uri + '/' + tableSelected.key);
  };
  render() {
    return (
      <div className="col-md-2">
        <Select
          name="selectServices"
          label="services"
          required={true}
          options={this.state.selectServices}
          _handleChange={this._handleChangeService}
        />
        <Select
          name="selectTables"
          label="tables"
          required={true}
          options={this.state.selectTables}
          _handleChange={this._handleChangeTable}
        />
      </div>
    );
  }
}

export default SideContainer;
