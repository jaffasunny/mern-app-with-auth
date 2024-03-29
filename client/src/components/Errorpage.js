import React from "react";

import "./Errorpage.css";

const Errorpage = () => {
  return (
    <>
      <div id='notfound'>
        <div className='notfound'>
          <div className='notfound-404'>
            <h1>404</h1>
          </div>
          <h2>We are sorry, page not found!</h2>
          <p className='mb-5 text-uppercase'>
            The page you are looking for might have been removed or had its name
            changed or its temporarily unavailable.
          </p>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
