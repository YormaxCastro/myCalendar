import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import  { Form, InputGroup, FormControl } from 'react-bootstrap';
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
      {/* <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Event</Form.Label>
          <Form.Control placeholder="John Doe's Birthday" /> 
          <Form.Label>Date</Form.Label>
          <Form.Control placeholder="Date"/>
        </Form.Group>
        
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        
      </Form>; */}

        <h1>Event Details</h1>
          <ul className="horizontalRow">
            <li>
        <InputGroup size="lg">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
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