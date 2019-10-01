import React from 'react';
import './App.css';
import AccLogo from '../Images/accenture-logo.png';

export default function Header(){
    const styleHead = {
        width : "80%",
        float : "left",
        backgroundColor : "skyblue",
        minHeight :"170px"
    }

    const styleLogo = {
        width : "20%",
        display: "inline-block",
        backgroundColor : "skyblue",
        minHeight :"170px",
       
    }
    
    return (
        <div>
         <header>
             <div style = {styleHead}>
                    <h1 className = "App-h1">
                             DEV DASHBOARD
                    </h1>
             </div>
             <div style= {styleLogo} >
                   <img className = "App-logo" src={AccLogo} alt="accenture"/> 
             </div>
           </header>
        </div>

    );
}