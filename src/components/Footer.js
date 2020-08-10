import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome//free-brands-svg-icons';

function Footer(){
    return (
      <div className="footerContainer">
        <div className="container-fluid footer">
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
                            <br />
                            <a
                                href="https://www.facebook.com/KingsChapelVA"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faFacebookSquare} /> Visit our Facebook page
                            </a>
              </p>
            </div>
            <div className="col-4">
              <p>
                Sunday Worship Hours: <br />
                10:00 a.m. Sunday School <br />
                11:00 a.m. Sunday Worship
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;