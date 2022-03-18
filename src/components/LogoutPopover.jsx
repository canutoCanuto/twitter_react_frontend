import {
  Button,
  Popover,
  OverlayTrigger,
  Col,
  Image,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";

function LogoutPopover() {
  const sessionData = useSelector((state) => state.users[0]);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">img firstname lastname username</Popover.Header>
      <Popover.Body>Log out @username</Popover.Body>
    </Popover>
  );

  return (
    <>
      <OverlayTrigger trigger="click" placement="top" overlay={popover}>
        <Button variant="black" className="mt-5 text-light">
          <Row>
            <Col>
              <Image
                src={sessionData.avatar}
                alt="Avatar"
                roundedCircle={true}
                className="profile-avatar"
              />
            </Col>
            <Col>firstname lastname username</Col>
            <Col>...</Col>
          </Row>
        </Button>
      </OverlayTrigger>
    </>
  );
}

export default LogoutPopover;
