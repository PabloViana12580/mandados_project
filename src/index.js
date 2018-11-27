import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';
import configureStore from './configureStore';
import './index.css';
import Conductores from './components/Conductores';
import Login from './components/Login';

import CartApp from './components/CartApp'
import Registrar from './components/Registro/registroContainer';
import RegistrarConductor from './components/registroConductor';


const store = configureStore();

ReactDOM.render(
  <Provider store = {store}>
    <Router>
    	<div>
	        <Route exact path="/conductores" component={Conductores} />
	        <Route exact path="/" component={Login}/>
	        <Route exact path="/registro" component= {Registrar}/>
	        <Route exact path="/registroC" component = {RegistrarConductor}/>
					<Route exact path="/pedido" component = {CartApp}/>
				
   		</div>
    </Router>

  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
