const actions = {
  create: (newTweet) => {
    return { type: "CREATE_TWEET", payload: newTweet };
  },
};

export default actions;
