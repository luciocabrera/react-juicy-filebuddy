import actionTypes from './../actionTypes';
export default function(state = null, action) {
  switch (action.type) {
    case actionTypes.SELECT_SERVICE:
      return action.selectedService
        ? Object.assign({}, action.selectedService, { tables: action.selectedService.tables || [] })
        : null;
    default:
      return state;
  }
}
