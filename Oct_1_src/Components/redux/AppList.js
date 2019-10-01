import { connect } from "react-redux";
import React from 'react';
import Dictionary from '../Dictionary.js';


class AppList extends React.Component{
  render (){
        return (
            <div>
                 <Dictionary  appnames ={this.state.applications}/>
            </div>
        )
    }
    }

    const mapStateToProps=(state) =>{ 
        return {applications: state.applications }
        }



export default connect(mapStateToProps)(AppList);