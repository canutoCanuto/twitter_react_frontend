/* eslint-disable react-hooks/exhaustive-deps */
import SideBarLeft from "../components/SideBarLeft";
import SideBarRight from "../components/SideBarRight";
import Tweet from "../components/Tweet";
import UserInfo from "../components/UserInfo";
import actions from "../redux/tweetActions";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./User.css";
import { useParams } from "react-router-dom";

function User() {
  //const [, , path] = window.location.pathname.split("/");
  const tweetList = useSelector((state) => state.tweets);
  const token = useSelector((state) => state.users[0].token);

  const [postUser, setPostUser] = useState({});
  const [joinedDate, setJoinedDate] = useState("");

  const dispatch = useDispatch();
  const params = useParams();

  const getProfileTweets = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API_URL + `/users/${params.username}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const { postUser, tweets, formattedDate } = data;
      dispatch(actions.getUserTweets(tweets));

      setPostUser({ ...postUser });
      setJoinedDate(formattedDate);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(actions.clearRandomList());
    getProfileTweets();
  }, [params.username]);

  return (
    <Container>
      <Row>
        <Col xs={2} sm={2} md={3} lg={3}>
          <SideBarLeft className="" />
        </Col>
        <Col
          xs={10}
          sm={10}
          md={9}
          lg={5}
          className="contenedorProfile profile-info-borders"
        >
          <UserInfo postUser={postUser} joinedDate={joinedDate} />
          {tweetList.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </Col>
        <Col lg={4}>
          <SideBarRight />
        </Col>
      </Row>
    </Container>
  );
}

export default User;
