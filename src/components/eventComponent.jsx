import React, { Component } from 'react';
import { tsThisType } from '@babel/types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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
        console.log(this.props.event);
        this.props.selectEvent(this.props.event);
    }

    render() {
        return (
            <div class="eventRibbon" >
                <p onClick={() => { this.onClick() }}> {this.state.title} </p>
            </div>

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

