import React from "react";
import "./Welcome.css";
import { Row, Col } from "react-bootstrap";
import Login from "../components/Login";
function Welcome() {
  return (
    <>
      <Row>
        <Col lg={6}>
          <div className=" backgroundWelcome">
            <img
              alt=""
              draggable="false"
              src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png"
              className=""
            />

            <svg
              className="absolutimg "
              xmlns="http://www.w3.org/2000/svg"
              width="500px"
              height="500px"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </div>
        </Col>

        <Col lg={6} className="containerRegister containerright">
          <svg
            className="smalllogo"
            xmlns="http://www.w3.org/2000/svg"
            width="55px"
            height="55px"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
          <div className="title1">
            <span>Lo que esta pasando ahora</span>
          </div>
          <div className=" title2 ">
            <span>Únete a Twitter hoy mismo.</span>
          </div>
          <div className=" d-flex flex-column mb-3 d-grid gap-1 col-6">
            <a href="#" className="applebutton mb-2">
              Registrarse con Google
            </a>
            <a href="#" className="applebutton">
              Registrarse con Appel
            </a>
            <div className="d-flex justify-content-center  separador">
              <div>------------------------</div>
              <div>o</div>
              <div>------------------------</div>
            </div>
            <a href="#" className="applephone">
              Registrate con el numero de telefon...
            </a>
            <div className="servicios">
              Al registrarte, aceptas los <a href="">Términos de servicio</a> y
              la <a href="">Política de privacidad,</a>
              incluida la política de
              <a href=""> Uso de Cookies.</a>
            </div>
            <div className="title3">
              <span>¿Ya tienes una cuenta?</span>
            </div>
            <Login />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Welcome;
