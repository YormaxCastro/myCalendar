import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import * as ReactBootstrap from 'react-bootstrap';
import "./event.css";



class Event extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      location: null
    };
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);

  }

  saveEvent= () =>{
    console.log(this.state);
    console.log("Hello ");
  }
  handleStartChange(date) {

    this.setState({
      startDate: date
    });
    console.log(this.state.startDate);
  }
  handleEndChange(date) {
    this.setState({
      endDate: date
    });
  }


  render() {
    return (
      <div className="eventContainer">

        <h1>Event Details</h1>
          <ul className="horizontalRow">
            <li>
              {/* <input type="text" placeholder="Event Name" ></input>
              <input type="submit" onSubmit= { this.saveEvent }>Save</input> */}
            </li>

            <br></br>
            <br></br>

            <li>
              <label htmlFor="dateRange">Date :</label>
              <DatePicker
                className="dateRange"
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

            {/* <li>
              <label htmlFor="location"> Location: </label>
              <input type="text" className="location" placeholder="Ex. Menlo Park" />
            </li> */}
            <br></br>
            <br></br>
            
            <li>
              <label htmlFor="description">Description:</label>
              <br></br>
              <br></br>
              <textarea  id="description" className="description"></textarea>
            </li>
             
            <li> <p>Guest List</p> </li>
            <li>List for guest</li>  

          </ul>

          

          {/* <p> Day to Day</p>
          <p>Location</p>
          <p>Description</p>
          <p>guest</p>   */}

      </div>
    );
  }
}

export default Event;