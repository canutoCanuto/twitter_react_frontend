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
        onHide={handleClose}
      >
        <Modal.Body className="show-grid bg-black text-light backmodal">
          <div className="d-flex justify-content-between modal-body">
            <div>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24 "
              className="logobox"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </div>
          <div className="px-2 pt-2">
            <h2 className="modal-title text-white fw-bold pb-4">
              Create your account
            </h2>

            <div className="form-floating mb-3 labeltext">
              <FloatingLabel
                className="m-3 text-secondary"
                controlId="Nombre"
                label="First Name"
              >
                <Form.Control
                  className="bg-dark text-white"
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
                  className="bg-dark text-white"
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
                  className="bg-dark text-white"
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
                  className="bg-dark text-white"
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
                  className="bg-dark text-white"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FloatingLabel>
            </div>
            <div className="row g-2">
              <div className="d-grid gap-2 py-5">
                <Button
                  onClick={handleRegister}
                  className="btn btn-light fw-bold rounded-pill text-black"
                >
                  Sign up
                </Button>
              </div>
            </div>
          </div>
          {/* <Row>
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
            </Row> */}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UserForm;
