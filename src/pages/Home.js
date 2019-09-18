import React from "react";
import Images from "../components/Images";

function Home() {
  return (
    <div className="home">
      <Images />
      <div className="container flexPadd">
        <div className="row">
          <div className="col-12"></div>
          <p className="mx-auto pt-3">
            <em>
              <b>
                For where two or three are gathered in my name, I am there among
                them. -Matthew 18:20
              </b>
            </em>
          </p>
        </div>
        <div className="row pt-3">
          <div className="col-lg-12">
            <h3>Welcome</h3>
            <p>
              Since 1930, King's Chapel Presbyterian Church has been a place for
              our community to gather to share times of joy and sorrow, praise
              and worship and to form lasting Christian relationships. King's
              Chapel strives to be a beacon of spiritual light for our
              community. We embrace Christ's timeless message of peace, hope,
              and love. We hope the light within each of us shines as we witness
              for our Savior and guides us as we face the challenges of life.
            </p>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-lg-12">
            <h3>Our Mission</h3>
            <h5>We are called to be a people of God:</h5>
            <p>The Scriptures and the daily proof of God's grace form the basis of the call to be God's people.</p>
            <h5>We are called to be a people of God's love:</h5>
            <p>King's Chapel is a friendly church family that gathers for fellowship and spiritual growth.</p>
            <h5>We are called to be a people acting on God's word:</h5>
            <p>We strive to enrich those around us by:
              <ul>
                <li>showing God's love through personal example.</li>
                <li>worshiping God as a congregation of faith.</li>
                <li>participating in missions, both locally and around the world.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
