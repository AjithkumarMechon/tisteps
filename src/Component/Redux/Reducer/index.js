import { combineReducers } from "redux";
import { selectedBusReducer, setBusesReducer } from "./productReducer";
const rootReducer = combineReducers({
  allBuses: setBusesReducer,
  bus: selectedBusReducer,
});
export default rootReducer;
