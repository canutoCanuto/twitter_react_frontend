import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import "./AboutUs.css";

function AboutUs() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="about-btn">
        Click Me!
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        scroll="true"
        className="bg-black text-light"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>About This Project</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>
            This website was developed for academic purposes over the span of
            two weeks as part of Hack Academy's 2022 January-April Coding
            Bootcamp. You can sign in to the main page right away using the
            default admin credentials, or even create a new account if you wish.
          </p>
          <h5 className="mb-3">Our Team:</h5>
          <div className="d-flex align-items-center mb-3">
            <div className="flex-shrink-0">
              <img
                src="/img/maximiliano_caballo.jpg"
                alt="Maximiliano Caballo"
                className="team-profile-pic rounded-circle"
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <h6>
                <strong>Maximiliano Caballo</strong>
              </h6>
              <div>
                <a
                  href="https://www.linkedin.com/in/maximiliano-caballo/"
                  className="text-reset"
                >
                  <i className="fa-brands fa-linkedin fa-2xl pe-3 about-linkedn"></i>
                </a>
                <a href="https://github.com/maxiCaballo" className="text-reset">
                  <i className="fa-brands fa-github fa-2xl about-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <div className="flex-shrink-0">
              <img
                src="/img/mauro_montero.jpg"
                alt="Mauro Montero"
                className="team-profile-pic rounded-circle"
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <h6>
                <strong>Mauro Montero</strong>
              </h6>
              <div>
                <a
                  href="https://www.linkedin.com/in/mauromonterotula/"
                  className="text-reset"
                >
                  <i className="fa-brands fa-linkedin fa-2xl pe-3 about-linkedn"></i>
                </a>
                <a
                  href="https://github.com/canutoCanuto"
                  className="text-reset"
                >
                  <i className="fa-brands fa-github fa-2xl about-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <div className="flex-shrink-0">
              <img
                src="/img/sebastian_soria.jpg"
                alt="Sebastián Soria"
                className="team-profile-pic rounded-circle"
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <h6>
                <strong>Sebastián Soria</strong>
              </h6>
              <div>
                <a
                  href="https://www.linkedin.com/in/soriagorgoroso/"
                  className="text-reset"
                >
                  <i className="fa-brands fa-linkedin fa-2xl pe-3 about-linkedn"></i>
                </a>
                <a
                  href="https://github.com/soriagorgoroso"
                  className="text-reset"
                >
                  <i className="fa-brands fa-github fa-2xl about-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <div className="flex-shrink-0">
              <img
                src="/img/pablo_sprengel.png"
                alt="Pablo Sprengel"
                className="team-profile-pic rounded-circle"
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <h6>
                <strong>Pablo Sprengel</strong>
              </h6>
              <div>
                <a
                  href="https://www.linkedin.com/in/pablosprengel/"
                  className="text-reset"
                >
                  <i className="fa-brands fa-linkedin fa-2xl pe-3 about-linkedn"></i>
                </a>
                <a href="https://github.com/PabloSpr" className="text-reset">
                  <i className="fa-brands fa-github fa-2xl about-github"></i>
                </a>
              </div>
            </div>
          </div>
          <h5>Technologies Utilized:</h5>
          <ul>
            <li>React + Redux</li>
            <li>Bootstrap</li>
            <li>Node.js</li>
            <li>MongoDB + Mongoose</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AboutUs;
