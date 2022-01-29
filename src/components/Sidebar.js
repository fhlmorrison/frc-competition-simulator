import Teams from "./Teams";
import Details from "./Details";

const Sidebar = ({ teams, onSelect, onDelete, shown }) => {
  return (
  <div className="sidebar">
      <Teams teams={teams} onSelect={onSelect} 
      onDelete={onDelete} shown={shown}/>
      {teams.map((team) => (
        <Details key={team.number} team={team} shown={shown}/>
      ))}
  </div>
  );
};

export default Sidebar;
