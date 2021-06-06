const initState = {
  firstName: "firstName",
  lastName: "lastName",
  email: "example@mail.com",
  phone: "123 456 789",
  address: "Jakarta",
  address2: "jakarta",
  city: "Jakarta Pusat",
  state: "DKI Jakarta",
  zipCode: "40222",
  profSummary: "A fullstack developer with 5 years experience",
  webLinks: "github.com/account",
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case "SAVE_DATA":
      const newData = {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        phone: action.payload.phone,
        address: action.payload.address,
        address2: action.payload.address2,
        city: action.payload.city,
        state: action.payload.state,
        zipCode: action.payload.zipCode,
        profSummary: action.payload.profSummary,
        webLinks: action.payload.webLinks,
        webLinks2: action.payload.webLinks2,
      };
      return newData;
    default:
      return state;
  }
};

export default dataReducer;
