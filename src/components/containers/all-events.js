import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectEvent } from '../actions/index';

class EventsList extends Component {

  createEventList() {
    return this.props.events;
  }

  render() {
    return (
      this.createEventList()
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  }

}

export default withRouter(connect(mapStateToProps)(EventsList));