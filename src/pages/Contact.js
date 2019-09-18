import React from 'react';

function Contact(){
    return (
      <div className="container-fluid flexPadd">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h3>Contact Us</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p>
              Give us a call, email us, or stop by on a Sunday. We would love to
              hear from you!
            </p>
            <p>
              Address:
              <br />
              King's Chapel Presbyterian Church
              <br />
              13346 West Patrick Henry Road <br />
              Doswell, Virginia 23047
            </p>
            <p>Phone: 804-883-5831</p>
            <p>
              Email: <br />
              email address here
            </p>
            <p>
              Sunday Worship Hours: <br />
              10:00 a.m. Sunday School <br />
              11:00 a.m. Sunday Worship
            </p>
          </div>
        </div>
      </div>
    );
}

export default Contact;