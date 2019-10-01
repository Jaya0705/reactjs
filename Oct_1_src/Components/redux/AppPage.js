import React from 'react';
import {connect} from "react-redux";
import {AppAction} from "./AppAction";
import AppList from "./AppList";


export class AppPage extends React.Component{  
    render(){
        return (
            <div>
                {this.props.dispatch(AppAction())};
            <AppList />
           </div>
    )
}};



export default connect()(AppPage);