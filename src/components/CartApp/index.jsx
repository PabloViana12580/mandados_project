import React, { Fragment } from 'react';
import Inventory from '../Pedir/Inventory';
import CartTotal from '../Pedir/Pedido';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Log from '../Login/index';
import Registro from '../Registro/index';
import RegistroConductor from '../registroConductor/index'
import ConductoresList from '../Conductores/ConductoresList/index' 
import data from '../Conductores/data/mandaderos.json'
import { formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import * as clientActions from '../../actions/client';

const CartApp = () => (
  <Fragment>
        <Route exact path="/conductores" component={Conductores} />
        <Route exact path="/" component={Login}/>
        <Route exact path="/registro" component= {Registrar}/>
        <Route exact path="/registroC" component = {RegistrarConductor}/>
        <Route exact path="/compras" component= {Compras}/>
        <Route exact path="/home" component={Home}/>
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
      <Log/>
    </div>
  );
}


function Home(){
  return(
    <div className = "page-container">
    <ConductoresList  mandaderos= {data.mandaderos} />
    </div>
  );
}

const Registrar =({
  createClient,
}) => {
  return (
    <div>
      <Registro onSubmit={createClient}/>
    </div>
  );
}

const registerContainer = connect(
  state => ({
    userName: formValueSelector('client')(state, 'userName'),
    Name: formValueSelector('client')(state, 'Name'),
    LastName: formValueSelector('client')(state, 'LastName'),
    Email: formValueSelector('client')(state, 'Email'),
    Age: formValueSelector('client')(state, 'Age'),
    passWord: formValueSelector('client')(state, 'passWord'),
    Genre: formValueSelector('client')(state, 'Genre'),
    telePhone: formValueSelector('client')(state, 'telePhone'),
    idDocument: formValueSelector('client')(state, 'idDocument'),
  }),
  dispatch =>({
    createClient(state) {
      dispatch(clientActions.createClient(
        state.userName,
        state.Name,
        state.LastName,
        state.Email,
        state.Age,
        state.passWord,
        state.Genre,
        state.telePhone,
        state.idDocument,
      ));
    },
  }),
)(Registrar);

function RegistrarConductor() {
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



export default CartApp;
