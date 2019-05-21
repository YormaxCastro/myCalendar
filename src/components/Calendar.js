import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'moment-timezone';
import "./calendar.css";


class Calendar  extends Component {
    

    state={  
        localizer: BigCalendar.momentLocalizer(moment) //  or globalizeLocalizer
    }

    




    render() {
        return (
            <div>
                    < BigCalendar
                    localizer = {
                        localizer
                    }
                    events = {
                        myEventsList
                    }
                    startAccessor = "1/1/2001"
                    endAccessor = "1/30/2001" /
                        >


            </div>

        );
    }
}

export default Calendar;