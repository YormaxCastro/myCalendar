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

const store = createStore(allReducers);
console.log(store);
ReactDOM.render(
  <Provider store={store}>
    <View></View>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
