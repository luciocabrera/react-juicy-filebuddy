import actionTypes from "./../actionTypes";
export default function (state = [], action) {

  switch (action.type) {
    case actionTypes.GET_TABLES:
      return action.selectTables;

    default:
      return state;
  }
}