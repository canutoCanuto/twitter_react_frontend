function userReducer(state = [], action) {
  switch (action.type) {
    case "LOGIN":
      return [
        ...state,

        {
          id: "",
          username: "",
          token: "",
        },
      ];

    default:
      return state;
  }
}

export default userReducer;
