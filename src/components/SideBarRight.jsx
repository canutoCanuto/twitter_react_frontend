import React from "react";
import "./SideBarRight.css";
// import {
//   TwitterTimelineEmbed,
//   TwitterShareButton,
//   TwitterTweetEmbed,
// } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function Widgets() {
  return (
    <>
      <div className="widgets d-none d-lg-block">
        <div className="widgets__input sticky-top">
          <SearchIcon className="widgets__searchIcon" />
          <input
            placeholder="Search Twitter"
            type="text"
            className="text-light"
          />
        </div>

        <div className="widgets__widgetContainer list-group  whastHapp">
          <h2 className="tituloSideBar pb-3">Trends for you</h2>
          <Link to="#" className=" list-group-item-action rounded-3 mb-3 ">
            <div className="d-flex w-100 justify-content-between ">
              <small className="mb-1">Trending in Uruguay</small>
              <span className="text-muted">...</span>
            </div>
            <div className="text-start">
              <p className="mb-1 pcolor">Hack Academy</p>
              <small className="mb-1 ">1.000.000 Tweets</small>
            </div>
          </Link>
          <Link to="#" className=" list-group-item-action  rounded-3 mb-3">
            <div className="d-flex w-100 justify-content-between ">
              <small className="mb-1">Trending in Uruguay</small>
              <span className="text-muted">...</span>
            </div>
            <div className="text-start">
              <p className="mb-1 pcolor">WhatsApp</p>
              <small className="mb-1 ">1.298 Tweets</small>
            </div>
          </Link>
          <Link to="#" className=" list-group-item-action rounded-3 mb-3">
            <div className="d-flex w-100 justify-content-between ">
              <small className="mb-1">Trending in Uruguay</small>
              <span className="text-muted">...</span>
            </div>
            <div className="text-start">
              <p className="mb-1 pcolor">ANCAP</p>
              <small className="mb-1 ">1 Tweets</small>
            </div>
          </Link>
          <Link to="#" className=" list-group-item-action rounded-3 mb-3">
            <div className="d-flex w-100 justify-content-between ">
              <small className="mb-1">Trending in Uruguay</small>
              <span className="text-muted">...</span>
            </div>
            <div className="text-start">
              <p className="mb-1 pcolor">Grupo 9</p>
              <small className="mb-1 ">10 Tweets</small>
            </div>
          </Link>
        </div>

        <div className="widgets__widgetContainer ps-4">
          <h2 className="pcolor pb-3">Who to follow</h2>
          <div className="row mb-3">
            <div className="col-2">
              <img
                className="profile-avatar rounded-circle"
                src="/img/mSTk9qRJ_400x400.jpg"
                alt="Avatar"
              />
            </div>
            <div className="col-6 ms-2 pe-0">
              <h6 className="text-start pcolor mb-0">
                El Observador
                <svg
                  viewBox="0 0 24 24"
                  aria-label="Verified account"
                  className="align-middle verified-logo"
                  width="20px"
                >
                  <g>
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                  </g>
                </svg>
              </h6>{" "}
              <p className="text-start text-muted pcolor">
                <small>@Observador</small>
              </p>
            </div>
            <div className="col mt-3 w-25 ps-0">
              <Link to="#">
                <button className="btn btn-light fw-bold rounded-pill px-3 py-0">
                  Follow
                </button>
              </Link>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-2">
              <img
                className="profile-avatar rounded-circle"
                src="/img/mSTk9qRJ_400x400.jpg"
                alt="Avatar"
              />
            </div>
            <div className="col-6 ms-2 pe-0">
              <h6 className="text-start pcolor mb-0">
                Tom hardy{" "}
                <svg
                  viewBox="0 0 24 24"
                  aria-label="Verified account"
                  className="align-middle verified-logo"
                  width="20px"
                >
                  <g>
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                  </g>
                </svg>
              </h6>
              <p className="text-start pcolor text-muted">
                <small>@_VSimmons</small>
              </p>
            </div>
            <div className="col mt-3 w-25 ps-0">
              <Link to="#">
                <button className="btn btn-light fw-bold rounded-pill px-3 py-0">
                  Follow
                </button>
              </Link>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-2">
              <img
                className="profile-avatar rounded-circle"
                src="/img/mSTk9qRJ_400x400.jpg"
                alt="Avatar"
              />
            </div>
            <div className="col-6 ms-2 pe-0">
              <h6 className="text-start pcolor mb-0">
                Game of Thrones{" "}
                <svg
                  viewBox="0 0 24 24"
                  aria-label="Verified account"
                  className="align-middle verified-logo"
                  width="20px"
                >
                  <g>
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                  </g>
                </svg>
              </h6>
              <p className="text-start pcolor text-muted">
                <small>@GameOfThrones</small>
              </p>
            </div>
            <div className="col mt-3 w-25 ps-0">
              <Link to="#">
                <button className="btn btn-light fw-bold rounded-pill px-3 py-0">
                  Follow
                </button>
              </Link>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-2">
              <img
                className="pcolor profile-avatar rounded-circle"
                src="/img/mSTk9qRJ_400x400.jpg"
                alt="Avatar"
              />
            </div>
            <div className="col-6 ms-2 pe-0">
              <h6 className="text-start pcolor mb-0">
                George RR Martin{" "}
                <svg
                  viewBox="0 0 24 24"
                  aria-label="Verified account"
                  className="align-middle verified-logo"
                  width="20px"
                >
                  <g>
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                  </g>
                </svg>
              </h6>
              <p className="text-start pcolor text-muted">
                <small>@GRRMspeaking</small>
              </p>
            </div>
            <div className="col mt-3 w-25 ps-0">
              <Link to="#">
                <button className="btn btn-light fw-bold rounded-pill px-3 py-0">
                  Follow
                </button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <img
                className="profile-avatar rounded-circle"
                src="/img/mSTk9qRJ_400x400.jpg"
                alt="Avatar"
              />
            </div>
            <div className="col-6 ms-2 pe-0">
              <h6 className=" text-start pcolor mb-0">
                Pat Rothfuss{" "}
                <svg
                  viewBox="0 0 24 24"
                  aria-label="Verified account"
                  className="align-middle verified-logo"
                  width="20px"
                >
                  <g>
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                  </g>
                </svg>
              </h6>
              <p className="text-start pcolor text-muted">
                <small>@PatrickRothfuss</small>
              </p>
            </div>
            <div className="col mt-3 w-25 ps-0">
              <Link to="#">
                <button className="btn btn-light fw-bold rounded-pill px-3 py-0">
                  Follow
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Widgets;
