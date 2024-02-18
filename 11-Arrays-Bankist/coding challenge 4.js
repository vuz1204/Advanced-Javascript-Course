const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(
  dog => (dog.recommendedFoodPortion = Math.round(dog.weight ** 0.75 * 28))
);

// 2.
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
// const recommendedPortion = sarahDog.recommendedFoodPortion;
// const lowerBound = recommendedPortion * 0.9;
// const upperBound = recommendedPortion * 1.1;

// sarahDog.curFood > lowerBound && sarahDog.curFood < upperBound
//   ? console.log(`Sarah's dog has the correct food portion.`)
//   : console.log(`Sarah's dog does not have the correct food portion.`);
console.log(
  `Sarah's dog is eating too ${
    sarahDog.curFood > sarahDog.recommendedFoodPortion ? 'much' : 'little'
  }`
);

// 3.
// const ownersEatTooMuch = [];
// const ownersEatTooLittle = [];

// dogs.forEach(dog => {
//   if (dog.curFood > dog.recommendedFoodPortion * 1.1) {
//     ownersEatTooMuch.push(dog.owners);
//   } else if (dog.curFood < dog.recommendedFoodPortion * 0.9) {
//     ownersEatTooLittle.push(dog.owners);
//   }
// });
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFoodPortion)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFoodPortion)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
const isAnyDogEatingExactlyTheAmount = dogs.some(
  dog => dog.curFood === dog.recommendedFoodPortion
);
console.log(isAnyDogEatingExactlyTheAmount);

// 6.
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFoodPortion * 0.9 &&
  dog.curFood < dog.recommendedFoodPortion * 1.1;

const isAnyDogEatingAnOkayAmount = dogs.some(checkEatingOkay);
console.log(isAnyDogEatingAnOkayAmount);

// 7.
// const dogsThatAreEatingAnOKAYAmountOfFood = [];
// dogs.forEach(dog => {
//   if (
//     dog.curFood > dog.recommendedFoodPortion * 0.9 &&
//     dog.curFood < dog.recommendedFoodPortion * 1.1
//   )
//     dogsThatAreEatingAnOKAYAmountOfFood.push(dog);
// });
// console.log(dogsThatAreEatingAnOKAYAmountOfFood);
const dogsThatAreEatingAnOkayAmountOfFood = dogs.filter(checkEatingOkay);
console.log(dogsThatAreEatingAnOkayAmountOfFood);

// 8.
const dogsSortedByRecommentdedFoodPortion = dogs
  .slice()
  .sort((a, b) => a.recommendedFoodPortion - b.recommendedFoodPortion);
console.log(dogsSortedByRecommentdedFoodPortion);
