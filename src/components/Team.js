import React, { useState } from 'react';

const Team = ({ team, onSelect, shown }) => {
  const [hovered, setHovered] = useState(false)

  return (
  <div className='team' onClick={() => onSelect(team.number)}
  style={{backgroundColor: (team.number === shown || hovered) ? 'var(--sidebar-bg-color)': 'initial'}}
  onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
  >
    {team.number}
  </div>
  );
};

export default Team;
