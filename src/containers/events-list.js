import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectEvent } from '../actions/index';

class EventsList extends Component {

  createEventList() {
    return this.props.events.map((event) => {
      return (
        <li
          key={event.id}
          onClick={() => this.props.selectEvent(event)}
        > {event.title}</li >
      );
    });
  }

  render() {
    return (
      <ul> {this.createEventList()} </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  }

}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectEvent: selectEvent }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(EventsList);