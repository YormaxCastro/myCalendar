import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./event.css";



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
          <ul class="horizontalRow">
            <li>
              <h1>Event Details</h1>
            </li>
            <li>
              <input type="text" placeholder="Event Name"></input>
            </li>
            <li>
              <input type="submit" value="Save"></input>
            </li>

            <br></br>
            <br></br>
            <li>
              <label for="dateRange">Date :</label>
              <DatePicker
                name="dateRange"
                selected={this.state.startDate}
                onChange={this.handleStartChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
              />
            </li>
            <li> to </li>
            <li>
              <DatePicker
                selected={this.state.endDate}
                onChange={this.handleEndChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
              />
            </li>
            <br></br>
            <br></br>
            <li>
              <label for="location"> Location: </label>
              <input type="text" name="location" placeholder="Ex. Menlo Park" />
            </li>
            <br></br>
            <br></br>
            <li>
              <label for="description">Description:</label>
              <br></br>
              <br></br>
              <textarea name="description"></textarea>
            </li>

            <li> <p>Guest List</p> </li>
            <li>List for guest</li>

          </ul>


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