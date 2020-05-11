import React, { Component } from 'react';
class Handle extends Component {
 
    handeClick=()=>{
        console.log("In Handle Click");
    }
    render() { 
        return (  
            <button onClick= {this.handeClick}> Click Me</button>
        );
    }
}
 
export default Handle;