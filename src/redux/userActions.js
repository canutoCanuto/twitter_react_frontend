const actions = {
  login: (sessionData) => {
    return { type: "LOGIN", payload: sessionData };
  },
};

export default actions;
