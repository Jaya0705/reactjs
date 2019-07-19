import React from 'react';
import axios from 'axios';


export default class AxiosPost extends React.Component {
  state = { name: '' }

  handleChange = e => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();


  axios.post(`https://jsonplaceholder.typicode.com/users`,  this.state.name )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
        </header>
      </div>
    )
  }
}

//ReactDOM.render(<AxiosPost />,document.getElementById('root'));