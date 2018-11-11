import React, {Fragment } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import uuid from 'uuid-v4';
import * as actions from '../../actions'

class registro extends React.Component{
  render() {
    const {onSubmit} = this.props;
    return (
      <div>
        <p> Nombre de usuario: </p>
        <input type="text"
        ref = {node => {this.usuario = node;}}/>
        <br/>

        <p> Nombre: </p>
        <input type="text"
        ref = {node => {this.nombre = node;}}/>
        
        <p> Apellido: </p>
        <input type="text"
        ref = {node => {this.apellido = node;}}/>
        <br/>
        
        <p>Correo</p>
        <input type="text"
        ref = {node => {this.correo = node;}}/> <br/>
        <br/>

        <p> Genero: </p>
        <input type="text"
        ref = {node => {this.genero = node;}}/>
        <br/>

         <p> Telefono: </p>
        <input type="text"
        ref = {node => {this.telefono = node;}}/>
        <br/>


        <p> DPI: </p>
        <input type="text"
        ref = {node => {this.dpi = node;}}/>
        <br/>

        
        <p> Edad: </p>
        <input type="text"
        ref = {node => {this.edad = node;}}/>
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
                  this.apellido.value,
                  this.genero.value,
                  this.dpi.value,
                  this.telefono.value,
                  this.usuario.value,
                  this.edad.value
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
    onSubmit(nombre, password, correo, usuario, apellido,dpi){
      console.log(nombre, password, correo);
      dispatch(actions.addUser(uuid(), nombre, password, correo, usuario, apellido, dpi));
    }
  })
)(registro);