import React, { Component } from 'react';

class Event extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="Title"></input>
                    <br></br>
                    <p> Day to Day</p>
                    <p>Location</p>
                    <p>Description</p>
                    <p>guest</p>

                </form>
                
            </div>
        );
    }
}

export default Event;