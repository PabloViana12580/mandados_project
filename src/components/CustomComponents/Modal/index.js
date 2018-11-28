import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import * as actions from '../../../actions/modal';
import modalHandler from '../../../reducers/modal';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },

  botno:{
    backgroundColor: theme.palette.background.paper,
  }
});

const SimpleModal = ({
  classes,
  handleBehaviour,
  modalStatus,
}) => (
  <div>
    <Modal
      open={modalStatus}
    >
      <div style={getModalStyle()} className={classes.paper}>
        <h1> Bienvenido a ¡Que Manda! </h1>
        <p> Esta es una pagina en donde puedes pedir mandados
         sin que tu tengas que ir a la tienda. Solo escoge
        un conductor que te parezca adecuado para el tamaño
        de tu pedido y estara en camino! </p>
        
        <button className = {classes.botno} onClick={handleBehaviour} color="primary" >
          Empecemos!
        </button>
        <SimpleModalWrapped />
      </div>
    </Modal>
  </div>
);

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
  handleBehaviour: PropTypes.func,
  modalStatus: PropTypes.bool,
};

const SimpleModalWrapped = withStyles(styles)(SimpleModal);

const ModalContainer = connect(
  (state) => (
  {
    modalStatus: state.modalReducer,
  }),
  dispatch => ({
    handleBehaviour() {
      dispatch(actions.handleBehaviour());
    },
  }),
)(SimpleModalWrapped);

// We need an intermediary variable for handling the recursive nesting.

export default ModalContainer;
