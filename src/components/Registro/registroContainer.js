import React from 'react';
import ReactDOM from 'react-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import Register from './index';
import * as clientActions from '../../actions/client';

const DummyRegister = ({
	finishClient,
}) => {
	return(
			<div>
				<Register onSubmit={finishClient} />
			</div>
	);
};

DummyRegister.propTypes = {
	finishClient: PropTypes.func.isRequired,
}

const RegisterContainer = connect(
  state => ({
    userName: formValueSelector('client')(state, 'userName'),
    Name: formValueSelector('client')(state, 'Name'),
    LastName: formValueSelector('client')(state, 'LastName'),
    Email: formValueSelector('client')(state, 'Email'),
    Age: formValueSelector('client')(state, 'Age'),
    passWord: formValueSelector('client')(state, 'passWord'),
    Genre: formValueSelector('client')(state, 'Genre'),
    telePhone: formValueSelector('client')(state, 'telePhone'),
    idDocument: formValueSelector('client')(state, 'idDocument'),
  }),
  dispatch =>({
    onClick(state) {
      dispatch(clientActions.createClient(
        state.userName,
        state.Name,
        state.LastName,
        state.Email,
        state.Age,
        state.passWord,
        state.Genre,
        state.telePhone,
        state.idDocument,
      ));
    },
  }),
)(DummyRegister);

export default RegisterContainer;