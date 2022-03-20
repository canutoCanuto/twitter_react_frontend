import "./TweetList.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import actions from "../redux/tweetActions";
import { useEffect, useState } from "react";
import Tweet from "./Tweet";

function TweetList() {
  const tweetList = useSelector((state) => state.tweets);
  const [privateStateTweets, setPrivateStateTweets] = useState(tweetList);
  const token = useSelector((state) => state.users[0].token);
  const dispatch = useDispatch();

  const getTweets = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/tweets",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(actions.randomList(response.data.last100Tweets));
      setPrivateStateTweets([...tweetList]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(actions.clearRandomList());
    getTweets();
  }, [privateStateTweets]);

  return privateStateTweets
    .map((tweet) => <Tweet tweet={tweet} key={tweet.id} />)
    .reverse();
}

export default TweetList;
