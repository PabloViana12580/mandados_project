import React, { Fragment } from 'react';
import ConductoresList from '../ConductoresList';
import data from '../data/mandadero.json'



function ConductorApp(){
    return(
      <div className = "page-container">
      <ConductoresList  mandaderos= {data.mandaderos} />
      </div>
    );
  }

export default ConductorApp;


