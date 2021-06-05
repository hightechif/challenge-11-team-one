const initState = {
  skills: ["javaScript"],
};

const skillReducer = (state = initState, action) => {
  switch (action.type) {
    case "SAVE_SKILL":
      const newSkill = {
        ...state,
        skills: action.payload.skills,
      };
      return newSkill;
    default:
      return state;
  }
};

export default skillReducer;
