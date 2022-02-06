import Team from "./Team"
import CalendarIcon from "./CalendarIcon";
import { FaPlusCircle } from "react-icons/fa";


const Teams = ({ teams, onSelect, shown }) => {
  const sortedTeams = [].concat([...teams])
  .sort((a, b) => a.number > b.number ? 1 : -1)

  return (
    <div className="teams">
    <CalendarIcon shown={shown} onSelect={onSelect}/>
      <div className="scrollBase" >
        {sortedTeams.map((team) => (
          <Team key={team.number} team={team} onSelect={onSelect} shown={shown}/>
        ))}
        <div className="icon">
          <FaPlusCircle size={25}/>
        </div>
      </div>
    </div>
  );
};

export default Teams;
