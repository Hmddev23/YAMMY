
import React, { useState, useRef } from 'react';
import { BiPlusMedical } from 'react-icons/bi';

import './Faq.css';


const FaqItem = ({question, answer}) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef(null);

  const toggleFaq = () => {
    const faqAnswer = answerRef.current;
    faqAnswer.style.maxHeight = isOpen ? null : faqAnswer.scrollHeight + 'px';
    setIsOpen(!isOpen);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className='faq-cont'
         onClick={toggleFaq}
    >
      <h5 className={`faq secondary-text-contrast ${isOpen ? 'is-open' : ''}`}
          style={{color: 'var(--text)'}}
      >
        { question }
        <BiPlusMedical className={`faq-icon ${isOpen ? 'expand' : ''}`} size={26} fill='var(--accent)' />
      </h5>
      <div className='faq-a secondary-text-contrast'
           onClick={stopPropagation}
           style={{color: 'var(--text)'}}
           ref={answerRef}
      >
        <p>
          { answer }
        </p>
      </div>
    </div>
  );
}


export default FaqItem;