export function fetchPlayers(teamId) {
  return fetch(`/api/nba/trial/v8/en/teams/${teamId}/profile.json`, {
    headers: {
      accept: "application/json",
      "x-api-key": import.meta.env.VITE_NBA_API_KEY,
    },
  }).then((res) => res.json());
}
