import React from "react";
import SideBarLeft from "../components/SideBarLeft";
import SideBarRight from "../components/SideBarRight";
import Tweet from "../components/Tweet";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <SideBarLeft />
        </div>
        <div className="col-4 ">
          <Tweet />
        </div>
        <div className="col-4">
          <SideBarRight />
        </div>
      </div>
    </div>
  );
}

export default Home;
