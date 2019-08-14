import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, withRouter, Link, Switch } from "react-router-dom";
import { selectEvent } from '../actions/index';
import eventForm from './event-form';



class eventComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title
        }
        this.onClick = this.onClick.bind(this);
        this.routeChangeToForm = this.routeChangeToForm.bind(this);

    }

    onClick = () => {
        console.log(this.props.event);
        this.props.selectEvent(this.props.event);
    }
    routeChangeToForm() {
        let path = "event";
        this.context.history.push(path);
    }

    render() {
        return (
            <div className="eventRibbon" >
                <Link to="/forms/" onClick={this.onClick}> <p>{this.state.title}</p> </Link>
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

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(eventComponent));

