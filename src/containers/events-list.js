import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class EventsList extends Component {

  render() {
    return (
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>three</li>
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  }

}

export default connect(mapStateToProps)(EventsList);