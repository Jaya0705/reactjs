import React from 'react';


export class StatelessChild extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const n = e.target.value;
    this.props.onChange(n);
   // console.log( "You selected: ", name);
  }

  render(){
    return(
      <div className="App"> 
      <header className="App-header">    
      <select id="mySelect" onChange={this.handleChange}>
        <option value= "Days">Days</option>
        <option value="Monday"> Monday </option>
        <option value="Tuesday">Tuesday </option>
        <option value="Wednesday">Wednesday </option>
        <option value="Thursday">Thursday </option>
        <option value="Friday">Friday </option>
        <option value="Saturday">Saturday </option>
        <option value="Sunday">Sunday </option>
      </select>
      <h1> today is {this.props.name}!!</h1>
      </header> 
      </div>
    );
  }
}

