import React from 'react';

export default function ConductorListItem(props){
    return <div className= "ConductorListItem">
     
            <h3> {props.mandaderos.name} {props.mandaderos.last_name} </h3> 
            <img src= {"https://sites.google.com/site/bobesponjaloerestodoparami/_/rsrc/1340788562881/patricio-estrella/patricio2%20%281%29.jpg"} alt={true} height={"120"} width={"90"}/>
            <div> {props.mandaderos.description}</div>
            <button>Utilizar</button>
         
        </div> 
}

