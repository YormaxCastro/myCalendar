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
    this.submitEvent = this.submitEvent.bind(this);
    //this.routeChange = this.routeChange.bind(this);


  }
  // routeChange() {
  //   let path = ``;
  //   this.props.history.push(path);
  // }
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
    let change = {};
    change[event.target.id] = event.target.value;
    this.setState(change);
  }
  submitEvent()  {
    let selectedEvent = {
      title: this.state.title
    };
    console.log(selectedEvent);
    this.props.submitEvent(selectedEvent);
  }
  componentWillMount() {
    let selectedEvent = this.props.eventsReducer.selectedEvent;
    //console.log(selectedEvent);
    if (JSON.stringify(selectedEvent) !== "{}") {
      this.setState({
        title: selectedEvent.title,
        description: selectedEvent.description,
        startDate: selectedEvent.start,
        endDate: selectedEvent.end,
        isNewEvent: false
      }
      );
    }
  }
  componentWillUnmount() {
  }

  render() {
        return (

            <div className="eventContainer">
                <h1>  Details </h1>
                <Form>
                    <Form.Group controlId="eventDetails">
                        <Form.Label>Event</Form.Label>
                        <Form.Control 
                            placeholder="John Doe's Birthday" 
                            value={this.state.title} 
                            onChange={ this.handleChange } />
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
      submitEvent: submitEvent
    }, dispatch)
}


export default withRouter(connect(mapStateToProps, matchDispatchToProps)(eventForm));