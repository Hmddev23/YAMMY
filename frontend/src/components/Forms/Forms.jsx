
import React, { useState, useEffect } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { FaArrowRotateRight } from 'react-icons/fa6';

import FormField from './FormField';
import Logo from '../../assets/favicon.svg';
import { FormImg } from '../../assets/svgs';
import './Forms.css';


const Forms = ({ title, description, formFields, submitBtn, onSubmit, redirect }) => {
  const [buttonState, setButtonState] = useState(false);
  const [formWidth, setFormWidth] = useState('');
  const [showDescription, setShowDescription] = useState(false);
  const [showSocial, setShowSocial] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted a form');

    setButtonState(true);

    setTimeout(() => {
      setButtonState(false);
      console.log('waiting for 3 seconds');;
    }, 3000);
  }

  useEffect(() => {
    const isRegisterPage = window.location.pathname === '/register';
    const isResetPsdPage = window.location.pathname === '/reset-password';
    setFormWidth(isRegisterPage ? '' : '400px');
    setShowDescription(isResetPsdPage ? true : false);
    setShowSocial(isResetPsdPage ? false : true);
  }, []);

  return (
    <>
      <div className='form-popup' style={{ maxWidth: formWidth }}>
        <div className='form-box'>
          {
            !formWidth && (<div className='child-section form-detail'>
              <header className='logo'>
                <img src={Logo} alt='logo image' />
              </header>
              <h1>Why Sign up?</h1>
              <p> ★ access to exclusive curated recipes.</p>
              <p> ★ Receive personalized recipe recommendations.</p>
              <p> ★ Join a vibrant community of food enthusiasts.</p>
              <FormImg />
            </div>)
          }

          <div className='child-section form-content'>
            {
              formWidth && (<header className='logo'>
                <img src={Logo} alt='logo img' />
              </header>)
            }
            <form className='form' id='form'
                  action='#' autoComplete={'off'}
            >
              <h1> {title} </h1>
              {
                showDescription && (<p> {description} </p>)
              }
              {
                formFields.map(({type, name, placeholder, label, required, message, link}, index) => {
                  // console.log({type, name, placeholder, label, required, message, link});

                  return (
                    <FormField key={index}
                              type={type}
                              name={name}
                              placeholder={placeholder}
                              label={label}
                              required={required}
                              message={message}
                              link={link}
                    />
                  );
                })
              }

              <button type='submit'
                      className={`btn btn1 ${buttonState ? 'disabled' : ''}`}
                      onClick={(e) => handleSubmit(e)}
                      disabled={buttonState}
              >
                {buttonState && <FaArrowRotateRight className={buttonState ? 'visible' : ''} />} {submitBtn}
              </button>

            </form>
            
            {
              redirect && (<div className='navigation-link'>
                <p>
                  {redirect.label}
                  <a href={redirect.link.to} className='link2'> {redirect.link.label} </a>
                </p>
              </div>)
            }


            {
              showSocial && (<div>
                <div className='separator'></div>
                <button href='#' type='button' className='btn btn2'>
                  <FaGoogle /> Sign up with Google
                </button>
                <button href='#' type='button' className='btn btn3'>
                  <FaGithub /> Sign up with Github
                </button>
              </div>)
            }

            {
              !formWidth && (<p id='footer'>
                By creating an account.you agree to our&nbsp;
                <a href='#' className='link2'>terms</a>
                &nbsp;and&nbsp;
                <a href='#' className='link2'>privacy policy</a>
              </p>)
            }
          </div>
        </div>
      </div>
    </>
  );
}

Forms.defaultProps = {
  title: 'Form Title',
  description: 'Form Description',
  submitBtn: 'Form Button',
  formFields : [
    {
      type: 'text',
      name: 'field name',
      placeholder: 'field placeholder',
      label: 'label',
      required: 'required',
      message: 'field message',
      link: {
        label: 'link name',
        to: '/field-link'
      }
    }
  ],
  onSubmit: (form) => console.log(form),
  redirect: {
    label: 'redirection message',
    link: {
      label: 'redirection name',
      to: '/redirection-link'
    }
  }
}


export default Forms;