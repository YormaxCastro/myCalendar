import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Hoome from './Home'; // Make this commponent around the 3:31 mark 

export default () => (
  <BrowserRouter>
    <Route path="/" component={Home} />
    {/* add all other routes */}
  </BrowserRouter>
);

