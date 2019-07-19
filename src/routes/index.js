import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home'; // Make this commponent around the 3:31 mark 
import EventForm from './EventForm';

export default () => (
  <BrowserRouter>
    <Route path="/" component={Home} />
    <Route path="/EventForm" component={EventForm} />
  </BrowserRouter>
);

