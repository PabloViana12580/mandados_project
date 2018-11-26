import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import uuid from 'uuid-v4';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions'

const required = value => (value ? undefined : 'Obligatorio');

class Registro extends React.Component{
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
            component="input"
            validate={required}
          />

          <Field
            name="Name"
            type="text"
            label="Name"
            title="Tu nombre"
            component="input"
            validate={required}
          />  

          <Field
            name="LastName"
            type="text"
            label="Lastname"
            title="Tu apellido"
            component="input"
          />

          <Field
            name="Email"
            type="text"
            label="Email"
            title="Correo electronico"
            component="input"
            validate={required}
          />

          <Field
            name="Age"
            type="text"
            label="Age"
            title="Edad"
            component="input"
          />

          <Field
            name="passWord"
            type="text"
            label="Password"
            title="Constraseña"
            component="input"
            validate={required}
          />

          <Field
            name="Genre"
            type="text"
            label="Genre"
            title="Genero"
            component="input"
          />

          <Field
            name="telePhone"
            type="text"
            label="Telephone"
            title="Numero de telefono"
            component="input"
            validate={required}
          />

          <Field
            name="idDocument"
            type="text"
            label="ID"
            title="Numero de identificacion"
            component="input"
            validate={required}
          />
        </form>
        
        <button type="submit">Registrarse</button>

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


/*

        
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
        
    );
  }
}

export default connect(
  undefined,
  dispatch => ({
    onSubmit(usuario,password,genero,nombre,correo,apellido,dpi,telefono,edad,){
      console.log(usuario,password,genero,nombre,correo,apellido,dpi,telefono,edad,);
      dispatch(actions.addUser(uuid(),usuario,password,genero,nombre,correo,apellido,dpi,telefono,edad,));
    }
  })
)(registro);
*/