const initState = {
    profpic: ""
  };
  
  const profpicReducer = (state = initState, action) => {
    switch (action.type) {
      case "SAVE_PROFPIC":
        const newData = {
          ...state,
          profpic: action.payload.profpic,
        };
        return newData;
      default:
        return state;
    }
  };
  
  export default profpicReducer;
  