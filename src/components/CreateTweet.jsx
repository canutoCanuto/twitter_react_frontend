import { useState } from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import actions from "../redux/tweetActions";
import "./CreateTweet.css";

function CreateTweet() {
  const [newTweetContent, setNewTweetContent] = useState("");
  const dispatch = useDispatch();
  const sessionData = useSelector((state) => state.users[0]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!newTweetContent) return;
    const tweetData = {
      content: newTweetContent,
      likes: [],
      author: {
        username: sessionData.username,
        firstname: sessionData.firstname,
        lastname: sessionData.lastname,
        avatar: sessionData.avatar,
      },
    };
    try {
      await axios.post(process.env.REACT_APP_API_URL + "/tweets", tweetData, {
        headers: { Authorization: `Bearer ${sessionData.token}` },
      });
      dispatch(actions.create(tweetData));
    } catch (error) {
      console.log(error);
    }
    setNewTweetContent("");
  };

  return (
    <Row className="py-2 bg-black text-light mx-1 border-start border-end border-bottom">
      <Col sm={2}>
        <Image
          src={sessionData.avatar}
          alt="Avatar"
          roundedCircle={true}
          className="profile-avatar"
        />
      </Col>
      <Col>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            as="textarea"
            style={{ height: "8rem" }}
            className="bg-black text-light"
            placeholder="What's happening?"
            value={newTweetContent}
            onChange={(e) => setNewTweetContent(e.target.value)}
          />
          <Button
            variant="primary"
            className="rounded-pill fw-bold mt-2"
            type="submit"
          >
            Tweet
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default CreateTweet;
