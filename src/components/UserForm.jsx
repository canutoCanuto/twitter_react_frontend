import "./UserForm.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import actions from "../redux/userActions";
import { useDispatch } from "react-redux";

import "react-toastify/dist/ReactToastify.css";

import {
  Modal,
  Row,
  Col,
  Container,
  Button,
  FloatingLabel,
  Form,
  CloseButton,
} from "react-bootstrap";

function UserForm(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRegister = async () => {
    try {
      await axios.post(process.env.REACT_APP_API_URL + "/users", {
        firstname: name,
        lastname: surname,
        username: username,
        email: email,
        password: password,
      });
      toast.success("Registered successfully!", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
      try {
        const response = await axios.post(
          process.env.REACT_APP_API_URL + "/users/login",
          {
            username: username,
            email: email,
            password: password,
          }
        );
        dispatch(actions.login(response.data));
        navigate("/home");
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      toast.info(" Error, some fields need to be completed.", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <Link
        className="d-flex justify-content-center btn applephone text-align-center px-3 fw-bold"
        onClick={() => handleShow(true)}
        to="#"
      >
        Sign up with email
      </Link>

      <Modal
        show={show}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        className="contenedorModal"
      >
        <Container className="backmodal">
          <Row className="space d-flex bd-highlight">
            <Row className="justify-content-end">
              <Col className="m-3 ">
                <CloseButton onClick={handleClose} className="text-light ">
                  X
                </CloseButton>
              </Col>
              <Col></Col>
              <Col></Col>
              <Col>
                <span className="">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="logobox m-3  "
                  >
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                  </svg>
                </span>
              </Col>
            </Row>
            <Row className="p-4 w-100 bd-highlight ">
              <h1 className="tituloCrear">Create your account</h1>
            </Row>
          </Row>
        </Container>
        <Modal.Body className="show-grid backmodal">
          <Container>
            <Row>
              <Col xs={12} md={8} className="form-floating mb-4 labeltext">
                <FloatingLabel
                  className="m-3 text-secondary"
                  controlId="Nombre"
                  label="First Name"
                >
                  <Form.Control
                    className="fondo"
                    type="text"
                    placeholder="First Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FloatingLabel>
                <FloatingLabel
                  className="m-3 text-secondary"
                  controlId="Apellido"
                  label="LastName"
                >
                  <Form.Control
                    className="fondo"
                    type="text"
                    placeholder="Last Name"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </FloatingLabel>
                <FloatingLabel
                  className="m-3 text-secondary"
                  controlId="Username"
                  label="Username"
                >
                  <Form.Control
                    className="fondo"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FloatingLabel>
                <FloatingLabel
                  className="m-3 text-secondary"
                  controlId="Email"
                  label="Email"
                >
                  <Form.Control
                    className="fondo"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FloatingLabel>
                <FloatingLabel
                  className="m-3 text-secondary"
                  controlId="Password"
                  label="Password"
                >
                  <Form.Control
                    className="fondo"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <h5 className="text-white">Date of birth</h5>
              <p className="text-secondary">
                This information will not be public. Confirm your own age even
                if this account is for a company, a pet and another thing.
              </p>{" "}
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <FloatingLabel
                  className="text-secondary"
                  controlId="floatingSelectGrid"
                  label="Dia"
                >
                  <Form.Select
                    className="fondo "
                    aria-label="Floating label select example"
                  >
                    <option>-</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col xs={6} md={4}>
                <FloatingLabel
                  className="text-secondary"
                  controlId="floatingSelectGrid"
                  label="Mes"
                >
                  <Form.Select
                    className="fondo"
                    aria-label="Floating label select example"
                  >
                    <option>-</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>{" "}
              </Col>
              <Col xs={6} md={4}>
                <FloatingLabel
                  className="text-secondary"
                  controlId="floatingSelectGrid"
                  label="Año"
                >
                  <Form.Select
                    className="fondo"
                    aria-label="Floating label select example"
                  >
                    <option>-</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="backmodal">
          <Button onClick={handleRegister}>Sign up</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserForm;
