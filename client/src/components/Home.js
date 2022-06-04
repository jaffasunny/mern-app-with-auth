import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      // backend res for about router
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setUserName(data.name);
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userHomePage();
  }, []);

  return (
    <>
      <div className='home-page d-flex flex-column justify-content-center align-items-center bg-white'>
        <div className='home-div'>
          <p className='pt-5 fw-bold text-primary'>WELCOME</p>
          <h1 className='fs-1 fw-bold'>{userName}</h1>
          <h1 className='fs-2'>
            {show ? `Happy to see you back!` : `We are the MERN Developer`}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
