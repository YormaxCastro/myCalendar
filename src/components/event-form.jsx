import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { selectEvent, submitEvent } from '../actions/index';
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
      isNewEvent: true
    };
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleChange = this.handleChange.bind(this);

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
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  componentWillMount() {
    let selectedEvent = this.props.activeEvent;
    console.log("the prop is ");
    console.log(this.props);
    console.log(this.props.allEvents);
    this.props.submitEvent(this.props.allEvents, selectedEvent,this.props.isNewEvent);

    if (JSON.stringify(selectedEvent) !== "{}") {
      this.setState({
        title: selectedEvent.title,
        description: selectedEvent.id,
        startDate: selectedEvent.start,
        endDate: selectedEvent.end,
        isNewEvent: false
      }
      );
    }
  }
  componentWillUnmount() {
    console.log("Unmounted");
  }






  render() {
    return (

      <div className="eventContainer">
        <h1>  Details </h1>
        <Form>
          <Form.Group controlId="eventDetails">

            <Form.Label>Event</Form.Label>
            <Form.Control placeholder="John Doe's Birthday" defaultValue={this.state.title} onChange={this.handleChange} />
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

              <Form.Label> to </Form.Label>

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
                timeCaption="time" />
            </div>


          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description : </Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Button variant="primary" type="submit" id="submitBut" onClick={this.props.submitEvent} >
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
  return {
    activeEvent: state.activeEvent,
    allEvents: state.events
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectEvent: selectEvent,
      submitEvent: submitEvent
    }, dispatch)
}


export default withRouter(connect(mapStateToProps, matchDispatchToProps)(eventForm));