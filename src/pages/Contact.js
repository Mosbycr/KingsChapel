import React from "react";

function Contact() {
  return (
    <div className="container text-center flexPadd">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="pt-5 text-center">Contact Us</h3>
        </div>
      </div>
      <div className="row animated fadeInDown">
        <div className="col-lg-12">
          <p className="pt-4">
            <b>
              <em>Address:</em>
            </b>
            <br />
            King's Chapel Presbyterian Church
            <br />
            13346 West Patrick Henry Road <br />
            Doswell, Virginia 23047
          </p>
          <p>
            <b>
              <em>Phone: </em>
            </b>
            804-883-5831
          </p>

          <p>
            <b>
              <em>Email: </em>
            </b>{" "}
            Preacher Durk Steed at {""}
            <a
              href="mailto:steedd@stcva.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              steedd@stcva.org
            </a>
          </p>

          <p>
            <b>
              <em>Sunday Worship Hours: </em>
            </b>
            <br />
            10:00 a.m. Sunday School <br />
            11:00 a.m. Sunday Worship
          </p>
          <p className="pt-4">
            Give us a call, email us, or stop by on a Sunday. We would love to
            hear from you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
