import Tweet from "./Tweet";
import { useSelector } from "react-redux";

function TweetList() {
  const tweetList = useSelector((state) => state);

  return tweetList.map((tweet) => <Tweet />);
}

export default TweetList;
