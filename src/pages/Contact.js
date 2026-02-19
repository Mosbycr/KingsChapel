import React, { useState } from "react";

const CONTACT_EMAIL = "abstills@henrico.k12.va.us";

function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(CONTACT_EMAIL).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  };

  return (
    <div className="container text-center flexPadd">
      {showToast && (
        <div className="email-toast">Email copied to clipboard</div>
      )}
      <div className="row">
        <div className="col-lg-12">
          <h3 className="pt-5 text-center">Contact Us</h3>
        </div>
      </div>
      <div className="row">
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
            Amy Stills (Clerk of Session) at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              onClick={handleEmailClick}
              style={{ cursor: "pointer" }}
            >
              {CONTACT_EMAIL}
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
