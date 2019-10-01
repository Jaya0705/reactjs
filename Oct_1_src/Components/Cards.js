import React from 'react';
import './Card.css';
import Overview from './Overview.js';
import {Route, BrowserRouter as Router, Switch, NavLink} from 'react-router-dom';


const Display = () => {
    return(
        <div>
            <h1>
                hi
            </h1>
        </div>

    )
}


// const CardsEvent = (props) =>{
//         return(
//             <div>
//                  <Link to={`/deliveryreview/${props.appname}/overview`}>
//                             <h1 className = "card-h1" style={{color: "black"}}>
//                                         {props.appname}
//                             </h1> 
//                  </Link>
//             </div>
//         )
// }



//     return(
//         <div>
//                 <Router>
//                         <div>
//                             <CardsEvent appname={props.name} />
//                                 <Route path={`${match.url}/:appName`} component={Overview}/>
//                                 <Route exact path={match.url} render={() => (
//                                     <h3>Please select an application from the list.</h3>
//                                 )}/>
//                         </div>                
//                 </Router>

            
//         </div>
//     )

const Cards = (props)=>{
    return(
        <div className="card" >             
                <Router>       
                 
                        <NavLink to={`/deliveryreview/${props.name}/overview`}>
                                    <h1 className = "card-h1" style={{color: "black"}}>
                                                {props.name}
                                    </h1> 
                        </NavLink>
                </Router>
          

                <Router>
                    <Switch>
                        <Route exact path={`/deliveryreview/${props.name}/overview`}  component = {Display}> </Route>
                    </Switch>
                </Router>
           
       </div>
    );
}

export default Cards;