import React from 'react';
import './Loader.css'; // Add styles in a separate CSS file

const ThreeDotsLoader = () => {
  return (
    <div className="loader-container">
      <div className="dot dot1"></div>
      <div className="dot dot2"></div>
      <div className="dot dot3"></div>
    </div>
  );
};

export default ThreeDotsLoader;
