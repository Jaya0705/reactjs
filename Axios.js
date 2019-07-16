import React from 'react';

class Axios extends React.Component{
    constructor(props){

    }
}
    const data ={

        title :this.state.title,
        author :this.state.author,
        boyd :this.state.content
        }
        
        axios.post('https://jsonplaceholder.typicode.com/posts/',data)
        .then(response => {
        console.log(response);
        }) 
