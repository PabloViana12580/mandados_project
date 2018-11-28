import React, { Fragment } from 'react';
import ConductorList from '../ConductoresList';
import data from '../data/mandaderos.json';

const ConductorApp= () =>{
  return (
    <div>
        <ConductorList props = "data"/>
    </div>
  );
}



export default ConductorApp;
