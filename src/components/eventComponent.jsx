import React, { Component } from 'react';
import { tsThisType } from '@babel/types';

 class eventComponent  extends Component {
     constructor(props){
         super(props);
         this.state={
             title: props.title
         }
         this.onClick = this.onClick.bind(this);
        
     }

     onClick= ()=> {
         console.log("onCLick fired for "+ this.props.title);
     }

    render() {
        return (
            <div class="eventRibbon" >
                <p onClick={ ()=> { this.onClick() } }> { this.state.title } </p>
            </div>
                
        );
    }
}

export default eventComponent;