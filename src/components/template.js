import React from 'react';
import EventsList from '../containers/events-list';
import EventDetail from '../containers/event-details';
const View = () => (
  <div>
    <h2>UserName:</h2>
    <EventsList></EventsList>
    <hr></hr>
    <h2>Task:</h2>
    <EventDetail></EventDetail>
  </div>
);

export default View;