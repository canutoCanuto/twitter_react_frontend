const actions = {
  create: (newTweet) => {
    return { type: "CREATE_TWEET", payload: newTweet };
  },
  randomList: (tweetList) => {
    return { type: "GET_RANDOM_TWEETS", payload: tweetList };
  },
  clearRandomList: () => {
    return { type: "CLEAR_RANDOM_TWEETS" };
  },
};

export default actions;
