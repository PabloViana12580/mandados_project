import React, { Fragment } from 'react';
import ConductorList from '../ConductorList';
import data from '../data/mandadero.json'

const ConductoApp= () =>{
  return (
    <div>
       
        <ConductorList props = "data"/>
    </div>
  );
}



export default ConductoApp;
