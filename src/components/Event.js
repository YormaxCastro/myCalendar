import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class Event extends Component {

 constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date()
    };
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);

  }


  handleStartChange(date) {
    this.setState({
      startDate: date
    });
  }
  handleEndChange(date) {
    this.setState({
      endDate: date
    });
  }


    render() {
        return (
            <div>
                <form>
                    <br></br>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleStartChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy h:mm aa"
                        timeCaption="time"
                    />
                    <p>to</p>
                    <DatePicker
                        selected={this.state.endDate}
                        onChange={this.handleEndChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy h:mm aa"
                        timeCaption="time"
                    />


                    <p> Day to Day</p>
                    <p>Location</p>
                    <p>Description</p>
                    <p>guest</p>

                </form>
                
            </div>
        );
    }
}

export default Event;