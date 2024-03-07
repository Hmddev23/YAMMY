
import React from 'react';

import FaqItem from './FaqItem';
import FaqData from './FaqData';
import './Faq.css';


const Faq = () => {
  return (
    <div className='faq-section'
         id='faq'
    >
      <div className='part-heading left'>
        <h2>
          FAQ
        </h2>
        <h5>
          Answers to some questions you might have.
        </h5>
      </div>

      <div className='faq-list'>
      {
        FaqData.map((faq, i) => {
          const {question, answer} = faq;
          return (
            <FaqItem key={i} question={question} answer={answer} />
          );
        })
      }
      </div>  
    </div>
  );
}


export default Faq;