import { fetchPlayers } from "./api";
import "./App.css";
import teams from "./teams";

function App() {
  function handleChange(e) {
    const teamId = e.target.value;
    console.log(teamId);
    fetchPlayers(teamId);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="ball.webp" className="App-logo" alt="logo" />
        <h1 className="App-mainTitle">NBA APP</h1>
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
      </main>
    </div>
  );
}

export default App;
