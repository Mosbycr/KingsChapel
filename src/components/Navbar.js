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
        <a class="navbar-brand" href="/">
          <img src="/images/KCCross.PNG" width="60" height="70" class="d-inline-block align-top" alt=""></img>
          <img src="/images/KCname.PNG" width="300" height="70" class="d-inline-block align-top" alt=""></img>          
        </a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About Us
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="/history">
                  Our History
                </a>
                <a className="dropdown-item" href="/staff">
                  Current Staff
                </a>
                <a className="dropdown-item" href="#">
                  Photo Gallery
                </a>
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;