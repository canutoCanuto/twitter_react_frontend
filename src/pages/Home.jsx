import React from "react";
import SideBarLeft from "../components/SideBarLeft";
import SideBarRight from "../components/SideBarRight";
import TweetList from "../components/TweetList";
import CreateTweet from "../components/CreateTweet";
import { Container, Row, Col } from "react-bootstrap";
function Home() {
  return (
    <Container>
      <Row>
        <Col xs={2} sm={2} md={3} lg={3}>
          <SideBarLeft />
        </Col>
        <Col xs={10} sm={10} md={9} lg={5}>
          <CreateTweet />
          <TweetList />
        </Col>
        <Col lg={4}>
          <SideBarRight />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
