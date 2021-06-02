const initState = {
  firstName: "",
  lastName: "",
  email: "",
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case "SAVE_DATA":
      const newData = {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
      };
      return newData;
    default:
      return state;
  }
};

export default dataReducer;
