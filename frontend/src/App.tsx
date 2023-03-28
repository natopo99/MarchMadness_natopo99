import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import data from "./teams.json";
import './index.css';

const teamList = data.teams;

function Welcome(){
  return(
    <h1>Here are some college basketball teams!!!</h1>
  );
}
// Create the teams class
class Teams extends React.Component<{school: string; name: string; state: string; city: string;}>{
  render()
  {
    const oneTeam = this.props;

    return(
      <div className="team-container">
        {/* These are the the values that are passed from the JSON file */}
        <h1>{oneTeam.school}</h1>   
        <h3>Lets Go {oneTeam.name}!!</h3>
        <h3>{oneTeam.city}, {oneTeam.state}</h3>
      </div>
    );
  }
}


function TeamInfo(){
  return(
    <div className="team-info">
      {teamList.map(oneTeam => <Teams {...oneTeam}/>)}
    </div>
  )
}

// this is that app that runs the classes
function App() { 
  return (
    <div>
      <Welcome/>
      <div className="App">
        <div className='col-9'>
          <TeamInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
