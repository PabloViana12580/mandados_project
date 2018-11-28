import React from 'react';
import ConductorListItem from '../ConductorListItem/index';
import './index.css';

const ConductorList = (props) => (
    <div>
     <h1>Que Manda</h1>
    <div className= "ConductorList">
       {
           
         props.mandaderos.map(mandaderos =>
        <ConductorListItem mandaderos = {mandaderos}/>)


    }

    </div>
    </div>
)

export default ConductorList;