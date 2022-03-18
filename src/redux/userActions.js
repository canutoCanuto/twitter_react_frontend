const actions = {
  login: (sessionData) => {
    return { type: "LOGIN", payload: sessionData };
  },
  logout: () => {
    return { type: "LOGOUT" };
  },
};

export default actions;
