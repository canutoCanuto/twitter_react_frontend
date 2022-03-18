import "./UserForm.css";
import axios from "axios";
import { useState } from "react";

import {
  Modal,
  Row,
  Col,
  Container,
  Button,
  FloatingLabel,
  Form,
} from "react-bootstrap";

function UserForm(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [exitoRegistro, setExitoRegistro] = useState("");

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
      setExitoRegistro("Registro exitoso");
      setName("");
      setSurname("");
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button className="btn btn-primary " onClick={() => handleShow(true)}>
        Registrar
      </Button>

      <Modal
        show={show}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        className="contenedorModal"
      >
        <Container className="backmodal">
          <Row className="space d-flex bd-highlight">
            <Col className="p-4 w-100 bd-highlight ">
              <span className="tituloCrear">Crea tu cuenta</span>
            </Col>
            <Col className="p-2 flex-shrink-1 bd-highlight text-end p-4">
              <span>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="logobox">
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </svg>
              </span>
            </Col>
          </Row>
        </Container>
        <Modal.Body className="show-grid backmodal">
          <Container>
            <Row>
              <Col xs={12} md={8} className="form-floating mb-4 labeltext">
                <FloatingLabel
                  className="m-3"
                  controlId="Nombre"
                  label="Nombre"
                >
                  <Form.Control
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FloatingLabel>
                <FloatingLabel
                  className="m-3"
                  controlId="Apellido"
                  label="Apellido"
                >
                  <Form.Control
                    type="text"
                    placeholder="Apellido"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </FloatingLabel>
                <FloatingLabel
                  className="m-3"
                  controlId="Username"
                  label="Username"
                >
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FloatingLabel>
                <FloatingLabel className="m-3" controlId="Email" label="Email">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FloatingLabel>
                <FloatingLabel
                  className="m-3"
                  controlId="Password"
                  label="Password"
                >
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <h5 className="text-white">Fecha de nacimiento</h5>
              <p className="text-secondary">
                Esta informacion no sera publica. Confirma tu propia edadm
                incluso si esta cuenta es paraq una empresa, una mascota y otra
                cosa.
              </p>{" "}
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <FloatingLabel
                  className=""
                  controlId="floatingSelectGrid"
                  label="Dia"
                >
                  <Form.Select aria-label="Floating label select example">
                    <option>-</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col xs={6} md={4}>
                <FloatingLabel
                  className=""
                  controlId="floatingSelectGrid"
                  label="Mes"
                >
                  <Form.Select aria-label="Floating label select example">
                    <option>-</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>{" "}
              </Col>
              <Col xs={6} md={4}>
                <FloatingLabel
                  className=""
                  controlId="floatingSelectGrid"
                  label="Año"
                >
                  <Form.Select aria-label="Floating label select example">
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
        <Modal.Footer>
          <Button onClick={handleRegister}>Registrar</Button>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
        {exitoRegistro ? (
          <p className="bg-success text-center text-light p-2">
            Registro exitoso!
          </p>
        ) : (
          <p className="bg-danger text-center text-light p-2">Error</p>
        )}
      </Modal>
    </>
  );
}

export default UserForm;
