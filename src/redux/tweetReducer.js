function tweetReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_TWEET":
      return [action.payload, ...state];

    case "GET_RANDOM_TWEETS":
      return [...state, ...action.payload];

    case "CLEAR_RANDOM_TWEETS":
      return [];

    case "UPDATE_LIKE":
      return state.map((tweet) => {
        if (tweet.id === action.payload.id) {
          return action.payload;
        } else {
          return tweet;
        }
      });

    case "GET_USER_TWEETS":
      return [...state, ...action.payload];

    case "DELETE_TWEET":
      return state.filter((tweet) => tweet.id !== action.payload.id);

    default:
      return state;
  }
}

export default tweetReducer;
