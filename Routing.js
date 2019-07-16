import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import {Home} from './Home.js';
import {About} from './About.js';
import {Contact} from './Contact.js';


export default class Routing extends React.Component{
    render(){
        return(
            <Router>
               <div className ="App">
                  <header className ="App-header">
                    <ul style = {{background: 'lightblue' ,color : 'black'}}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                    </ul>
                  </header>
               </div>
            </Router>
    );
}
}

export const routing = (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about/:id" component={About} />
        <Route exact path="/contact/:city/:phoneno" component={Contact} />
      </div>
    </Router>
  )
    


ReactDOM.render(<Routing /> ,document.getElementById('root'));


