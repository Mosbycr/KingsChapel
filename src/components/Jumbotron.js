import React from 'react';

function Jumbotron(){
    return (
      <div className="container-fluid imageContainer">
        <div className="row d-flex">
          <div className="col-4">
            <img
              className="image"
              src="/images/mainSide.JPG"
              alt="side photograph of King's Chapel main building"
            />
          </div>
          <div className="col-4">
            <img
              className="image"
              src="/images/front.JPG"
              alt="side photograph of King's Chapel main building"
            />
          </div>

          <div className="col-4">
            <img
            className="image"
              src="/images/crossView.JPG"
              alt="side photograph of King's Chapel main building"
            />
          </div>
        </div>
      </div>
    );
}

export default Jumbotron;