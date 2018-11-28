import React, { Fragment } from 'react';
import Inventory from '../Pedir/Inventory';
import CartTotal from '../Pedir/Pedido';

const CartApp = () =>{
  return (
    <div>
       
        <Inventory/>
        <CartTotal/>
       
    </div>
  );
}


export default CartApp;