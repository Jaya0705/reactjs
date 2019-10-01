import React from 'react';
import NavBar from './NavBar.js';
import './App.css';
import Header from './Header.js'
import {Route, BrowserRouter as Router, Switch, NavLink} from 'react-router-dom';



let OverviewSub = () => <h2>.</h2>
let Status = () => <h2>.</h2>
let Jira =(props) => <h2>.</h2>
let Pagenotfound = () => <h2> Page not found 404 error</h2>



export default class Overview extends React.Component{
    render(){
        return (
            <div className="topnav">
                <div>
                    <Router>
                        <div >
                            <nav>
                                <NavLink activeStyle= {{color :"white", display: 'inline'}}  to = "/overview">
                                    <b>OVERVIEW</b> 
                                </NavLink>

                                <NavLink activeStyle= {{color :"white", display: 'inline'}} to = "/jira">
                                    <b>JIRA DETAILS </b>
                                </NavLink>

                                <NavLink  activeStyle= {{color :"white", display: 'inline'}} to ="/reviewstatus"> 
                                <b>REVIEW STATUS</b> 
                                </NavLink>  
                            </nav>
                        </div>
                            <Switch>
                                <Route path='/' exact component={OverviewSub}></Route>   
                                <Route path='/overview'  exact component = {OverviewSub}></Route>
                                <Route path='/jira' exact strict component = {Jira}></Route>
                                <Route path='/reviewstatus' component ={Status}></Route>
                                <Route component = {Pagenotfound}></Route>
                            </Switch>
                    </Router>
            </div>

            </div>
        )
    }
}