import React from 'react';
import {StatelessChild} from './StatelessChild';

export default class statefulParent extends React.Component{
    constructor(props){
        super(props);
        this.state ={ name: "click and see"};

        this.changeName = this.changeName.bind(this);
    }

    changeName(newName){
        this.setState({name : newName});
    }
    
    render(){
        return <StatelessChild name={this.state.name}  onChange={this.changeName}/>;
    }
}

