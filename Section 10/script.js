'use strict';

/*
////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = (flightNum, numPassengers = 1, price = 199 * numPassengers) => {
    // ES5
    // numPassengers = numPassengers || 10;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
*/

/*
////////////////////////////
// How Passing Arguments Works: Value vs Reference
const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 65865768856
}

const checkIn = (flightNum, passenger) => {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 65865768856) {
        console.log('Checked in');
        // alert('Checked in');
    } else {
        console.log('Wrong passport!');
        // alert('Wrong passport!');
    }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = (person) => {
    person.passport = Math.trunc(Math.random() * 100000000000)
};

newPassport(jonas);
checkIn(flight, jonas);
*/

/*
////////////////////////////
// Functions Accepting Callback Functions
const oneWord = (str) => {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = (str) => {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transformer = (str, fn) => {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = () => {
    console.log('Hand');
}
// document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

/*
////////////////////////////
// Functions Returing Functions
const greet = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// Challenge 
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');
*/

const runOnce = () => {
    console.log('This will never run again');
}
runOnce();

// IIFE
(() => {
    console.log('This will never run again');
    const isPrivate = 23;
})();

// console.log(isPrivate);

{
    const isPrivate = 23;
    var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);