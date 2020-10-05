import React from 'react';

const ProgressBar = (props) => {

  const containerStyles = {
    width: '100%',
    background: '#EDEDED'
  }

  const fillerStyles = {
    width: `${props.progress}%`,
    height: '4px',
    background: '#7fc242'
  }

  return (
  <div className="progressBar" style={containerStyles}>
  <div className="bar" style={fillerStyles}>
    <span></span>
  </div>
  </div>);
};



export default ProgressBar;
