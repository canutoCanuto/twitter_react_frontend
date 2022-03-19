function userReducer(state = [], action) {
  switch (action.type) {
    case "LOGIN":
      return [...state, action.payload];

    case "LOGOUT":
      return [];

    case "FOLLOW":
      return state.followings.map();

    default:
      return state;
  }
}

export default userReducer;
