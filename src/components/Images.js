import React from 'react';

function Images(){
    return (
      <div className="container-fluid">
        <div className="row imageContainer">
          {/* <div className="col-4"> */}
            <img
              className="image"
              src="/images/front.JPG"
              alt="side photograph of King's Chapel main building"
            />
          {/* </div> */}
          {/* <div className="col-4"> */}
            <img
              className="image"
              src="/images/mainSide.JPG"
              alt="side photograph of King's Chapel main building"
            />
          {/* </div> */}

          {/* <div className="col-4"> */}
            <img
            className="image"
              src="/images/crossView.JPG"
              alt="side photograph of King's Chapel main building"
            />
          {/* </div> */}
        </div>
      </div>
    );
}

export default Images;