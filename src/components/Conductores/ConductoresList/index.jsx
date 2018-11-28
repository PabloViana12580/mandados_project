import React from 'react';
import ConductorListItem from '../ConductorListItem/index';
import './index.css';

export default function ConductorList(props){
    return <div>
    <div className = "imagen"> </div>
    <div className= "ConductorList">
       {  
         props.mandaderos.map(mandaderos =>
        <ConductorListItem mandaderos = {mandaderos}/>)
    }

    </div>
    </div>
}