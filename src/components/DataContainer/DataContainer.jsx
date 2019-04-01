import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TableRows from './../../containers/TableRows/TableRows';
import TableColumns from './../../containers/TableColumns/TableColumns';
import BaseForm from './../../containers/BaseForm/BaseForm';

var Translate = require('react-redux-i18n').Translate;

class DataContainer extends Component {
  render() {
    return (
      <div className="col-md-10">
        <Tabs defaultActiveKey="columns" id="uncontrolled-tab-example">
          <Tab
            eventKey="columns"
            title={<Translate value="tabs.columnsTitle" />}>
            <TableColumns />
          </Tab>
          <Tab eventKey="data" title={<Translate value="tabs.dataTitle" />}>
            <TableRows />
          </Tab>
          <Tab eventKey="form" title={<Translate value="tabs.formTitle" />}>
            <BaseForm />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default DataContainer;
