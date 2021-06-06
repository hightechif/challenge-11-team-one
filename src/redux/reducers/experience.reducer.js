const initState = {
  company: "companyName",
  position: "position",
  description: "description",
  from: "from",
  to: "to",
};

const experienceReducer = (state = initState, action) => {
  switch (action.type) {
    case "SAVE_EXPERIENCE":
      const newExperience = {
        ...state,
        company: action.payload.company,
        position: action.payload.position,
        description: action.payload.description,
        from: action.payload.from,
        to: action.payload.to,
      };
      return newExperience;
    default:
      return state;
  }
};

export default experienceReducer;
