import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./Tweet.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/tweetActions";

function Tweet({ tweet }) {
  const sessionData = useSelector((state) => state.users[0]);

  const dispatch = useDispatch();

  const submitLike = async () => {
    try {
      console.log("LIKE ", tweet.id);

      const response = await axios({
        url: process.env.REACT_APP_API_URL + `/tweets/${tweet.id}/likes`,
        method: "POST",
        headers: { Authorization: `Bearer ${sessionData.token}` },
      });
      const upDatedTweet = response.data.upDatedTweet;
      dispatch(actions.like(upDatedTweet));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row className="mx-1 tweet bg-black text-light border-bottom">
      <Col xs={2} sm={2} md={2} lg={2} className="mx-0 px-0 pt-3">
        <Image
          src={tweet.author.avatar}
          alt="Avatar"
          roundedCircle={true}
          className="profile-avatar "
        />{" "}
      </Col>
      <Col className="ps-0">
        <div className=" pt-3 ">
          <div className="ms-3">
            <Row className=" text-start d-flex justify-content-between">
              <Col md={11}>
                <span className="fw-bold">
                  <a href="https://twitter.com">
                    {tweet.author.firstname} {tweet.author.lastname}
                  </a>
                </span>
                <span className="text-muted">
                  {" "}
                  @{tweet.author.username} · {/* {tweet.createdAt}  */}
                </span>
              </Col>
              <Col md={1} className="">
                <a href="https://twitter.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="logo-small"
                  >
                    <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                  </svg>
                </a>
              </Col>
            </Row>
            <p className="text-start">{tweet.content}</p>
            <Row className="pb-3 align-items-center text-start">
              <Col>
                <a href="https://twitter.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="logo-normal"
                  >
                    <path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z" />
                  </svg>
                </a>
              </Col>
              <Col>
                <a href="https://twitter.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="logo-large"
                  >
                    <path d="M614.2 334.8C610.5 325.8 601.7 319.1 592 319.1H544V176C544 131.9 508.1 96 464 96h-128c-17.67 0-32 14.31-32 32s14.33 32 32 32h128C472.8 160 480 167.2 480 176v143.1h-48c-9.703 0-18.45 5.844-22.17 14.82s-1.656 19.29 5.203 26.16l80 80.02C499.7 445.7 505.9 448 512 448s12.28-2.344 16.97-7.031l80-80.02C615.8 354.1 617.9 343.8 614.2 334.8zM304 352h-128C167.2 352 160 344.8 160 336V192h48c9.703 0 18.45-5.844 22.17-14.82s1.656-19.29-5.203-26.16l-80-80.02C140.3 66.34 134.1 64 128 64S115.7 66.34 111 71.03l-80 80.02C24.17 157.9 22.11 168.2 25.83 177.2S38.3 192 48 192H96V336C96 380.1 131.9 416 176 416h128c17.67 0 32-14.31 32-32S321.7 352 304 352z" />
                  </svg>
                </a>
              </Col>
              <Col>
                <span onClick={() => submitLike()}>
                  {!tweet.likes.includes(sessionData.id) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="logo-normal"
                    >
                      <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                  )}

                  <i className="ms-1">{tweet.likes.length}</i>
                </span>
              </Col>
              <Col>
                <a href="https://twitter.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="logo-small"
                  >
                    <path d="M384 352v64c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32v-64c0-17.67-14.33-32-32-32s-32 14.33-32 32v64c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96v-64c0-17.67-14.33-32-32-32S384 334.3 384 352zM201.4 9.375l-128 128c-12.51 12.51-12.49 32.76 0 45.25c12.5 12.5 32.75 12.5 45.25 0L192 109.3V320c0 17.69 14.31 32 32 32s32-14.31 32-32V109.3l73.38 73.38c12.5 12.5 32.75 12.5 45.25 0s12.5-32.75 0-45.25l-128-128C234.1-3.125 213.9-3.125 201.4 9.375z" />
                  </svg>
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Tweet;
