export const modalHandler = (state = true, action) => {
  
  switch (action.type) {
  case 'MODAL_TOGGLE': {
    return !state;
  }
  default: {
    return state;
  }
  }
};

export default modalHandler;
