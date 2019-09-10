import React from 'react';

function Footer(){
    return (
      <div className="container-fluid footer sticky-bottom">
        <div className="row text-center">
          <div className="col-4">
            <p>
              King's Chapel Presbyterian Church
              <br />
              13346 West Patrick Henry Road <br />
              Doswell, Virginia 23047
            </p>
            <p>Phone: 804-883-5831</p>
          </div>
          <div className="col-4">
            <p className="copyright text-center pt-3">
              &copy; 2019 King's Chapel Presbyterian Church
            </p>
          </div>
          <div className="col-4">
            <p>
              Sunday Worship Hours: <br />
              9:45 a.m. Sunday School <br />
              11:00 a.m. Sunday Worship
              {/* add any office hours maybe? */}
            </p>
          </div>
        </div>
      </div>
    );
}

export default Footer;