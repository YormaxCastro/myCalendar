import { combineReducers } from 'redux';
import EventReducer from "./reducer-events";
import ActiveEventReducer from "./reducer-active-event";
const allReducers = combineReducers({
   events: EventReducer,
   activeEvent: ActiveEventReducer
});

export default allReducers;