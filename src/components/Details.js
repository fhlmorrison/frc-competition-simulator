const Details = ({ team, shown }) => {

  return (
    <div className='details'>
      {shown === 0 
      ?  <h2>Competition Details</h2>
      : <h2>{team.number} - {team.name}</h2>}
    </div>
  );
};

export default Details;
