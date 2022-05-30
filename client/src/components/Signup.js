import React from "react";
import "./Signup.css";
import signuppic from "../images/signup.jpg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <section className='signup bg-light h-auto'>
        <div className='container py-lg-5 py-sm-4 pb-3'>
          <div className='shadow-sm p-sm-5 p-3 bg-body rounded-3'>
            <div className='signup-form'>
              <div class='row justify-content-between'>
                <form
                  className='col-md-6 order-md-1 order-2 register-form'
                  id='register-form'>
                  <h2 className='form-title'>Signup</h2>
                  <div className='form-group'>
                    <label htmlFor='name'>
                      <i class='zmdi zmdi-account'></i>
                    </label>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      autoComplete='off'
                      placeholder='Your Name'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='email'>
                      <i class='zmdi zmdi-email'></i>
                    </label>
                    <input
                      type='text'
                      email='email'
                      id='email'
                      autoComplete='off'
                      placeholder='Your Email'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='phone'>
                      <i class='zmdi zmdi-phone-in-talk'></i>
                    </label>
                    <input
                      type='number'
                      phone='phone'
                      id='phone'
                      autoComplete='off'
                      placeholder='Your Phone number'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='work'>
                      <i class='zmdi zmdi-slideshow'></i>
                    </label>
                    <input
                      type='text'
                      work='work'
                      id='work'
                      autoComplete='off'
                      placeholder='Your Profession'
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
                      autoComplete='off'
                      placeholder='Your Password'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='cpassword'>
                      <i class='zmdi zmdi-lock'></i>
                    </label>
                    <input
                      type='cpassword'
                      cpassword='cpassword'
                      id='cpassword'
                      autoComplete='off'
                      placeholder='Confirm Password'
                    />
                  </div>
                  <div className='form-group form-button'>
                    <input
                      type='submit'
                      name='signup'
                      id='signup'
                      className='form-submit'
                      value={"register"}
                    />
                    <Link
                      className='ps-sm-2 ps-3 fs-sm-6 text-decoration-none fw-bold text-reset'
                      to={"/login"}>
                      Already registered?
                    </Link>
                  </div>
                </form>

                <div className='col-md-6 order-md-2 order-1 signup-image text-center'>
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
