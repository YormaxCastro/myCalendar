import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import View from './components/template';
import { template } from '@babel/core';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/routingTemplate';
import EventsList from './containers/events-list';
import Calendar from './components/Calendar';
import EventForm from './components/EventForm';

const store = createStore(allReducers);
console.log(store);
ReactDOM.render(
  <div>
    <Provider store={store}>
      <p>Home</p>
      <Router>
        <Route path="/" exact strict component={Calendar}></Route>
        <Route path="/form" exact component={EventForm}></Route>
      </Router>

    </Provider>

  </div >
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
