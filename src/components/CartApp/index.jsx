import React, { Fragment } from 'react';
import Inventory from '../Pedir/Inventory';
import CartTotal from '../Pedir/Pedido';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
import data from '../Conductores/data/mandaderos.json'
import { formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import * as clientActions from '../../actions/client';


const CartApp = () =>{
  return (
    <div>
        <Inventory/>
        <CartTotal/>
    </div>
  );
}


export default CartApp;
