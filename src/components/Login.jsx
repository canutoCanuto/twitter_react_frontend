import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import actions from "../redux/userActions";
import { useNavigate } from "react-router-dom";

function Login() {
  const [show, setShow] = useState(true);
  const [data, setData] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "/users/login",
        {
          username: data,
          email: data,
          password: password,
        }
      );
      dispatch(actions.login(response.data));
      navigate("/home");
    } catch (error) {
      setErrorMessage("Error!");
      console.log(error);
    }
  };
  return (
    <div>
      <Button
        // variant="primary"
        className="btn d-flex justify-content-center botonlogin text-primary fw-bold px-3"
        onClick={handleShow}
      >
        Sign in
      </Button>
      <Modal
        id="staticBackdrop"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        show={show}
        onHide={handleClose}
      >
        <Modal.Body className="modal-content bg-black text-light p-3 d-inline-block">
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
            <h2
              className="modal-title text-white fw-bold pb-4"
              id="staticBackdropLabel"
            >
              Sign in to Twitter
            </h2>
            <Form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <Form.Control
                  name="username"
                  type="text"
                  className="form-control bg-dark text-white"
                  id="username"
                  placeholder="Username or Email"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
                <Form.Label className="text-secondary" htmlFor="floatingInput">
                  Username or email
                </Form.Label>
              </div>
              <div className="form-floating">
                <Form.Control
                  name="password"
                  type="password"
                  className="form-control bg-dark text-white"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Label
                  className="text-secondary"
                  htmlFor="floatingPassword"
                >
                  Password
                </Form.Label>
              </div>

              <div className="row g-2">
                <div className="d-grid gap-2 py-5">
                  <button
                    type="submit"
                    className="btn btn-light fw-bold rounded-pill text-black"
                  >
                    Next
                  </button>
                </div>
              </div>
            </Form>

            <div className="card-footer text-muted">
              Don't have an account? <a href="/checkin">Sign up</a>
            </div>
          </div>
          <p className="text-danger fs-5 w-100 text-center">{errorMessage}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Login;
