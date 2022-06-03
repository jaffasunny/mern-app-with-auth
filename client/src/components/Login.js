import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginpic from "../images/login.jpg";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login Successfull");
      navigate("/");
    }
  };

  return (
    <>
      <section className='login bg-light h-auto text-start'>
        <div className='container py-lg-5 py-sm-4 pb-3'>
          <div className='shadow-sm p-sm-5 p-3 bg-body rounded-3'>
            <div className='login-form'>
              <div class='row justify-content-between'>
                <div className='col-md-6 signup-image text-center'>
                  <figure>
                    <img src={loginpic} alt='' />
                  </figure>
                </div>
                <form
                  method='POST'
                  className='col-md-6 d-flex flex-column justify-content-center register-form'
                  id='register-form'>
                  <h2 className='form-title'>Signin</h2>
                  <div className='form-group'>
                    <label htmlFor='email'>
                      <i class='zmdi zmdi-email'></i>
                    </label>
                    <input
                      type='text'
                      email='email'
                      id='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete='off'
                      placeholder='Your Email'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='password'>
                      <i class='zmdi zmdi-lock'></i>
                    </label>
                    <input
                      type='password'
                      password='password'
                      id='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete='off'
                      placeholder='Your Password'
                    />
                  </div>
                  <div className='form-group form-button'>
                    <input
                      type='submit'
                      name='login'
                      id='login'
                      className='form-submit'
                      value='Login'
                      onClick={loginUser}
                    />
                    <Link
                      className='ps-sm-2 ps-3 fs-sm-6 text-decoration-none fw-bold text-reset'
                      to={"/signup"}>
                      New User?
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
