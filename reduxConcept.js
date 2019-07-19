import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from "react-redux";
import { createStore } from "redux";

//Store Creation
const store = createStore(reducer);

//Reducers Function Creation
function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'CONSTVAL':
      return state + action.payload
    default:
      return state
  }
};

//Action Creation
function increment() {
  return { type: "INCREMENT" }
};
function decrement() {
  return { type: "DECREMENT" }
};
function constandvalue(payload) {
  return { type: "CONSTVAL", payload }
};

//This method is used to get state value and mapped to props. You can easily access all state value through props.
function mapStateToProps(state){
  return { finalValue: state };
}


//This method used to call dispatch your action function and reducer do some logic and return new state value.
function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    constandvalue: (value) => dispatch(constandvalue(value))
  };
}

//Creating class component. 
export class reduxConcept extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <div> Increment Value {this.props.finalValue} </div>
        <button onClick={() => this.props.increment()}>Increment</button>
        <button onClick={() => this.props.decrement()}>Decrement</button>
        <button onClick={() => this.props.constandvalue(100)}>Const Value</button>
      </div>
    );
  }
}

//Connect your react app and store.
const ConnectForm = connect(mapStateToProps, mapDispatchToProps)(reduxConcept);

//Configuration for your newly created store using Provider
render(
  <Provider store={store}>
    <ConnectForm />
  </Provider>,
  document.getElementById('root')
);