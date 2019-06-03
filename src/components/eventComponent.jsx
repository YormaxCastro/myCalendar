import React, { Component } from 'react';

 class eventComponent  extends Component {
     constructor(props){
         super(props);
         this.state={
             title: props.title
         }
         console.log(this.state);
     }

    popoverButtonClickHandler = (e) => {
        //handle button click
    }


    render() {
        return (
            <div>
                <p> { this.state.title } </p>
                
            </div>
        );
    }
}

export default eventComponent;