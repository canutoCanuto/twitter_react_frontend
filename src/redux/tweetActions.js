const actions = {
  create: (newTweet) => {
    return { type: "CREATE_TWEET", payload: newTweet };
  },
  randomlist: (tweetList) => {
    return { type: "GET_RANDOM_TWEETS", payload: tweetList };
  },
};

export default actions;
