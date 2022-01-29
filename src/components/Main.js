import { useState } from 'react';
import React from 'react';
import Tab from './Tab';
import Quals from './Quals';

const Main = ({ teams }) => {
    const [shown, setShown] = useState('Tab 1')

    const onShow = (name) => {
        setShown(name)
    }

  return (
<div className='main'>
    <div className='tabBar'>
        <Tab name='Qualification Matches' shown={shown} onShow={onShow}/>
        <Tab name='Tab 2' shown={shown} onShow={onShow}/>
        <Tab name='Tab 3' shown={shown} onShow={onShow}/>
    </div>
    <Quals name='Qualification Matches' shown={shown}/>
</div>
  );
};

export default Main;
