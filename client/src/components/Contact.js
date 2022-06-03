import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className='contact_info my-5'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-10 mx-lg-auto'>
              <div className='row justify-content-sm-between mb-5 gap-3 p-3'>
                <div className='cards col-md-3 col-sm-5 col-12 w-sm-auto order-sm-1 order-3 cards shadow-sm p-3 bg-body rounded d-flex flex-sm-row justify-content-start align-items-center'>
                  <img
                    src='https://img.icons8.com/office/24/000000/iphone.png'
                    alt='phone'
                  />
                  <div className='d-flex flex-column align-items-start justify-content-start ms-3'>
                    <div className='fw-bold'>Phone</div>
                    <div className='contact_info_text text-muted text-wrap'>
                      +92 1111 32 22221
                    </div>
                  </div>
                </div>
                <div className='cards col-md-3 col-sm-5 col-12 w-sm-auto order-sm-2 order-2 cards shadow-sm p-3 bg-body rounded d-flex flex-sm-row justify-content-start align-items-center'>
                  <img
                    src='https://img.icons8.com/fluency/24/000000/secured-letter.png'
                    alt='phone'
                  />
                  <div className='d-flex flex-column align-items-start justify-content-start ms-3'>
                    <div className='fw-bold'>Email</div>
                    <div className='contact_info_text text-muted text-wrap'>
                      jaffer.sunny125@gmail.com
                    </div>
                  </div>
                </div>
                <div className='cards col-md-3 col-sm-12 col-12 w-sm-auto order-sm-3 order-1 cards shadow-sm p-3 bg-body rounded d-flex flex-sm-row justify-content-start align-items-center'>
                  <img
                    src='https://img.icons8.com/fluency/24/000000/marker.png'
                    alt='phone'
                  />
                  <div className='d-flex flex-column align-items-start justify-content-start ms-3'>
                    <div className='fw-bold'>Address</div>
                    <div className='contact_info_text text-muted text-wrap'>
                      Karachi, Pakistan
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact us Form */}

      <div className='contact_form'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 mx-auto'>
              <div className='contact_form-container shadow-lg p-5 mb-5 bg-body rounded'>
                <div className='contact-form-title fw-bold fs-3 text-start'>
                  Get in Touch
                </div>
                <form id='contact_form'>
                  <div className='row contact_form-name gap-3 justify-content-between flex-sm-row flex-column my-4'>
                    <input
                      type='text'
                      id='contact_form-name'
                      className='col contact_form-name input_field py-1 px-3 mb-3'
                      placeholder='Name'
                      required='true'
                      autoComplete='xyz123'
                    />
                    <input
                      type='email'
                      id='contact_form-email'
                      className='col contact_form-email input_field py-1 px-3 mb-3'
                      placeholder='Email'
                      autoComplete='xyz123'
                      required='true'
                    />
                    <input
                      type='number'
                      id='contact_form-phone'
                      className='col contact_form-phone input_field py-1 px-3 mb-3'
                      placeholder='Phone Number'
                      autoComplete='xyz123'
                      required='true'
                    />
                  </div>

                  <div className='contact_form-text'>
                    <textarea
                      className='text-field contact_form- px-3 py-2 w-100'
                      placeholder='Message'
                      cols='30'
                      rows='10'></textarea>
                  </div>

                  <div className='text-start'>
                    <button
                      type='submit'
                      className='button contact_submit-button'>
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
