import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const App = () => {

  /**
   * 
   */
  const [teams, setTeams] = useState([
    {
        number:2702,
        name:"Rebels",
    },
    {
        number: 1114,
        name: "Simbotics",
    },
    {
        number: 2056,
        name: "OP Robotics",
    }
  ])

  const [shown, setShown] = useState(0)

  const setDetails = (number) => {
    setShown(number)
  }

  /**
   * 
   * @param {*} number 
   */
  const deleteTeam = (number) => {
    setTeams(teams.filter((team) => 
    team.number !== number))
  }

  /**
   * 
   */
  return (
    <div className="App">
      <Header/>
      <div className='content'>
        <Sidebar teams={teams} onSelect={setDetails}
        onDelete={deleteTeam} shown={shown}/>
        <Main teams={teams}/>
      </div>
      <div className='footer'></div>
    </div>
  );
}


export default App;