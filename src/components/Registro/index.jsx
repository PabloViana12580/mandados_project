import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import uuid from 'uuid-v4';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions'
import './Registro.css';

const required = value => (value ? undefined : 'Obligatorio');

class Registro extends React.Component{
  render() {
    const {
      handleSubmit
    } = this.props;
    return (

      <div className = "titulo">
      <h1>Registrate como comprador </h1>
  
      <div className = "registroBox">
      <div className = "registro">
        <form onSubmit={handleSubmit}>
          <p>Usuario</p>
          <Field
            name="userName"
            type="text"
            label="Username"
            title="Por favor ingresa tu nombre de usuario"
            component="input"
            validate={required}
          />
             <p>Nombre</p>
          <Field
            name="Name"
            type="text"
            label="Name"
            title="Tu nombre"
            component="input"
            validate={required}
          />  
            <p>Apellido</p>
          <Field
            name="LastName"
            type="text"
            label="Lastname"
            title="Tu apellido"
            component="input"
          />
             <p>Email</p>
          <Field
            name="Email"
            type="text"
            label="Email"
            title="Correo electronico"
            component="input"
            validate={required}
          />
             <p>Fecha de Nacimiento</p>
          <Field
            name="Age"
            type="date"
            label="Age"
            title="Edad"
            component="input"
          />
           <p>Contraseña</p>
          <Field
            name="passWord"
            type="text"
            label="Password"
            title="Constraseña"
            component="input"
            validate={required}
          />
          <p>Genero</p>
          <Field
            name="Genre"
            type="text"
            label="Genre"
            title="Genero"
            component="input"
          />
          <p>Numero de Telefono</p>
          <Field
            name="telePhone"
            type="number"
            label="Telephone"
            title="Numero de telefono"
            component="input"
            validate={required}
          />
          <p>Numero de identificacion"</p>
          <Field
            name="idDocument"
            type="number"
            label="ID"
            title="Numero de identificacion"
            component="input"
            validate={required}
          />
        </form>
        
        <button type="submit">Registrarse</button>
        </div>
      </div>
      </div>
    );
  }
}

Registro.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'client',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Registro);