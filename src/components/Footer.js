import React from 'react';

function Footer(){
    return (
      <div className="container-fluid footer sticky-bottom">
        <div className="row text-center">
          <div className="col-4">
            <p>King's Chapel Episcopal Church<br/>
            Address here
            </p>
          </div>
          <div className="col-4">
            <p className="copyright text-center pt-3">
              &copy; 2019 King's Chapel Episcopal Church
            </p>
          </div>
          <div className="col-4">
            <p>Phone: </p>
            <p>Sunday Service Hours: <br/>
            hours go here 
{/* add any office hours maybe? */}
            </p>
          </div>
        </div>
      </div>
    );
}

export default Footer;