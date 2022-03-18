function userReducer(state = [], action) {
  switch (action.type) {
    case "LOGIN":
      return [...state, action.payload];

    case "LOGOUT":
      return [];

    default:
      return state;
  }
}

export default userReducer;
