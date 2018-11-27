import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import uuid from 'uuid-v4';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { formValueSelector } from 'redux-form';
import * as clientActions from '../../actions/client';
import CustomImput from '../CustomComponents/Input';


class DummyRegister extends React.Component{
  render() {
    const {
      onSubmit
    } = this.props;
    return (
      <div className = "RegistroInfo">
        <form onSubmit={onSubmit}>
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
            type="text"
            label="Email"
            title="Correo electronico"
            component={CustomImput}
          />

          <Field
            name="Age"
            type="text"
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
            type="text"
            label="Telephone"
            title="Numero de telefono"
            component={CustomImput}
          />

          <Field
            name="idDocument"
            type="text"
            label="ID"
            title="Numero de identificacion"
            component={CustomImput}
          />
        </form>
        
        <button onClick={
          () => {
            onSubmit(
              this.userName,
            )
          }
        } className = "btnRegistrar" type="submit">Registrarse</button>

      </div>
    );
  }
}

DummyRegister.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const RegisterContainer = connect(
  undefined,
  dispatch =>({
    onSubmit(userName) {
      dispatch(clientActions.createClient(
        userName,
      ));
    },
  }),
)(DummyRegister);

export default reduxForm({
  form: 'client',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(RegisterContainer);


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