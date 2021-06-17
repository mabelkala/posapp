const itemsReducer = (state, action) => {
  switch (action.type) {
    case "Get_data":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default itemsReducer;
