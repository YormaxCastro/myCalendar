import React, { Component } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import eventComponent from './event-component';
import { connect } from 'react-redux';
import '../styles/calendar.css';

class Calendar extends React.Component {
    state = {
        view: "month",
        date: new Date(2015, 3, 12),
        width: 1200 //set accorrding to window size 
    }
    handleNavigate() {
        this.setState(this.state);
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
        return (
            <div id="calendarContainer">
                < BigCalendar
                    events= {
                        this.props.eventsReducer.events
                    }

                    onNavigate={this.handleNavigate}
                    localizer={
                        localizer
                    }
                    defaultView={this.state.view}
                    date={this.state.date}
                    style={
                        {
                            height: 500,
                            width: this.state.width
                        }
                    }
                    toolbar={
                        true
                    }
                    components={
                        {
                            event: eventComponent
                        }
                    }

                />


            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return(
     { 
            eventsReducer: state.EventsReducer
     }
     );
};
export default connect(mapStateToProps)(Calendar);