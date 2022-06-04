import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./About.css";

const About = () => {
  const navigate = useNavigate();

  const callAboutPage = async () => {
    try {
      // backend res for about router
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
        withCredentials: true,
      });

      const data = await res.json();
      console.log(data);

      if (!res.status === 200) {
        throw new Error(res.error);
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className='container shadow-sm mt-3 p-3 rounded bg-white'>
        <form method='GET'>
          <div className='row'>
            <div className='col-md-4'>
              <img
                className='img-thumbnail w-50 h-75'
                src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='Jaffa'
              />
            </div>
            <div className='col-md-6'>
              <div className='profile-head text-start'>
                <h5 className='fw-bold fs-3'>Jaffer Sunny</h5>
                <h6 className='text-primary'>Web Developer</h6>
                <p className='profile-rating mt-3 mb-5'>
                  RANKING : <span className='fw-bold'>9/10</span>
                </p>
                <ul className='nav nav-tabs noborder' id='myTab' role='tablist'>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link tabButton active tabBorder'
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
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link tabButton tabBorder'
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
              <button
                name='btnAddMore'
                type='submit'
                className='about-edit-button'>
                Edit Profile
              </button>
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
              <div className='tab-content' id='myTabContent'>
                <div
                  className='tab-pane fade show active text-start'
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
                      <label>Email</label>
                    </div>
                    <div className='col-md-6'>
                      <p>jaffer@test.com</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Phone</label>
                    </div>
                    <div className='col-md-6'>
                      <p>+92 31215314</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Profession</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div>
                <div
                  className='tab-pane fade text-start'
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
