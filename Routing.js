import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import {Home} from './Home.js';
import {About} from './About.js';
import {Contact} from './Contact.js';


export const routing = (
    <Router>
      <div className ="App">
                  <header className ="App-header">
                    <ul style = {{background: 'lightblue' ,color : 'black'}}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about/ababab">About us</Link></li>
                        <li><Link to="/contact/Coimbatore/9929392939">Contact us</Link></li>
                    </ul>
                  </header>
               
        <Route exact path="/" component={Home} />
        <Route exact path="/about/:id" component={About} />
        <Route exact path="/contact/:city/:phoneno" component={Contact} />
      </div>
    </Router>
  )
    


//ReactDOM.render(routing ,document.getElementById('root'));


