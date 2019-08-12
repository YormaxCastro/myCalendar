import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import calendar from './components/calendar';
import eventForm from './components/eventForm';

const store = createStore(allReducers);

ReactDOM.render(
  <div>
    <Provider store={store}>

      <Router>
        <Route path="/" exact strict component={calendar}></Route>
        <Route path="/form" exact component={eventForm}></Route>
        <Route path="/event" exact component={event}></Route>
      </Router>

    </Provider>

  </div >
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
