
import React from 'react';

import Forms from '../../components/Forms/Forms';
import './Login.css';


const formFields = [
  {
    type: 'email',
    name: 'email',
    placeholder: 'Example@email.com',
    label: 'Email or Username',
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
    link: {
      label: 'Forgot My Password',
      to: '/reset-password'
    }
  }
]

const redirect = {
  label: `Don't have an account?`,
  link: {
    label: 'Register',
    to: '/register'
  }
}

const Login = () => {
  return (
    <div className='login'>
      <main>
        <Forms title='Sign In to Yammy'
               description='testing'
               submitBtn='Sign In'
               formFields={formFields}
               redirect={redirect}
        />
      </main>
    </div>
  );
}


export default Login;