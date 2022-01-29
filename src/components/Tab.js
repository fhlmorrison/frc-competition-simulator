import React from 'react';

const Tab = ({ name, shown, onShow }) => {
  return (
    <div className='tab' style={{background: 
    (name === shown)?'var(--main-bg-color)':'var(--header-bg-color)'}} 
    onClick={() => {onShow(name)}}>
        {name}
    </div>
  );
};

export default Tab;
