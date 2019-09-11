import React from "react";
import Jumbotron from "../components/Jumbotron";

function Home() {
  return (
    <div className="home">
      <Jumbotron />
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
