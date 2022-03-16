function tweetReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_TWEET":
      return [...state, [action.payload]];

    default:
      return state;
  }
}

export default tweetReducer;
