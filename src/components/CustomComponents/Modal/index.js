import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import * as actions from '../../../actions/modal';


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
});

const SimpleModal = ({
  classes,
  handleClose,
  modalStatus,
}) => (
  <div>
    <Modal
      open={modalStatus}
    >
      <div style={getModalStyle()} className={classes.paper}>
        <button onClick={handleClose} color="primary" >
          
        </button>
        <SimpleModalWrapped />
      </div>
    </Modal>
  </div>
);

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  modalStatus: PropTypes.bool.isRequired,
};

const SimpleModalWrapped = withStyles(styles)(SimpleModal);

const ModalContainer = connect(
  state => ({
    modalStatus: state.app.modal,
  }),
  dispatch => ({
    handleClose() {
      dispatch(actions.handleClose());
    },
  }),
  undefined,
)(SimpleModalWrapped);

// We need an intermediary variable for handling the recursive nesting.

export default ModalContainer;
