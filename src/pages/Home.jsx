import React from "react";
import SideBarLeft from "../components/SideBarLeft";
import SideBarRight from "../components/SideBarRight";
import Tweet from "../components/Tweet";
import { Container, Row, Col } from "react-bootstrap";
function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <SideBarLeft />
        </Col>
        <Col>
          <Tweet />
        </Col>
        <Col>
          <SideBarRight />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
