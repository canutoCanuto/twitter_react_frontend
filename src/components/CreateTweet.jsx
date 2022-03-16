import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import actions from "../redux/tweetActions";

function CreateTweet() {
  const [newTweet, setNewTweet] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!newTweet) return;
    dispatch(actions.create(newTweet));
    setNewTweet("");
  };

  return (
    <Row className="py-2 bg-black text-light mx-1">
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
