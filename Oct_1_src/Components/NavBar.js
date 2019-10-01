import React,{Component} from 'react';
import './App.css';
import Header from './Header';
//import './Sidebar.css';
import {Route, BrowserRouter as Router, Switch, NavLink} from 'react-router-dom';
import {Dictionary} from './Dictionary';
import {View} from './Dictionary';
import Overview from './Overview';
// import AppPage from './redux/AppPage';
// import {Provider} from "react-redux";
// import {createStore} from "redux"; //connects store to our react redux app
// import rootreducer from './redux/rootreducer';

// const initialState ={};
// const store = createStore(rootreducer,initialState);


let Display = () => <h2>Welcome to dev dashboard</h2>
let Review = () =>  <div> <Dictionary /></div>
            //    <div><Provider store={store}> <AppPage /></Provider></div>
let Tracker = () => <h2>.</h2>
let Config =(props) => <h2>.</h2>
let Pagenotfound = () => <h2> Page not found 404 error</h2>


export default class NavBar extends Component {
    render() {
        return (
            <div>
               
             <Header />
              
                <Router>
                <div className="topnav">
                        <nav>
                            <NavLink  activeStyle= {{color :"white", display: 'inline'}}  to = "/deliveryreview">
                                <b>DELIVERY REVIEW</b> 
                            </NavLink>

                            <NavLink  activeStyle= {{color :"white", display: 'inline'}} to = "/efforttracker">
                                <b> EFFORT TRACKER </b>
                            </NavLink>

                            <NavLink  activeStyle= {{color :"white", display: 'inline'}} to ="/dataconfiguration"> 
                                <b>DATA CONFIGURATION </b> 
                            </NavLink>  
                        </nav>
                    </div>
                    

                    
                        <Switch>
                            <Route path='/' exact component={Display}></Route>   
                            <Route path='/deliveryreview'  exact component = {Review}></Route>
                            <Route path ='/deliveryreview/:title/overview' exact component ={View}></Route>
                            <Route path='/efforttracker' exact strict component = {Tracker}></Route>
                            <Route path='/dataconfiguration' component ={Config}></Route>
                            <Route component = {Pagenotfound}></Route>
                        </Switch>
                   </Router>


            </div>
        
           
        )
    }
}