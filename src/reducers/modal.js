export const modalHandler = (state = true, action) => {
  switch (action.type) {
  case 'OPENED_MODAL': {
    return true;
  }
  case 'CLOSED_MODAL': {
    return false;
  }
  default: {
    return state;
  }
  }
};

export default modalHandler;
