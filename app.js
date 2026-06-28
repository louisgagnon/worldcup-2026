// 2026 FIFA World Cup Knockout Bracket
// 48 teams → Round of 32 → R16 → QF → SF → Final

const bracket = {
  rounds: [
    {
      name: "Round of 32",
      matches: [
        { id: "r32-1",  home: { name: "Brazil",      flag: "🇧🇷" }, away: { name: "Bolivia",     flag: "🇧🇴" }, homeScore: 4, awayScore: 0 },
        { id: "r32-2",  home: { name: "USA",          flag: "🇺🇸" }, away: { name: "Panama",      flag: "🇵🇦" }, homeScore: 3, awayScore: 0 },
        { id: "r32-3",  home: { name: "France",       flag: "🇫🇷" }, away: { name: "Belgium",     flag: "🇧🇪" }, homeScore: 2, awayScore: 1 },
        { id: "r32-4",  home: { name: "Spain",        flag: "🇪🇸" }, away: { name: "Morocco",     flag: "🇲🇦" }, homeScore: 1, awayScore: 0 },
        { id: "r32-5",  home: { name: "Argentina",    flag: "🇦🇷" }, away: { name: "Ecuador",     flag: "🇪🇨" }, homeScore: 2, awayScore: 0 },
        { id: "r32-6",  home: { name: "Mexico",       flag: "🇲🇽" }, away: { name: "Jamaica",     flag: "🇯🇲" }, homeScore: 3, awayScore: 1 },
        { id: "r32-7",  home: { name: "Germany",      flag: "🇩🇪" }, away: { name: "Serbia",      flag: "🇷🇸" }, homeScore: 2, awayScore: 0 },
        { id: "r32-8",  home: { name: "Portugal",     flag: "🇵🇹" }, away: { name: "Turkey",      flag: "🇹🇷" }, homeScore: 3, awayScore: 2 },
        { id: "r32-9",  home: { name: "England",      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }, away: { name: "Slovakia",    flag: "🇸🇰" }, homeScore: 2, awayScore: 0 },
        { id: "r32-10", home: { name: "Netherlands",  flag: "🇳🇱" }, away: { name: "Egypt",       flag: "🇪🇬" }, homeScore: 3, awayScore: 1 },
        { id: "r32-11", home: { name: "Uruguay",      flag: "🇺🇾" }, away: { name: "Peru",        flag: "🇵🇪" }, homeScore: 1, awayScore: 0 },
        { id: "r32-12", home: { name: "Japan",        flag: "🇯🇵" }, away: { name: "Australia",   flag: "🇦🇺" }, homeScore: 2, awayScore: 1 },
        { id: "r32-13", home: { name: "Colombia",     flag: "🇨🇴" }, away: { name: "Honduras",    flag: "🇭🇳" }, homeScore: 4, awayScore: 0 },
        { id: "r32-14", home: { name: "Senegal",      flag: "🇸🇳" }, away: { name: "Algeria",     flag: "🇩🇿" }, homeScore: 1, awayScore: 0 },
        { id: "r32-15", home: { name: "Italy",        flag: "🇮🇹" }, away: { name: "Croatia",     flag: "🇭🇷" }, homeScore: 2, awayScore: 1 },
        { id: "r32-16", home: { name: "South Korea",  flag: "🇰🇷" }, away: { name: "Iran",        flag: "🇮🇷" }, homeScore: 2, awayScore: 0 },
      ],
    },
    {
      name: "Round of 16",
      matches: [
        { id: "r16-1", home: { name: "Brazil",       flag: "🇧🇷" }, away: { name: "USA",         flag: "🇺🇸" }, homeScore: 2, awayScore: 1 },
        { id: "r16-2", home: { name: "France",       flag: "🇫🇷" }, away: { name: "Spain",       flag: "🇪🇸" }, homeScore: null, awayScore: null },
        { id: "r16-3", home: { name: "Argentina",    flag: "🇦🇷" }, away: { name: "Mexico",      flag: "🇲🇽" }, homeScore: null, awayScore: null },
        { id: "r16-4", home: { name: "Germany",      flag: "🇩🇪" }, away: { name: "Portugal",    flag: "🇵🇹" }, homeScore: null, awayScore: null },
        { id: "r16-5", home: { name: "England",      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }, away: { name: "Netherlands", flag: "🇳🇱" }, homeScore: null, awayScore: null },
        { id: "r16-6", home: { name: "Uruguay",      flag: "🇺🇾" }, away: { name: "Japan",       flag: "🇯🇵" }, homeScore: null, awayScore: null },
        { id: "r16-7", home: { name: "Colombia",     flag: "🇨🇴" }, away: { name: "Senegal",     flag: "🇸🇳" }, homeScore: null, awayScore: null },
        { id: "r16-8", home: { name: "Italy",        flag: "🇮🇹" }, away: { name: "South Korea", flag: "🇰🇷" }, homeScore: null, awayScore: null },
      ],
    },
    {
      name: "Quarter-finals",
      matches: [
        { id: "qf-1", home: { name: "Brazil",    flag: "🇧🇷" }, away: { name: "TBD", flag: "🏁" }, homeScore: null, awayScore: null },
        { id: "qf-2", home: { name: "TBD",       flag: "🏁" }, away: { name: "TBD", flag: "🏁" }, homeScore: null, awayScore: null },
        { id: "qf-3", home: { name: "TBD",       flag: "🏁" }, away: { name: "TBD", flag: "🏁" }, homeScore: null, awayScore: null },
        { id: "qf-4", home: { name: "TBD",       flag: "🏁" }, away: { name: "TBD", flag: "🏁" }, homeScore: null, awayScore: null },
      ],
    },
    {
      name: "Semi-finals",
      matches: [
        { id: "sf-1", home: { name: "TBD", flag: "🏁" }, away: { name: "TBD", flag: "🏁" }, homeScore: null, awayScore: null },
        { id: "sf-2", home: { name: "TBD", flag: "🏁" }, away: { name: "TBD", flag: "🏁" }, homeScore: null, awayScore: null },
      ],
    },
    {
      name: "Final",
      matches: [
        { id: "final", home: { name: "TBD", flag: "🏁" }, away: { name: "TBD", flag: "🏁" }, homeScore: null, awayScore: null },
      ],
    },
  ],
  thirdPlace: {
    name: "3rd Place",
    match: { id: "3rd", home: { name: "TBD", flag: "🏁" }, away: { name: "TBD", flag: "🏁" }, homeScore: null, awayScore: null },
  },
};

