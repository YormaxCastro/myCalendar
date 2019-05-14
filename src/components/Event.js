import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import * as ReactBootstrap from 'react-bootstrap';
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
      <div class="eventContainer">
        <form>
        <h1>Event Details</h1>
          <ul class="horizontalRow">
            <li>
            </li>
            <li>
              <input type="text" placeholder="Event Name"></input>
              <ReactBootstrap.Button variant="success">Save</ReactBootstrap.Button>

            </li>

            <br></br>
            <br></br>

            <li class="dateRanges">
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
              <textarea  id="description" name="description"></textarea>
            </li>
             
            <li> <p>Guest List</p> </li>
            <li>List for guest</li>  

          </ul>

          

          {/* <p> Day to Day</p>
          <p>Location</p>
          <p>Description</p>
          <p>guest</p>   */}

        </form>

      </div>
    );
  }
}

export default Event;