import React from 'react';
import './index.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function ConductorListItem(props){
   return <div className= "ConductorListItem">
    
           <h3> {props.mandaderos.name} {props.mandaderos.last_name} </h3> 
           <img src= {"https://i.imgur.com/sohWhy9.jpg"} height={"150"} width={"170"}/>
           <br/>
           <br/>
           <div> {props.mandaderos.description}</div>
           <br/>
           <Link to='/pedido'>
           <button className = "botonGG">Utilizar</button>
            </Link>
       </div> 
}
