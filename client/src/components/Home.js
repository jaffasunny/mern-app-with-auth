import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className='home-page d-flex flex-column justify-content-center align-items-center'>
        <div className='home-div'>
          <p className='pt-5 fw-bold text-primary'>WELCOME</p>
          <h1 className='fs-1 fw-bold'>We are the MERN Developer</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
