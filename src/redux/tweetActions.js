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
  like: (tweet) => {
    return { type: "UPDATE_LIKE", payload: tweet };
  },

  getUserTweets: (tweetsData) => {
    return { type: "GET_USER_TWEETS", payload: tweetsData };
  },
};

export default actions;
