import React, { Fragment } from 'react';
import Inventory from '../Pedir/Inventory';
import CartTotal from '../Pedir/Pedido';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
import data from '../Conductores/data/mandaderos.json'
import { formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import * as clientActions from '../../actions/client';

const CartApp = () => (
  <Fragment>

  </Fragment>
);

function Compras() {
  return (
    <div>
         <Inventory />
         <CartTotal/>
    </div>
  );
}


function Login() {
  return (
    <div>
    </div>
  );
}


function Home(){
  return(
    <div className = "page-container">
    {/*<ConductoresList  mandaderos= {data.mandaderos} />*/}
    </div>
  );
}

const Registrar =({
  createClient,
}) => {
  return (
    <div>
      {/*<Registro onSubmit={createClient}/>*/}
    </div>
  );
}



/*function RegistrarConductor() {
  return (
    <div>
      <RegistroConductor/>
    </div>
  );
}

function Conductores() {
  return (
    <div>
      <Registro/>
    </div>
  );
}
*/


export default CartApp;
