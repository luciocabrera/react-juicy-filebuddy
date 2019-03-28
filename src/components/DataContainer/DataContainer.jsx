import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

//import Table from './../Table/Table';
var Translate = require('react-redux-i18n').Translate;

class DataContainer extends Component {
  render() {
    return (
      <div className="col-md-10">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="columns" title={<Translate value='tabs.columnsTitle' />}>
            <p> tests </p>
          </Tab>
          <Tab eventKey="data" title={<Translate value='tabs.dataTitle' />}>
            <p> tests </p>
          </Tab>
          <Tab eventKey="form" title={<Translate value='tabs.formTitle' />}>
            <p> tests </p>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default DataContainer;
