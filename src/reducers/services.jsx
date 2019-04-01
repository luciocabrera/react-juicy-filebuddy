import actionTypes from "./../actionTypes";

export default function (state = [], action) {

  switch (action.type) {
    case actionTypes.GET_SERVICES:
      return action.services;
    default:
      return state;
  }
}