import Select from './../../components/Select/Select';
import { connect } from 'react-redux';
import { getRows, selectTable } from './../../actions';

async function _handleChangeService(event) {
  let tableSelected = event.currentTarget.value;
  let objectTableSelected = JSON.parse(tableSelected); //object

  selectTable(objectTableSelected);
  // Get the rows
  await getRows(objectTableSelected.uri + '/' + objectTableSelected.key);
}

function mapStateToProps(state) {
  return {
    name: 'SelectTables',
    label: 'tables',
    required: true,
    options: state.tables || [],
    _handleChange: _handleChangeService.bind(this)
  };
}

const SelectTables = connect(mapStateToProps)(Select);

export default SelectTables;
