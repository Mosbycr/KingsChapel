import React from "react";
import Images from "../components/Images";

function Home() {
  return (
    <div className="home">
      <Images />
      <div className="container flexPadd">
        <div className="row pt-2">
          <div className="col-lg-12 animated fadeIn delay-1s">
            <p className="pt-3" id="quote">
              For where two or three are gathered in my name, I am there among
              them. -Matthew 18:20
            </p>
            <h3 className="pt-5 text-center animated tada delay-2s">Welcome</h3>
            <p className="pt-2 welcome">
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
          <div className="col-lg-12 text-center animated fadeIn delay-3s">
            <h3>Our Mission</h3>
            <h5 className="pt-2">We are called to be a people of God:</h5>
            <p>
              The Scriptures and the daily proof of God's grace form the basis
              of the call to be God's people.
            </p>
            <h5>We are called to be a people of God's love:</h5>
            <p>
              King's Chapel is a friendly church family that gathers for
              fellowship and spiritual growth.
            </p>
            <h5>We are called to be a people acting on God's word:</h5>
            <p>
              We strive to enrich those around us by:
              <br />
              Showing God's love through personal example, worshiping God as a
              congregation of faith, participating in missions, both locally and
              around the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
