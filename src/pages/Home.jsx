import React from "react";
import SideBarLeft from "../components/SideBarLeft";
import SideBarRight from "../components/SideBarRight";
import Tweet from "../components/Tweet";
import { Container, Row, Col } from "react-bootstrap";
function Home() {
  return (
    <Container>
      <Row>
        <Col xs={2} sm={2} md={3} lg={2}>
          <SideBarLeft />
        </Col>
        <Col xs={10} sm={10} md={9} lg={6}>
          <Tweet />
        </Col>
        <Col lg={4}>
          <SideBarRight />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
