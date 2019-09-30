import React from 'react';

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg">
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">
          <img
            src="/images/KCCross.PNG"
            width="60"
            height="70"
            className="d-inline-block align-top navbarCross"
            alt=""
          ></img>
          <img
            src="/images/KCname.PNG"
            width="300"
            height="70"
            className="d-inline-block align-top navbarName"
            alt=""
          ></img>
        </a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                HOME
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/community">
                COMMUNITY
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/contact">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;