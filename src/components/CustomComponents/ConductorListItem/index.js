/** ]import React from 'react';
import { connect } from 'react-redux';
const ConductorItem = ({
  props
}) => (
        <div className= "ConductorListItem">
        
        <h3> {props.mandaderos.name} {props.mandaderos.last_name} </h3> 
        <img src= {"https://www.soy502.com/sites/default/files/styles/full_node/public/2018/Nov/17/picachu940.jpg"} height={"120"} width={"90"}/>
        <div> {props.mandaderos.description}</div>
        <button>Utilizar</button>
    
    </div> 
);
export default connect(
  (state) => ({
    ...state
  }),
)(ConductorItem);
*/