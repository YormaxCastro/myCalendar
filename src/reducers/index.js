import { combineReducers } from 'redux';
import EventsReducer from "./events-reducer";
import TodoReducer from "./todo-reducer";
const allReducers = combineReducers({
   EventsReducer,
   TodoReducer
});

export default allReducers;