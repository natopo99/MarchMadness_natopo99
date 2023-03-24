import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';



import data from "./teams.json";
const teamList = data.teams;

function Welcome(){
  return(
  <h1>Here are some college basketball teams!!!</h1>
  
  );
}


class Teams extends React.Component<{school: string; name: string; state: string; city: string;}>{
  render()
  {
    const oneTeam = this.props;

    return(
      <div>
        <h2>{oneTeam.school}</h2>
        <h2>Mascot: {oneTeam.name}</h2>
        <h2>{oneTeam.state}</h2>
        <h2>{oneTeam.city}</h2>
        
      </div>
    );
  }
}

function TeamInfo(){
  return(
    <div>
      {teamList.map(oneTeam => <Teams {...oneTeam}/>)}
    </div>
  )
}



function App() {
  return (

    <body>
    <div>
      <Welcome/>
    </div>
      <div className="App">
        <div className='col-9'>
          <TeamInfo />
        </div>
      </div>

    </body>
  );
}

export default App;
