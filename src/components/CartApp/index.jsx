import React, { Fragment } from 'react';
import Inventory from '../Pedir/Inventory';
import CartTotal from '../Pedir/Pedido';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Log from '../Login/index';
import Registro from '../Registro/index';

const CartApp = () => (
  <Fragment>
        <Route exact path="/conductores" component={Conductores} />
        <Route exact path="/" component={Login}/>
        <Route exact path="/registro" component= {Registrar}/>
        <Route exact path="/home" component= {Home}/>
  </Fragment>
);

function Home() {
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


function Registrar() {
  return (
    <div>
      <Registro/>
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
