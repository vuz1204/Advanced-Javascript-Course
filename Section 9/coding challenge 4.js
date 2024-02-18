document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

/*
TEST DATA
underscore_case
 first_name
some_Variable
  calculate_AGE
delayed_departure
*/

// document.querySelector('button').addEventListener('click', () => {
//     const text = document.querySelector('textarea').value.toLowerCase();
//     const array = text.split('\n');

//     const trimmedArray = [];

//     for (const line of array) {
//         trimmedArray.push(line.trim());
//     }

//     for (const [i, line] of trimmedArray.entries()) {
//         const [first, second] = line.split('_');
//         const camelCaseText = first + second[0].toUpperCase() + second.slice(1);
//         console.log(`${camelCaseText.padEnd(20)}${'✅'.repeat(i + 1)}`);
//     }
// });

document.querySelector('button').addEventListener('click', () => {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');

    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');
        const outPut = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
        console.log(`${outPut.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
});