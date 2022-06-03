import React, { useState } from "react";
import signuppic from "../images/signup.jpg";
import { Link, useNavigate } from "react-router-dom";

import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  // setting dynamic inputs
  // it also includes adding name attribute
  // to all the inputs
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // server only understands string data
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (data === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successfull");
      console.log("Registration Successfull");

      navigate("/login");
    }
  };

  return (
    <>
      <section className='signup bg-light h-auto'>
        <div className='container py-lg-5 py-sm-4 pb-3'>
          <div className='shadow-sm p-sm-5 p-3 bg-body rounded-3'>
            <div className='signup-form'>
              <div className='row justify-content-between'>
                <form
                  method='POST'
                  className='col-md-6 d-sm-flex flex-sm-column justify-content-sm-center order-md-1 order-2 register-form'
                  id='register-form'>
                  <h2 className='form-title'>Signup</h2>
                  <div className='form-group'>
                    <label htmlFor='name'>
                      <i className='zmdi zmdi-account'></i>
                    </label>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      autoComplete='off'
                      value={user.name}
                      onChange={handleInputs}
                      placeholder='Your Name'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='email'>
                      <i className='zmdi zmdi-email'></i>
                    </label>
                    <input
                      type='text'
                      name='email'
                      email='email'
                      id='email'
                      autoComplete='off'
                      value={user.email}
                      onChange={handleInputs}
                      placeholder='Your Email'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='phone'>
                      <i className='zmdi zmdi-phone-in-talk'></i>
                    </label>
                    <input
                      type='number'
                      name='phone'
                      phone='phone'
                      id='phone'
                      autoComplete='off'
                      value={user.phone}
                      onChange={handleInputs}
                      placeholder='Your Phone number'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='work'>
                      <i className='zmdi zmdi-slideshow'></i>
                    </label>
                    <input
                      type='text'
                      name='work'
                      work='work'
                      id='work'
                      autoComplete='off'
                      value={user.work}
                      onChange={handleInputs}
                      placeholder='Your Profession'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='password'>
                      <i className='zmdi zmdi-lock'></i>
                    </label>
                    <input
                      type='password'
                      name='password'
                      password='password'
                      id='password'
                      autoComplete='off'
                      value={user.password}
                      onChange={handleInputs}
                      placeholder='Your Password'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='cpassword'>
                      <i className='zmdi zmdi-lock'></i>
                    </label>
                    <input
                      type='password'
                      name='cpassword'
                      cpassword='cpassword'
                      id='cpassword'
                      autoComplete='off'
                      value={user.cpassword}
                      onChange={handleInputs}
                      placeholder='Confirm Password'
                    />
                  </div>
                  <div className='form-group form-button'>
                    <input
                      type='submit'
                      name='signup'
                      id='signup'
                      className='form-submit'
                      value='Register'
                      onClick={postData}
                    />
                    <Link
                      className='ps-sm-2 ps-3 fs-sm-6 text-decoration-none fw-bold text-reset'
                      to={"/login"}>
                      Already registered?
                    </Link>
                  </div>
                </form>

                <div className='col-md-6 order-md-2 d-sm-flex flex-sm-column justify-content-sm-center order-1 signup-image text-center'>
                  <figure>
                    <img src={signuppic} alt='' />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
