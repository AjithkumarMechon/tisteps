import { ActionTypes } from "../Content/action_types";

export const setBus = (buses) => {
  return {
    type: ActionTypes.SET_BUSES,
    payload: buses,
  };
};
export const selectedBus = (bus) => {
  return {
    type: ActionTypes.SELECTED_BUS,
    payload: bus,
  };
};
export const removeSelectedBus = (bus) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_BUS,
    payload: bus,
  };
};
