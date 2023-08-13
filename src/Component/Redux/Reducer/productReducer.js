import { ActionTypes } from "../Content/action_types";
const initialstate = {
  buses: [],
};
export const setBusesReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BUSES:
      return { ...state, buses: payload };

    default:
      return state;
  }
};
export const selectedBusReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_BUS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_BUS:
      return {};
    default:
      return state;
  }
};
