function tweetReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_TWEET":
      return [...state, action.payload];

    case "GET_RANDOM_TWEETS":
      return [...state, ...action.payload];

    case "CLEAR_RANDOM_TWEETS":
      return [];

    case "UPDATE_LIKE":
      return state.map((tweet) => {
        if (tweet.id === action.payload.id) {
          console.log(action.payload);
          return action.payload;
        } else {
          return tweet;
        }
      });

    case "GET_USER_TWEETS":
      return (state = [...action.payload]);
    default:
      return state;
  }
}

export default tweetReducer;
