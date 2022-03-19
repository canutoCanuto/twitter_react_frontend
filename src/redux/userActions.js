const actions = {
  login: (sessionData) => {
    return { type: "LOGIN", payload: sessionData };
  },
  logout: () => {
    return { type: "LOGOUT" };
  },
  follow: (user) => {
    return { type: "FOLLOW", payload: user };
  },
};

export default actions;