function getMatchStatus(match) {
  if (match.homeScore === null) return "upcoming";
  return "completed";
}

function getWinner(match) {
  if (match.homeScore === null) return null;
  if (match.homeScore > match.awayScore) return "home";
  if (match.awayScore > match.homeScore) return "away";
  return "draw";
}

function renderTeam(team, score, side, winner) {
  const isWinner = winner === side;
  const isLoser = winner !== null && winner !== "draw" && winner !== side;
  return `
    <div class="team ${isWinner ? "winner" : ""} ${isLoser ? "loser" : ""}">
      <span class="flag">${team.flag}</span>
      <span class="team-name">${team.name}</span>
      <span class="score">${score !== null ? score : ""}</span>
    </div>`;
}

function renderMatch(match, size) {
  const status = getMatchStatus(match);
  const winner = getWinner(match);
  return `
    <div class="match ${status} ${size || ""}">
      ${renderTeam(match.home, match.homeScore, "home", winner)}
      ${renderTeam(match.away, match.awayScore, "away", winner)}
    </div>`;
}

function renderRound(round, index) {
  const matchesHtml = round.matches.map((m) => renderMatch(m)).join("");
  return `
    <section class="round round-${index}">
      <h2 class="round-name">${round.name}</h2>
      <div class="matches">${matchesHtml}</div>
    </section>`;
}

function render() {
  const bracketEl = document.getElementById("bracket");

  const rounds = bracket.rounds.map((r, i) => renderRound(r, i)).join("");

  const tp = bracket.thirdPlace;
  const thirdHtml = `
    <section class="round round-third">
      <h2 class="round-name">${tp.name}</h2>
      <div class="matches">${renderMatch(tp.match)}</div>
    </section>`;

  bracketEl.innerHTML = rounds + thirdHtml;
}

render();
