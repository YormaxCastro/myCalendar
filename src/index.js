import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import { Route } from 'react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Calendar from './components/calendar';
import eventForm from './components/event-form';

const store = createStore(allReducers, composeWithDevTools(
  applyMiddleware(logger)));
store.subscribe( () =>{
  console.log("Stored Updated ", store.getState() );
} )

// store.dispatch( { 
//   type: "UPDATE_EVENT",
//   payload: {
//     'id': 16,
//     'title': 'Test Update Event',
//     'start': new Date(2015, 3, 20, 19, 30, 0),
//     'end': new Date(2015, 3, 22, 2, 0, 0)
//   }
// });

// store.dispatch({
//   type: "ADD_EVENT",
//   payload:
//       {
//         'id': 71,
//         'title': 'New Event',
//         'start': new Date(2015, 3, 20, 19, 30, 0),
//         'end': new Date(2015, 3, 22, 2, 0, 0)
//       }
// });


// store.dispatch({
//   type: "DELETE_EVENT",
//   payload: {
//     'id': 2,
//   }
// });

// store.dispatch({
//   type: "ADD_TODO",
//   payload: {
//     'id': 1,
//     'text':"This is a test text"
//   }
// });

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Router>
          <Route path="/" exact strict component={Calendar}></Route>
          <Route path="/event/" exact component={eventForm}></Route>
      </Router>  
    </Provider>

  </div >
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
