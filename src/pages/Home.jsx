import React from "react";
import SideBarLeft from "../components/SideBarLeft";
import SideBarRight from "../components/SideBarRight";
import Tweet from "../components/Tweet";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div>
          <SideBarLeft />
        </div>
        <div>
          <Tweet />
        </div>
        <div>
          <SideBarRight />
        </div>
      </div>
    </div>
  );
}

export default Home;
