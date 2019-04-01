import Select from './../../components/Select/Select';
import { connect } from 'react-redux';
import { getTables, selectService } from './../../actions';

async function _handleChangeService(event) {
  let serviceSelected = event.currentTarget.value;
  let objectServiceSelected = JSON.parse(serviceSelected); //object

  selectService(objectServiceSelected);
  // Get the tables
  await getTables(objectServiceSelected.uri);
}

function mapStateToProps(state) {
  return {
    name: 'selectServices',
    label: 'services',
    required: true,
    options: state.services || [],
    _handleChange: _handleChangeService.bind(this)
  };
}

const SelectServices = connect(mapStateToProps)(Select);

export default SelectServices;
