
import React from 'react';
import {
  IoCloseCircleOutline,
  IoWarningOutline,
  IoCheckmarkCircleOutline,
  IoInformationCircleOutline
} from 'react-icons/io5';

import './Search.css';


const SearchAlert = ({ message, type }) => {

  // Render icons based on alert type
  const getIcon = () => {
    switch (type) {
      case 'error':
        return <IoCloseCircleOutline size={20} className='search-alert-icon' />;
      case 'warning':
        return <IoWarningOutline size={20} className='search-alert-icon' />;
      case 'success':
        return <IoCheckmarkCircleOutline size={20} className='search-alert-icon' />;
      case 'info':
        return <IoInformationCircleOutline size={20} className='search-alert-icon' />;
      default:
        return null;
    }
  };

  return (
    <small>
      <p>
        { getIcon() }
        { message }
      </p>
    </small>
  );
}


export default SearchAlert;