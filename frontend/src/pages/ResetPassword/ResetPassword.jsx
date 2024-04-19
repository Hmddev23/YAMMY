
import React from 'react';

import Forms from '../../components/Forms/Forms';
import './ResetPassword.css';


const formFields = [
  {
    type: 'email',
    name: 'email',
    placeholder: 'Example@email.com',
    label: 'Email',
    required: 'required',
    message: '',
    link: {}
  }
]

const redirect = {
  label: '',
  link: {
    label: '',
    to: '/link'
  }
}

const ResetPassword = () => {
  return (
    <div className='reset-password'>
      <main>
        <Forms title='Reset your password'
               description={`Don't worry, we've got you back! Just enter your email address and we'll send you a link to reset your password`}
               submitBtn='Submit'
               formFields={formFields}
               redirect={redirect}
        />
      </main>
    </div>
  );
}


export default ResetPassword;