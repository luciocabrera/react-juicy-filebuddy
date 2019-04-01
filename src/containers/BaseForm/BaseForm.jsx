import DynamicReduxForm from './../../components/DynamicReduxForm/DynamicReduxForm';
import { connect } from 'react-redux';

function handleSubmit() {
  window.alert('submiting form');
  console.log('submiting form');
}


function _getFieldsForm(state) {
  return   state && state.selectedTable && state.selectedTable.properties
  ? state.selectedTable.properties
  : [];
}

function mapStateToProps(state) {
  return {
    fields: _getFieldsForm(state),
    handleSubmit: handleSubmit.bind(this)
  };
}

const BaseForm = connect(mapStateToProps)(DynamicReduxForm);

export default BaseForm;
