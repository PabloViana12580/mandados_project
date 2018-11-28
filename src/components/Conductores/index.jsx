import React from 'react';
import ConductorListItem from '../CustomComponents/ConductorListItem';
import './conductores.css';


export default function ConductorList(props){
    return <div>
     <h1>Que Manda</h1>
    <div className= "ConductorList">
       {         
         props.mandaderos.map(mandaderos =>
        <ConductorListItem props = {mandaderos}/>)
    }

    </div>
    </div>
}