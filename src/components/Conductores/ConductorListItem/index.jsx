import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import * as actions from '../../../actions';


const ConductorListItem = props =>(
  
    <div className= "ConductorListItem">
     
            <h3> {props.mandadero.name} {props.mandadero.last_name} </h3> 
            <img src= {"https://sites.google.com/site/bobesponjaloerestodoparami/_/rsrc/1340788562881/patricio-estrella/patricio2%20%281%29.jpg"} height={"120"} width={"90"}/>
            <div> {props.mandadero.description}</div>
            <nav>
            <Link to='/home'>
                <button> Utilizar</button>
            </Link>
            </nav>

         
        </div> )



export default connect(
    undefined,
    (dispatch) => ({
      onSubmit(id,name,last_name){
        console.log(id,name,last_name)
        dispatch(actions.selectMandadero(id, name,last_name));
      }
    })
  )(ConductorListItem)
