import actionTypes from './../actionTypes';
export default function(state = null, action) {
  switch (action.type) {
    case actionTypes.SELECT_TABLE:
      return action.selectedTable
        ? Object.assign({}, action.selectedTable, { properties: action.selectedTable.properties || [] })
        : null;
    default:
      return state;
  }
}
