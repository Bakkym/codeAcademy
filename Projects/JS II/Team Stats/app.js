const team = {
  _players: [
    {
      firstName: 'Lionel',
      lastName : 'Messi',
      age: 34
    },
    {
      firstName: 'Cristiano',
      lastName : 'Ronaldo',
      age: 36
    }, 
    {
      firstName: 'Kevin',
      lastName : 'Debruyne',
      age: 32
    }
  ],
  _games: [
    {
        opponent: 'Real Madrid',
        teamPoints : 10,
        oponnetPoints: 2

    },
    {
      opponent: 'FC Bayern Munich',
      teamPoints : 5,
      oponnetPoints: 1

    },
    {
      opponent: 'PSG',
      teamPoints : 7,
      oponnetPoints: 2

    }
  ],

  get players(){
    return this._players
  },

  get games(){
    return this._games
  },

  addPlayer(newFirstName, newLastName, newAge){
     let player = {
      firstName: newFirstName,
      lastName : newLastName,
      age : newAge
     } 
     this._players.push(player)
  },

  addGame(opponent, teamPoints, oponnetPoints){
    let game = {
      opponent,
      teamPoints,
      oponnetPoints
    }

    this._games.push(game)

  }
}

team.addPlayer('Karim', 'Benzema', 35)
team.addGame('Titans',100,98)
console.log(team.players)
console.log(team.games)