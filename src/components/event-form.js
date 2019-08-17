import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { selectEvent } from '../actions/index';
import { bindActionCreators } from 'redux';
import DatePicker from "react-datepicker";
import { Form, Button } from 'react-bootstrap';
import "../styles/event.css";



class eventForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
      location: null,
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
    // this.setState({
    //   startDate: date
    // });
    console.log(this.state.startDate);
  }
  handleEndChange(date) {
    this.setState({
      endDate: date
    });
  }
  render() {
    let selectedEvent = this.props.activeEvent;
    if (JSON.stringify(selectedEvent) != "{}") {
      this.handleStartChange(selectedEvent.start);
      this.handleEndChange(selectedEvent.end);

    }
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
                timeCaption="time" />
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
function mapStateToProps(state) {
  return { activeEvent: state.activeEvent };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectEvent: selectEvent }, dispatch)
}


export default withRouter(connect(mapStateToProps, matchDispatchToProps)(eventForm));