import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import SideContainer from '../SideContainer/SideContainer';
import DataContainer from '../DataContainer/DataContainer';
import './../../assets/css/flatly/bootstrap.min.css';

class MainContainer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-0">
            <NavBar />
          </div>
        </div>
        <div className="row">
          <SideContainer />
          <DataContainer/>
        </div>
      </div>
    );
  }
}

export default MainContainer;
