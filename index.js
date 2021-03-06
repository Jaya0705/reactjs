import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DropDown from './DropDown';
import NameForm from './NameForm';
import Routing from './Routing';
import StatefulParent from './StatefulParent';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<Routing />, document.getElementById('root'));


// ReactDOM.render(<div><App title="Hi, there!!" name="Welcome!"/>
//                 <DropDown/>
//                 <NameForm />
//                 <StatefulParent/>
//                 <Routing/>
//                 </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
