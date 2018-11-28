import * as types from '../types/modal';

export const handleOpen = () => ({
  type: types.OPENED_MODAL,
});

export const handleClose = () => ({
  type: types.CLOSED_MODAL,
});
