import React from 'react';

const ProgressBar = (props) => {

  const containerStyles = {
    width: '100%',
    background: '#EDEDED'
  }

  const fillerStyles = {
    width: `${props.progress}%`,
    height: '4px',
    background: '#1428a0'
  }

  return (
  <div className="progressBar" style={containerStyles}>
  <div className="bar" style={fillerStyles}>
    <span></span>
  </div>
  </div>);
};



export default ProgressBar;
