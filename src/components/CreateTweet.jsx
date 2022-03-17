import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import actions from "../redux/tweetActions";

function CreateTweet() {
  const [newTweet, setNewTweet] = useState("");
  // const dispatch = useDispatch();
  const sessionData = useSelector((state) => state.users[0]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!newTweet) return;
    // llamada
    console.log(sessionData);
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "/tweets",
        { data: { content: newTweet } },
        { headers: { Authorization: `Bearer ${sessionData.token}` } }
      );
      console.log(response.data);
      // dispatch(actions.create(newTweet));
    } catch (error) {
      console.log(error);
    }
    setNewTweet("");
  };

  return (
    <Row className="py-2 bg-black text-light mx-1 border-bottom">
      <Col sm={2}>
        <img src="" alt="Avatar" />
      </Col>
      <Col>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            as="textarea"
            style={{ height: "8rem" }}
            className="bg-black text-light"
            placeholder="What's happening?"
            value={newTweet}
            onChange={(e) => setNewTweet(e.target.value)}
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
