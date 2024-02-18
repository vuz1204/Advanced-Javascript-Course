const checkDogs = (dogsJulia, dogsKate) => {
    const rightDogsJulia = dogsJulia.slice();
    rightDogsJulia.splice(0, 1);
    rightDogsJulia.splice(-2);
    // const rightDogsJulia = dogsJulia.slice(1, -2);
    dogsJuliaAndKate = rightDogsJulia.concat(dogsKate);
    dogsJuliaAndKate.forEach((age, i) => {
        age >= 3 ? console.log(`Dog number ${i + 1} is an adult, and is ${age} year old`) : console.log(`Dog number ${i + 1} is still a puppy`);
    })
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);