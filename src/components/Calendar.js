import React, { Component } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import events from '../events';
import eventComponent from './eventComponent';
import Event from './Event';
import '../styles/calendar.css';

class Calendar  extends Component {
    state = {
            view: "month",
            date: new Date(2015, 3, 12),
            width: 1200 //set accorrding to window size 
    }
  componentDidMount() {
      window.addEventListener("resize", () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
          });
      });
  }

    
    render() {
        const localizer = BigCalendar.momentLocalizer(moment);
        // let components = {
        //     event: MyEvent, // used by each view (Month, Day, Week)
        //     toolbar: MyToolbar,
        //     agenda: {
        //         event: MyAgendaEvent // with the agenda view use a different component to render events
        //     }
        // }
        return (
            <div id="calendarContainer">
                      < BigCalendar 
                      events = {
                          events
                      }
                      localizer = {
                          localizer
                      }
                      defaultView = { this.state.view }
                      date = { this.state.date }
                      style = {
                          {
                              height: 500,
                              width: this.state.width
                          }
                      }
                      toolbar = {
                          true
                      }

                     components = {
                           {
                               event: eventComponent

                            }
                        }

                      />

            </div>
 
        );
    }
}
// Calendar.propTypes = {
//     // name: PropTypes.string,
//     // age: PropTypes.number
// }
export default Calendar;