import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "./UserInfo.css";

function UserInfo({ postUser, joinedDate }) {
  const tweetList = useSelector((state) => state.tweets);
  const token = useSelector((state) => state.users[0].token);
  const user = useSelector((state) => state.users[0]);

  const [followButton, setFollowButton] = useState("Follow");

  const params = useParams();

  const handleFollow = async () => {
    try {
      setFollowButton((prev) => {
        if (prev === "Unfollow") {
          return "Follow";
        } else {
          return "Unfollow";
        }
      });

      await axios({
        url: process.env.REACT_APP_API_URL + `/users/${postUser._id}/follow`,
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (postUser.followers && postUser.followers.includes(user.id)) {
      setFollowButton("Unfollow");
    }
  }, [postUser]);

  return (
    <>
      <div className="row sticky-top bg-black text-light pt-1 mx-1 user-info-header-borders">
        <div className="col-1 p-3">
          <Link to="/home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="logo-small"
            >
              <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
            </svg>
          </Link>
        </div>
        <div className="col-11">
          <p className="fw-bold fs-4 mb-0 text-light text-start ps-2">
            {postUser.firstname} {postUser.lastname}
          </p>
          <p className="text-muted mb-2 text-start ps-2">
            {tweetList.length < 2
              ? tweetList.length + " Tweet"
              : tweetList.length + " Tweets"}
          </p>
        </div>
      </div>
      <div className="row bg-black text-light justify-content-evenly mx-1 user-info-borders">
        <div className="col-9 mb-3 divfotoperfil">
          <img
            src={postUser.avatar}
            alt="Avatar"
            className="profileimage img-fluid rounded-circle mb-3"
          />
          <p className="fw-bold fs-4 mb-0 text-light text-start">
            {postUser.firstname} {postUser.lastname}
          </p>
          <p className="text-muted text-start mb-1">@{postUser.username}</p>
          <p>{postUser.description}</p>

          <p className="text-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="logo-small a"
            >
              <path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z" />
            </svg>
            <span className="text-muted"> Joined {joinedDate}</span>
          </p>
          <p className="text-light text-start">
            {postUser.following ? postUser.following.length : 0}
            <span className="text-muted me-2"> Following </span>
            {postUser.followers ? postUser.followers.length : 0}
            <span className="text-muted"> Followers </span>
          </p>
        </div>
        <div className="col-3 align-self-center">
          {params.username !== user.username ? (
            <button
              className="btn btn-light fw-bold rounded-pill px-3 py-0 btn-follow"
              onClick={() => handleFollow()}
            >
              {followButton}
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default UserInfo;
