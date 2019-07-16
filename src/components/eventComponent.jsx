import React, { Component } from 'react';
import { tsThisType } from '@babel/types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import { selectEvent } from '../actions/index';

var createBrowserHistory = require('history').createBrowserHistory;
const history = createBrowserHistory();
const location = history.location;


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
        history.push(path);
    }

    render() {
        return (
            <Router>
                <div class="eventRibbon" >
                    <p onClick={() => { this.routeChangeToForm() }}> {this.state.title} </p>


                </div>

                <Route path="/event" exact component={eventComponent} />
            </Router>
        );
    }
}
function mapStateToProps(state) {
    // console.log(state);
    return { activeEvent: state.activeEvent };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectEvent: selectEvent }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(eventComponent);

