import {
  Button,
  Popover,
  OverlayTrigger,
  Col,
  Image,
  Row,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import actions from "../redux/userActions";
import axios from "axios";
function LogoutPopover() {
  const sessionData = useSelector((state) => state.users[0]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async (ev) => {
    ev.preventDefault();
    try {
      console.log(sessionData);
      const response = await axios({
        url: process.env.REACT_APP_API_URL + `/users/logout`,
        method: "POST",
        headers: { Authorization: `Bearer ${sessionData.token}` },
      });
      dispatch(actions.logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header
        as="h3"
        className="bg-black text-light d-flex align-items-center"
      >
        <Image
          src={sessionData.avatar}
          alt="Avatar"
          roundedCircle={true}
          className="profile-avatar imagenLogOut"
        />
        <div className="ps-2">
          {sessionData.firstname} {sessionData.lastname}{" "}
          <span className="text-muted">@{sessionData.username}</span>
        </div>
      </Popover.Header>
      <Link to="/logout" onClick={handleLogout}>
        <Popover.Body className=" bg-black text-light">
          Log out @{sessionData.username}
        </Popover.Body>
      </Link>
    </Popover>
  );

  return (
    <>
      <OverlayTrigger trigger="click" placement="top" overlay={popover}>
        <Button
          variant="black"
          className="botonModal mt-5 text-light rounded-pill d-flex align-items-center"
        >
          <Image
            src={sessionData.avatar}
            alt="Avatar"
            roundedCircle={true}
            className="profile-avatar imagenLogOut"
          />

          <div className="ps-2">
            {sessionData.firstname} {sessionData.lastname}
            <span className="text-muted"> @{sessionData.username}</span>
          </div>
          <div className="ps-2">...</div>
        </Button>
      </OverlayTrigger>
    </>
  );
}

export default LogoutPopover;
