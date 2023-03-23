import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';



import data from "./teams.json";
const teamList = data.teams;

function Welcome(){
  return(<h1>It Worked!!!</h1>);
}

class Teams extends React.Component{
  render()
  {
    const oneTeam = this.props;
    return(
      <div>
        <h2>{oneTeam.school}</h2>
        <h2>{oneTeam.name}</h2>
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
  );
}



function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Welcome/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.
          </code> and save to reload.
        </p>
      </header>
      <TeamInfo/>
    </div>
  );
}
ReactDOM.render(
  <App/>,
  document.getElementById('mountNode'),              
);

export default App;
