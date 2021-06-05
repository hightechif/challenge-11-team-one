export const saveSkill = (skill) => {
  return {
    type: "SAVE_SKILL",
    payload: skill,
  };
};
