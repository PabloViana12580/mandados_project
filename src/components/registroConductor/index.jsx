import React from 'react';
import PropTypes from 'prop-types';
//import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import CustomImput from '../CustomComponents/Input';
import './Registro.css'
import { Link } from 'react-router-dom';

class RegistroConductor extends React.Component{
  render() {
    const {
      handleSubmit
    } = this.props;
    return (
      <div className = "RegistroInfo">
        <form onSubmit={handleSubmit}>
          <Field
            name="userName"
            type="text"
            label="Username"
            title="Por favor ingresa tu nombre de usuario"
            component={CustomImput}
          />

          <Field
            name="Name"
            type="text"
            label="Name"
            title="Tu nombre"
            component={CustomImput}
          />  

          <Field
            name="LastName"
            type="text"
            label="Lastname"
            title="Tu apellido"
            component={CustomImput}
          />

          <Field
            name="Email"
            type="email"
            label="Email"
            title="Correo electronico"
            component={CustomImput}
          />

          <Field
            name="Age"
            type="date"
            label="Age"
            title="Edad"
            component={CustomImput}
          />

          <Field
            name="passWord"
            type="text"
            label="Password"
            title="Constraseña"
            component={CustomImput}
          />

          <Field
            name="Genre"
            type="text"
            label="Genre"
            title="Genero"
            component={CustomImput}
          />

          <Field
            name="telePhone"
            type="number"
            label="Telephone"
            title="Numero de telefono"
            component={CustomImput}
          />

          <Field
            name="idDocument"
            type="numer"
            label="ID"
            title="Numero de identificacion"
            component={CustomImput}
          />

          <Field
            name="used_to"
            type="text"
            label="Acostumbrado"
            title="Comodo con"
            component={CustomImput}
          />

          
          <Field
            name="desciption"
            type="text"
            label="Descripcion"
            title="Descripcion"
            component={CustomImput}
          />
        </form>
        <Link to='/'>
        <button className = "btnRegistrar"type="submit">Registrarse</button>
        </Link>
      </div>
    );
  }
}

RegistroConductor.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};



export default reduxForm({
  form: 'mandadero',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(RegistroConductor);
