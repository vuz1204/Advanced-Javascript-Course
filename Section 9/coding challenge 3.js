const gameEvents = new Map([
    [17, 'Goal'],
    [36, 'Substitution'],
    [47, 'Goal'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'Goal'],
    [80, 'Goal'],
    [92, 'Yellow card'],
]);

// Task 1
const events = [...new Set(gameEvents.values())];
console.log(events);

// Task 2
gameEvents.delete(64);

// Task 3
// const minutes = [...gameEvents.keys()];

// let totalTime = 0;
// let spaceTime = 0;

// for (let index = 0; index < minutes.length; index++) {
//     totalTime += minutes[index] - spaceTime;
//     spaceTime = minutes[index];
// }

// const avgTime = totalTime / minutes.length;

// console.log(`An event happened, on average, every ${avgTime} minutes`);

console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

const totalTime = [...gameEvents.keys()].pop();

console.log(`An event happened, on average, every ${totalTime / gameEvents.size} minutes`);

// Task 4
for (const [minute, event] of gameEvents) {
    // if (minute <= 45) {
    //     console.log(`[FIRST HALF] ${minute}: ${event}`);
    // } else {
    //     console.log(`[SECOND HALF] ${minute}: ${event}`);
    // }

    const half = minute <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${minute}: ${event}`);
}
