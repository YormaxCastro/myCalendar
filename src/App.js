import React from 'react';
import ReactDOM from 'react-dom';
import Event from './components/Event';
import events from 'events';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Calendar from './components/Calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import './App.css';


const localizer = BigCalendar.momentLocalizer(moment);
const MyCalendar = props => ( <div>
  < BigCalendar localizer = {
    localizer
  }
  events = { events }
  startAccessor = "01/01/2000"
  endAccessor = "01/30/2001" / >
</div>
);

function App() {
  ReactDOM.render(
    MyCalendar,
    document.getElementById('root')
  );
  console.log(localizer);
  return (
    
    <div className="App">
    </div>
  );
}


export default App;
