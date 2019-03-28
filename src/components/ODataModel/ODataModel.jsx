import React, { Component } from 'react';
import OData from 'react-odata';

class ODataModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modelName: props.modeName,
      data: {},
      baseUrl: '',
      query: ''
    };
    this.fetchData();
  }

  async fetchData() {

  return  (<OData baseUrl={this.state.baseUrl} query={this.state.query}>
    { ({ loading, error, data }) => (
      <div>
        { loading && {/* handle loading here */} }
        { error && {/* handle error here */} }
        { data && {function(){
          this.setstate({data: data});
        }}}
      </div>
    )}
  </OData>)
  }
}

export default ODataModel;
