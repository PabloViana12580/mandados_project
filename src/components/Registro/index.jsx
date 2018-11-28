import React from 'react';
import PropTypes from 'prop-types';
//import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { formValueSelector } from 'redux-form';
import * as clientActions from '../../actions/client';
import CustomImput from '../CustomComponents/Input';
import { Link } from 'react-router-dom';


class DummyRegister extends React.Component{
  render() {
    const {
      onSubmit,
      userName,
      Name,
      LastName,
      Email,
      Age,
      passWord,
      Genre,
      telePhone,
      idDocument,
    } = this.props;
    return (
      <div className = "RegistroInfo">
        <form onSubmit={onSubmit}>
          <Field
            name="userName"
            type="text"
            label="Nombre de usuario"
            component={CustomImput}
          />

          <Field
            name="Name"
            type="text"
            label="Tu nombre"
            component={CustomImput}
          />  

          <Field
            name="LastName"
            type="text"
            label="Tu apellido"
            component={CustomImput}
          />

          <Field
            name="Email"
            type="text"
            label="Correo electronico"
            component={CustomImput}
          />

          <Field
            name="Age"
            type="text"
            label="Edad"
            component={CustomImput}
          />

          <Field
            name="passWord"
            type="text"
            label="Constraseña"
            component={CustomImput}
          />

          <Field
            name="Genre"
            type="text"
            label="Genero"
            component={CustomImput}
          />

          <Field
            name="telePhone"
            type="text"
            label="Numero de telefono"
            component={CustomImput}
          />

          <Field
            name="idDocument"
            type="text"
            label="Numero de identificacion"
            component={CustomImput}
          />
        </form>
        <Link to='/'>
        <button onClick={
          () => {
            onSubmit(
              userName,
              Name,
              LastName,
              Email,
              Age,
              passWord,
              Genre,
              telePhone,
              idDocument,
            )
          }
        } className = "btnRegistrar" type="submit">Registrarse</button>

        </Link>

      </div>
    );
  }
}

DummyRegister.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
let RegisterForm = reduxForm({
  form: 'client',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(DummyRegister);

const selector = formValueSelector('client') // <-- same as form name

const RegisterContainer = connect(
  state =>{
    const userName = selector(state, 'userName')
    const Name =  selector(state, 'Name')
    const LastName = selector(state, 'LastName')
    const Email =  selector(state, 'Email')
    const Age = selector(state, 'Age')
    const passWord = selector(state, 'passWord')
    const Genre = selector(state, 'Genre')
    const telePhone = selector(state,'telePhone')
    const idDocument = selector(state,'idDocument')
    return{
      userName,
      Name,
      LastName,
      Email,
      Age,
      passWord,
      Genre,
      telePhone,
      idDocument,
    }
  },
  dispatch =>({
    onSubmit(userName, Name, LastName, Email, Age, passWord, Genre, telePhone, idDocument) {
      dispatch(clientActions.createClient(
        userName,
        passWord,
        Genre,
        Name,
        Email,
        LastName,
        idDocument,
        telePhone,
        Age,
      ));
    },
  }),
)(RegisterForm);

export default RegisterContainer;


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