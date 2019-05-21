import React, { Component } from 'react';
import PropTypes from 'prop-types'
import 'moment-timezone';
import "./calendar.css";


class Calendar  extends Component {
    
    
    render() {
        return (
            <div>

             <p>this is { this.props.name }</p>
             <p> this is { this.props.age } </p>

            </div>
 
        );
    }
}
Calendar.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}
export default Calendar;