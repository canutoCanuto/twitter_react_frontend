function tweetReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_TWEET":
      return [
        ...state,

        {
          id: state.length + 1,
          content: action.payload,
          likes: [],
        },
      ];

    case "GET_RANDOM_TWEETS":
      return [...state, ...action.payload];

    case "CLEAR_RANDOM_TWEETS":
      return (state = []);

    default:
      return state;
  }
}

export default tweetReducer;
