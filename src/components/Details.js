import React from 'react';

const Details = ({ team, shown }) => {
  return (
    <div className='details' style={{display: 
    (team.number === shown) ? "inherit" : "none"}}>
      <h2>{team.number} - {team.name}</h2>
    </div>
  );
};

export default Details;
