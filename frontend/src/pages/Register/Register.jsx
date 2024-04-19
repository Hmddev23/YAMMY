
import React from 'react';

import Forms from '../../components/Forms/Forms';
import './Register.css';


const formFields = [
  {
    type: 'email',
    name: 'email',
    placeholder: 'Example@email.com',
    label: 'Email',
    required: 'required',
    message: '',
    link: {}
  },
  {
    type: 'text',
    name: 'username',
    placeholder: 'Username',
    label: 'Username',
    required: 'required',
    message: '',
    link: {}
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    label: 'Password',
    required: 'required',
    message: '',
    link: {}
  },
  {
    type: 'checkbox',
    name: 'forgotPassword',
    placeholder: '',
    label: '',
    required: '',
    message: 'Stay signed in',
    link: {}
  }
]

const redirect = {
  label: 'Already have an account?',
  link: {
    label: 'Sign in',
    to: '/login'
  }
}

const Register = () => {
  return (
    <div className='register'>
      <main>
        <Forms title='Register to Yammy'
               submitBtn='Register'
               formFields={formFields}
               redirect={redirect}
        />
      </main>
    </div>
  );
}


export default Register;