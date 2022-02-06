import { FaCalendarDay } from "react-icons/fa";

const CalendarIcon = ({ shown, onSelect }) => {
  return (<div className="icon" onClick={() => onSelect(0)} style={{backgroundColor: (0 === shown) ? 'var(--sidebar-bg-color)': 'initial'}}>
  <FaCalendarDay size={25}/>
</div>);
};

export default CalendarIcon;
