// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, withRouter, Link, Switch } from "react-router-dom";
// import { connect } from 'react-redux';
// import { selectEvent, submitEvent } from '../actions/index';
// import { bindActionCreators } from 'redux';
// import DatePicker from "react-datepicker";
// import { Form, Button } from 'react-bootstrap';
// import "../styles/event.css";



// class eventForm extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       description: "",
//       startDate: new Date(),
//       endDate: new Date(),
//       location: null,
//       isNewEvent: true
//     };
//     this.handleStartChange = this.handleStartChange.bind(this);
//     this.handleEndChange = this.handleEndChange.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.submitEvent = this.submitEvent.bind(this);
//     //this.routeChange = this.routeChange.bind(this);


//   }
//   // routeChange() {
//   //   let path = ``;
//   //   this.props.history.push(path);
//   // }
//   handleStartChange(date) {
//     this.setState({
//       startDate: date
//     });
//   }
//   handleEndChange(date) {
//     this.setState({
//       endDate: date
//     });
//   }
//   handleChange(event) {
//     let change = {};
//     change[event.target.id] = event.target.value;
//     this.setState(change);
//   }
//   submitEvent()  {
//     let selectedEvent = {
//       title: this.state.title
//     };
//     console.log(selectedEvent);
//     this.props.submitEvent(selectedEvent);
//   }
//   componentWillMount() {
//     let selectedEvent = this.props.activeEvent;
//     if (JSON.stringify(selectedEvent) !== "{}") {
//       this.setState({
//         title: selectedEvent.title,
//         desc: selectedEvent.id,
//         startDate: selectedEvent.start,
//         endDate: selectedEvent.end,
//         isNewEvent: false
//       }
//       );
//     }
//   }
//   componentWillUnmount() {
//     console.log(this.state);
//   }

//   render() {
//     return (

      
//   }
// }
// function mapStateToProps(state) {
//   return {
//     activeEvent: state.activeEvent,
//     allEvents: state.events
//   };
// }
// function matchDispatchToProps(dispatch) {
//   return bindActionCreators(
//     {
//       selectEvent: selectEvent,
//       submitEvent: submitEvent
//     }, dispatch)
// }


// export default withRouter(connect(mapStateToProps, matchDispatchToProps)(eventForm));