import React from 'react';
import ReactDOM from 'react-dom';
import Event from './components/Event';
import events from './events';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Calendar from './components/Calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import './App.css';


const localizer = BigCalendar.momentLocalizer(moment);

function App() {
  console.log(events);


  return (
    
    <div className="App">
      <BigCalendar 
      events= { events }
      localizer= { localizer }
      />
    </div>
  );
}


export default App;
