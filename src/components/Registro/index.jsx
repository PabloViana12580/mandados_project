import React, {Fragment } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class registro extends React.Component{
  render() {
    const {onSubmit} = this.props;
    return (
      <div>
        <p> Nombre de usuario: </p>
        <input type="text"
        ref = {node => {this.nombre = node;}}/>
        <br/>
        
        <p>Correo</p>
        <input type="text"
        ref = {node => {this.correo = node;}}/> <br/>
        <br/>

        <p>Contraseña</p>
        <input type="text" ref = {node => {this.password = node;}}/> 
        <br/>
        <br/>
        
        <nav>
          <Link to='/'>
            <button onClick={
              () => {
                onSubmit(
                  this.nombre.value,
                  this.password.value,
                  this.correo.value,
                )
              }
            }>Registrarse</button>
          </Link>
        </nav>
        
      </div>
    );
  }
}

export default connect(
  undefined,
  dispatch => ({
    onSubmit(nombre, password, correo){
        console.log(nombre, password, correo);   
    }
  })
)(registro);