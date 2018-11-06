import React, { Fragment } from 'react';
import Inventory from '../Pedir/Inventory';
import CartTotal from '../Pedir/Pedido';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const CartApp = () => (
  <Fragment>
        <Route exact path="/holi" component={Home} />
        <Route exact path="/" component={Login}/>
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
  
    </div>
  );
}



export default CartApp;
