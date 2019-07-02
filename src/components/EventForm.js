import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import { Form, Button } from 'react-bootstrap';
import "../styles/event.css";



class EventForm extends Component {

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

  saveEvent = () => {
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
        <h1>  Details </h1>
        <Form>
          <Form.Group controlId="eventDetails">
            <Form.Label>Event</Form.Label>
            <Form.Control placeholder="John Doe's Birthday" />
            <Form.Label>Date</Form.Label>
            <div id="dateRange">
              < DatePicker
                selected={
                  this.state.startDate
                }
                onChange={
                  this.handleStartChange
                }
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={
                  15
                }
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time" /
              >
              <p> to</p>
              < DatePicker
                selected={
                  this.state.endDate
                }
                onChange={
                  this.handleEndChange
                }
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={
                  15
                }
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time" /
              >
            </div>


          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description : </Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary" type="submit" id="submitBut">
            Submit
          </Button>
          <br></br>
          <br></br>


        </Form>




      </div>
    );
  }
}

export default EventForm;