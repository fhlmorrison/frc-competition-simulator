import React from 'react';

const Button = ({ onClick, color, text }) => {
  return (
    <button className='button' type="button" onClick={onClick} 
    style={{backgroundColor: color}}>{text}</button>
  );
};

export default Button;
