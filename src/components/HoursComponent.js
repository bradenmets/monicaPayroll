import React, { Component } from 'react';


class HoursField extends React.Component{
	constructor (props) {
    super(props)
    this.state = {
      hoursWorked: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

	handleChange(hours) {
    this.setState({
      hoursWorked: hours
    });
  	}

  	render() {
    return <div>
        <div class="label">Number of Hours:</div><input type="number" id="hoursWorked" onChange={this.handleChange} />    
      </div>
    ;  
  	}
}
export default HoursField;