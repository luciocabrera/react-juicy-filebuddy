import React, { Component } from 'react';
import SelectServices from './../../containers/SelectServices/SelectServices';
import SelectTables from './../../containers/SelectTables/SelectTables';
import './../../assets/css/flatly/bootstrap.min.css';

import { getServices } from './../../actions';
//import store from './../../store';

class SideContainer extends Component {

  async componentDidMount() {
    await getServices();

  }

  render() {
    return (
      <div className="col-md-2">
        <SelectServices />
        <SelectTables />
      </div>
    );
  }
}

export default SideContainer;
