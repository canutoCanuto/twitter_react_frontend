const actions = {
  create: (tweetData) => {
    return { type: "CREATE_TWEET", payload: tweetData };
  },
  randomList: (tweetList) => {
    return { type: "GET_RANDOM_TWEETS", payload: tweetList };
  },
  clearRandomList: () => {
    return { type: "CLEAR_RANDOM_TWEETS" };
  },
};

export default actions;
