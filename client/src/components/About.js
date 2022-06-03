import React from "react";
import jaffapic from "../images/jaffer.webp";

import "./About.css";

const About = () => {
  return (
    <>
      <div className='container shadow-sm p-3 rounded'>
        <form method=''>
          <div className='row'>
            <div className='col-md-4'>
              <img className='img-thumbnail w-50' src={jaffapic} alt='Jaffa' />
            </div>
            <div className='col-md-6'>
              <div className='profile-head text-start'>
                <h5 className='fw-bold fs-3'>Jaffer Sunny</h5>
                <h6 className='text-primary'>Web Developer</h6>
                <p className='profile-rating mt-3 mb-5'>
                  RANKING : <span className='fw-bold'>9/10</span>
                </p>
                <ul class='nav nav-tabs noborder' id='myTab' role='tablist'>
                  <li class='nav-item' role='presentation'>
                    <button
                      class='nav-link tabButton active tabBorder'
                      id='home-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#home'
                      type='button'
                      role='tab'
                      aria-controls='home'
                      aria-selected='true'>
                      About
                    </button>
                  </li>
                  <li class='nav-item' role='presentation'>
                    <button
                      class='nav-link tabButton tabBorder'
                      id='profile-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#profile'
                      type='button'
                      role='tab'
                      aria-controls='profile'
                      aria-selected='false'>
                      Timeline
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-md-2'>
              <input
                type='submit'
                name='btnAddMore'
                className='profile-edit-btn'
                value='Edit Profile'
              />
            </div>
          </div>

          <div className='row'>
            {/* left side url */}
            <div className='col-md-4'>
              <div className='profile-work d-flex flex-column '>
                <p>WORK LINK</p>
                <a
                  href='https://www.linkedin.com/in/jaffer-sunny/'
                  target='_blank'
                  rel='noreferrer'>
                  LinkedIN
                </a>
                <a
                  href='https://github.com/jaffasunny/mern-app-with-auth'
                  target='_blank'
                  rel='noreferrer'>
                  Github
                </a>
              </div>
            </div>

            {/* right side data toggle */}
            <div className='col-md-8 pl-5 about-info'>
              <div class='tab-content' id='myTabContent'>
                <div
                  class='tab-pane fade show active text-start'
                  id='home'
                  role='tabpanel'
                  aria-labelledby='home-tab'>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>User ID</label>
                    </div>
                    <div className='col-md-6'>
                      <p>12312312576568744</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Jaffer Sunny</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Jaffer Sunny</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Jaffer Sunny</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Jaffer Sunny</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Jaffer Sunny</p>
                    </div>
                  </div>
                </div>
                <div
                  class='tab-pane fade'
                  id='profile'
                  role='tab'
                  aria-labelledby='profile-tab'>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>User ID</label>
                    </div>
                    <div className='col-md-6'>
                      <p>12312312576568744</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Jaffer Sunny</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Jaffer Sunny</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Jaffer Sunny</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Jaffer Sunny</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Jaffer Sunny</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
