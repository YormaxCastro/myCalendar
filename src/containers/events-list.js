import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class EventsList extends Component {

  createEventList() {
    return this.props.events.map((event) => {
      return (
        <li key={event.id}>{event.title}</li>
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

export default connect(mapStateToProps)(EventsList);