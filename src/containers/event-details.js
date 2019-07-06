import React, { Component } from 'react';
import { connect } from 'react-redux';


class EventDetail extends Component {


  render() {
    if (!this.props.event) {
      return (<h2>Select an event..</h2>)
    }
    return (
      <div>
        <h2>ID: {this.props.event.id}</h2>
        <h2>Title: {this.props.event.title} </h2>
      </div>

    )
  };
}

function mapStateToProps(state) {
  console.log(state);
  return { event: state.activeEvent };
}

export default connect(mapStateToProps)(EventDetail);