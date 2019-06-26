import React from 'react';
import Event from './components/Event';
import events from './events';
import Calendar from './components/Calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import './App.css';



function App() {
  console.log(events);


  return (

    <div className="App">
      <Calendar />

    </div>
  );
}


export default App;
