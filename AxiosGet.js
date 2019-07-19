import React from 'react';
import axios from 'axios';
import './App.css';

export class AxiosGet extends React.Component {
     state = { persons: [] }

componentDidMount() {
         axios.get(`https://jsonplaceholder.typicode.com/users`)
                  .then(res => { this.setState({ persons : res.data }); })
                   }

render() {
         return (
               <div className="App">
               <header className="App-header">
                <ul>
                     { this.state.persons.map(person => <li>{person.name}</li>)}
                </ul>
                </header>
                </div>
);
}
}

