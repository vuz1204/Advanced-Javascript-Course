const calcAverageHumanAge = (ages) => {
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    const adults = humanAges.filter(age => age >= 18);
    // const average = adults.reduce((acc, cur) => acc + cur, 0) / adults.length;
    const average = adults.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
    return average;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));;
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));;