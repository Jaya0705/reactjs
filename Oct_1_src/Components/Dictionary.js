import React from 'react';
import Cards from './Cards.js';
import './App.css';
import './Card.css';
import {Route, BrowserRouter as Router, Switch, NavLink} from 'react-router-dom';

//import 'bootstrap/dist/css/bootstrap.min.css';


const apps = [{title: "Digitization",id : 0},
          {title: "Fresh2PI",id : 1},
          {title: "GWFM",id : 2},{title: 'GSS', id: 3},{title: "SIT", id : 4},{title: "Donation Tracking",id : 5},{title: "BSA",id :6}]

 


          
export const Dictionary = () => {

      return(
        <div style={{paddingTop: "20px"}}>
            <header>
               <div style={{ background: "rgb(197, 1, 60)", width: "100%", color: "white",paddingLeft: "14px", fontSize: "18px"}}>
                   <b>
                       APPLICATIONS
                   </b>
               </div>
            </header>
        
            {apps.length>0 && 
                   apps.map(({id,title}) => {
                       return(
                        <div className="card" key ={id}>
                            <Router>
                                <NavLink to={`/deliveryreview/${title}/overview`}>
                                        <h1 className = "card-h1" style={{color: "black"}}>
                                                    {title}
                                        </h1> 
                                </NavLink>
                            </Router>
                            
                            {/* <Router>                   
                                <Route exact path={`/deliveryreview/${i.title}/overview`}  render={()=> { return <h1>hiii</h1>}}> </Route>
                            </Router> */}
                        </div>
                       )
                
                    }
                  )
                }           
         </div>    
    )
}
   



export const View = () => {
  
                   return (
                            <div>
                                <h3> hi </h3>  
                                <NavLink to={`/deliveryreview`}>
                                        <strong>Back to Appview</strong>
                                </NavLink>
                            </div>
                         )
                       }



