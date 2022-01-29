import Team from "./Team"
import { FaCalendarDay, FaPlusCircle } from "react-icons/fa";


const Teams = ({ teams, onSelect, shown }) => {
  return (
    <div className="teams">
    <div className="icon">
      <FaCalendarDay size={25}/>
    </div>
      <div className="scrollBase" >
        {teams.map((team) => (
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
