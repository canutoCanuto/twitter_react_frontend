import "./TweetList.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import actions from "../redux/tweetActions";
import { useEffect } from "react";
import Tweet from "./Tweet";

function TweetList() {
  const tweetList = useSelector((state) => state.tweets);
  const token = useSelector((state) => state.users[0].token);
  const dispatch = useDispatch();

  const getTweets = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/tweets",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(actions.randomList(response.data.last100Tweets));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(actions.clearRandomList());
    getTweets();
  }, []);

  return tweetList
    .map((tweet) => <Tweet tweet={tweet} key={tweet._id} />)
    .reverse();
}

export default TweetList;
