import Teams from "./Teams";
import Details from "./Details";

const Sidebar = ({ teams, onSelect, onDelete, shown }) => {

  function getTeam() {
    for (const e in teams) {
      if (teams[e].number === shown) {
        return teams[e];
      }
    }
    return 0;
  }

  const team = getTeam()

  return (
  <div className="sidebar">
      <Teams teams={teams} onSelect={onSelect} 
      onDelete={onDelete} shown={shown}/>
      <Details key={team.number} team={team} shown={shown}/>
  </div>
  );
};

export default Sidebar;
