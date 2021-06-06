export const saveExperience = (experience) => {
  return {
    type: "SAVE_EXPERIENCE",
    payload: experience,
  };
};
