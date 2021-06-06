const initState = {
  school: "schoolName",
  degree: "degree",
  from: "from",
  to: "to",
};

const educationReducer = (state = initState, action) => {
  switch (action.type) {
    case "SAVE_EDUCATION":
      const newEducation = {
        ...state,
        school: action.payload.school,
        degree: action.payload.degree,
        from: action.payload.from,
        to: action.payload.to,
      };
      return newEducation;
    default:
      return state;
  }
};

export default educationReducer;
