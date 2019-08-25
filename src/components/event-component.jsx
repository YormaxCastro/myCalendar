import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, withRouter, Link, Switch } from "react-router-dom";
import { selectEvent } from '../actions/index';



class eventComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick = () => {
        this.props.selectEvent(this.props.event);
    }
    getStyle() {
        return {
            textDecoration: 'none',
            color: 'white'
        }
    }
    render() {
        let title = <p> {this.state.title} </p>;
        return (
            <div className="eventRibbon" >
                <Link to="/event/" onClick={this.onClick} style={this.getStyle()}> {title} </Link>
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

