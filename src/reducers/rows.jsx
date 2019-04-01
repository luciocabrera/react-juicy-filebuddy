import actionTypes from './../actionTypes';
export default function(state = [], action) {
  switch (action.type) {
    case actionTypes.GET_ROWS:
      return action.data.d.results;
    default:
      return state;
  }
}
