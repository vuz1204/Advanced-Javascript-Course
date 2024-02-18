const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// Task 1
const scoredPlayers = game.scored;

for (const [i, el] of scoredPlayers.entries()) {
    console.log(`Goal ${i + 1}: ${el}`);
}

// Task 2
const values = Object.values(game.odds);

let theAvarageOdd = 0;
for (const value of values) {
    theAvarageOdd += value;
}

theAvarageOdd /= values.length;
console.log(theAvarageOdd);

// Task 3
for (const [team, value] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
    console.log(`Odd of ${teamStr}: ${value}`);
    // console.log(`Odd of victory ${game[team] ?? 'draw'}: ${value}`);
}

// Bonus
const scorers = {};

// for (let x of game.scored) {
//   if (scorers[x]) {
//     scorers[x]++;
//   } else {
//     scorers[x] = 1;
//   }
// }

for (let x of game.scored) {
    scorers[x]++ || (scorers[x] = 1);
}

console.log(scorers);