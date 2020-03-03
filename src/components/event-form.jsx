import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { selectEvent, addEvent, updateEvent } from '../actions/index';
import { bindActionCreators } from 'redux';
import DatePicker from "react-datepicker";
import { Form, Button } from 'react-bootstrap';
import "../styles/event.css";



class eventForm extends Component {
  constructor(props) {
    super(props);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitEvent = this.submitEvent.bind(this);
  }
  handleStartChange(date) {
    this.setState({
      start: date
    });
  }
  handleEndChange(date) {
    this.setState({
      end: date
    });
  }
  handleChange(event) {
    let change = {};
    change[event.target.id] = event.target.value;
    this.setState(change);
  }
  submitEvent()  {
    let eventExists = false;
    let allEvents = this.props.eventsReducer.events;
    for (let i = 0; i < allEvents.length; i++) {
      if (allEvents[i].id === this.state.id) {
        eventExists= true;
      }
    }
    let currentEvent= {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      start: this.state.start,
      end: this.state.end
    }
    if (eventExists){ 
      this.props.updateEvent(currentEvent);
    } else {
      this.props.addEvent(currentEvent);
    }
    this.props.history.push('/');


  }
  componentWillMount() {
    let uuid = require('react-native-uuid');
    let selectedEvent = this.props.eventsReducer.selectedEvent;
    if (JSON.stringify(selectedEvent) !== "{}") {
      this.setState({
        id: selectedEvent.id,
        title: selectedEvent.title,
        description: selectedEvent.description,
        start: selectedEvent.start,
        end: selectedEvent.end
      }
      );
    } else {
      this.setState({
        id: uuid.v4(),
        title: "",
        description: "",
        start: new Date(),
        end: new Date()
      });
    }
  }
  render() {
        return (

            <div className="eventContainer">
                <h1>  Details </h1>
                <Form onSubmit={this.submitEvent}>
                    <Form.Group controlId="eventDetails">
                        <Form.Label>Event</Form.Label>
                        <Form.Control 
                            placeholder="John Doe's Birthday" 
                            value={this.state.title} 
                            onChange={(event) => this.setState({ title: event.target.value }) } />
                        <Form.Label>Date</Form.Label>

                        <div id="dateRange">

                            < DatePicker
                                selected={
                                    this.state.start
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
                                    this.state.end
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
                        <Form.Control
                         as="textarea" 
                         rows="3" 
                         value={this.state.description} 
                         onChange={this.handleChange}  />
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
const mapStateToProps = (state) => {
  return (
    {
      eventsReducer: state.EventsReducer
    }
  );
};
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectEvent: selectEvent,
      addEvent: addEvent,
      updateEvent: updateEvent
    }, dispatch)
}


export default withRouter(connect(mapStateToProps, matchDispatchToProps)(eventForm));