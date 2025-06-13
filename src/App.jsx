import "./App.css";
import teams from "./teams";
import fetchPlayers from "./api.js"
import { useState } from "react";


function App() {
const [players, setPlayers] = useState([])
  function handleChange(e) {
    const teamId = e.target.value;
    fetchPlayers(teamId).then(res => setPlayers(res.players))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="ball.webp" className="App-logo" alt="logo" />
        <h1 className="App-mainTitle">NBA</h1>
      </header>
      <main className="App-main">
        <select name="team" onChange={handleChange} defaultValue="">
          <option value="" disabled hidden>
            Select an option
          </option>
          {teams.map((team) => (
            <option value={team.id} key={team.id}>
              {team.name}
            </option>
          ))}
        </select>

        <div className="App-team">
          <h2>TEAM</h2>
          {JSON.stringify(players)}
          <div className="App-players">
            <div className="App-player">
              <div className="App-player-image">
                <img src="https://img.sportradar.com/ls/players/getty250x250/607778.png" />
              </div>
              <p className="App-player-name">James Harden</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
