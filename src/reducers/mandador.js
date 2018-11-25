const selectMandador = (state = [], action) => {
    switch (action.type) {
      case types.MANDADERO_SELECTED: {
        const { id } = action.payload;
  
        return [
          ...state,
          id,
        ];
      }
      default: return state;
    }
  };
  