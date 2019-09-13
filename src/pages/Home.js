import React from "react";
import Images from "../components/Images";

function Home() {
  return (
    <div className="home">
      <Images />
      <div className="container-fluid flexPadd">
        <div className="row">
          <div className="col-12"></div>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
