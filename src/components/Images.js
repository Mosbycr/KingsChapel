import React from 'react';

function Images(){
    return (
      <div className="container-fluid">
        <div className="row imageContainer">
            <img
              className="image1"
              src="/images/front.JPG"
              alt="side photograph of King's Chapel main building"
            />
            <img
              className="image2"
              src="/images/mainSide.JPG"
              alt="side photograph of King's Chapel main building"
            />
            <img
            className="image3"
              src="/images/crossView.JPG"
              alt="side photograph of King's Chapel main building"
            />
        </div>
      </div>
    );
}

export default Images;