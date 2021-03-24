const team = {
  _players: [
    {
      firstName: 'Pete', 
      lastName: 'Wheeler', 
      age: 54
    },
    {
      firstName: 'Paul', 
      lastName: 'Soccer', 
      age: 23
    },
    {
      firstName: 'John', 
      lastName: 'Basket', 
      age: 32
    }
  ],
  _games: [
    {
      opponent: 'Basket',
      teamPoints: 42,
      opponentPoints: 17
    },
   {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
   {
      opponent: 'Tennis',
      teamPoints: 52,
      opponentPoints: 37
    },
  ],
  get players() { return this._players },
  set players(input) { this._players = input },
  get games() { return this._games },
  set games(input) { this._games = input },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
  this.players.push(player);
  },
  addGame(opponentName, teamPoints, opponentPoints) {
    const game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Titans', 100, 98);
team.addGame('Danse', 130, 118);
team.addGame('Badmington', 210, 208);
console.log(team.games);