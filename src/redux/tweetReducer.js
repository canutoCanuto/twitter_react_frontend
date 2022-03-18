function tweetReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_TWEET":
      return [...state, action.payload];

    case "GET_RANDOM_TWEETS":
      return [...state, ...action.payload];

    case "CLEAR_RANDOM_TWEETS":
      return (state = []);
    case "GET_USER_TWEETS":
      return (state = [...action.payload]);
    default:
      return state;
  }
}

export default tweetReducer;
