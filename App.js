import React from 'react';
import logo from './logo.svg';
import './App.css';
import {StateChange} from './StateChange.js'
import Style from './Style'
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={title: this.props.title,count :0}
        
        this.countChange= this.countChange.bind(this);
        this.displayChange= this.displayChange.bind(this);
    }

    countChange()
        {
          this.setState({count: this.state.count + 1})
          
        };
    
    displayChange(c){
      
      return ("you have clicked times");
    }
        
    render(){ 

        setTimeout(()=>
        {
            this.setState({title: this.props.name});
        },3000
        );

        return(
            <div className="App">
              <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
                <StateChange title={this.state.title}>

                </StateChange>
                <a
                   className="App-link"
                   href="https://reactjs.org"
                   target="_blank"
                   rel="noopener noreferrer">
                   Learn React
                </a>
                <p>
                  
                </p>
                <button onClick={this.countChange}> Click me!! you have clicked {this.state.count} times</button>
              </header>
              <Style/>
            </div>
        );
        
    }
}


export default App;
